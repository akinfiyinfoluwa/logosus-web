
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">Page Not Found</h2>
      <p className="text-gray-500 dark:text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Go back home
      </Link>
    </div>
  );
}
