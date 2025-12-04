import React, { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Navigation from './components/Navigation';

const App = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://fakestoreapi.com/products")

        if (!response.ok) throw Error("Failed to fetch products", response.status);

        const data = await response.json();

        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message || "Failed to fetch products")
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [])

  useEffect(() => {
    let results = products;

    if (searchTerm.trim() !== '') {
      results = results.filter(result => result.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    setFilteredProducts(results)
  }, [searchTerm, products])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <div className="mb-8">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
              <p className="text-gray-800 font-semibold">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            <ProductList products={filteredProducts} />
          </>
        )}
      </main>
    </div>
  )
}

export default App