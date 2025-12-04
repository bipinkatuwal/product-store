const SearchBar = ({ searchTerm, onSearchChange }) => (
    <div className="mb-6">
        <input
            type="text"
            placeholder="Search products by title..."
            value={searchTerm}
            onChange={onSearchChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
        />
    </div>
);

export default SearchBar; 