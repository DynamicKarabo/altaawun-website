import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />
            <h1 className="text-6xl md:text-8xl font-bold text-emerald-600 mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/">
                    <Home className="mr-2" size={20} />
                    Back to Home
                </Link>
            </Button>
        </div>
    );
}
