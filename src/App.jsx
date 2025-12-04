import React, { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

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
  }, [searchTerm, filteredProducts, products])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Product Store</h1>
          <p className="text-blue-100 mt-1">Discover amazing products</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
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
              <p className="text-gray-600 text-sm">
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