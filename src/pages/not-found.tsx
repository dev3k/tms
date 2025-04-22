import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center">
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <Button>
                    Return to Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
