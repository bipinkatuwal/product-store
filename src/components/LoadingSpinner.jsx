const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-700 border-t-transparent"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading products...</p>
        </div>
    </div>
);

export default LoadingSpinner; 