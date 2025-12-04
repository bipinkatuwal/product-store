const ErrorMessage = ({ message }) => (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
        <h3 className="text-red-800 font-semibold text-lg mb-2">Error Occurred</h3>
        <p className="text-red-600">{message}</p>
    </div>
);

export default ErrorMessage; 