const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
            <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
            />
        </div>
        <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14">
                {product.title}
            </h3>
            <div className="flex justify-between items-center mt-3">
                <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {product.category}
                </span>
            </div>
            <div className="mt-3 flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 text-sm text-gray-600">
                    {product.rating.rate} ({product.rating.count})
                </span>
            </div>
        </div>
    </div>
);

export default ProductCard; 