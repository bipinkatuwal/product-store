const ProductCard = ({ product }) => (
    <div className="shadow rounded-2xl p-3
     overflow-hidden">
        <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center p-4 overflow-hidden">
            <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain hover:scale-110 transition-all duration-300"
            />
        </div>
        <div className="mt-2">
            <div className="flex items-center">
                <span className="text-green-700 font-bold">★</span>
                <span className="ml-1 text-sm text-green-700 font-semibold">
                    {product.rating.rate} ({product.rating.count})
                </span>
            </div>
            <h3 className="font-semibold line-clamp-1 mt-1">
                {product.title}
            </h3>

            <span className="font-semibold text-slate-600 text-sm">
                ${product.price}
            </span>
        </div>
    </div>
);

export default ProductCard; 