import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to navigate to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // 5000ms = 5 seconds

    // Clean up the timeout in case the component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center" aria-live="polite">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">
          Oops! The page you're looking for doesn't exist. You will be redirected to the home page in 5 seconds...
        </p>
      </div>
    </div>
  );
}