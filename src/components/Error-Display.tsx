interface ErrorDisplayProps {
  message: string | null;
  reset: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, reset }) => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h2 className="text-3xl my-2 text-red-700">{message}</h2>
      <button
        className="bg-orange-400 border-orange-700 p-1 rounded my-2"
        onClick={() => reset()}
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorDisplay;
