import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto min-h-screen flex items-center justify-center flex-col gap-5">
                    <h1 className="text-7xl text-center font-primary">Oops!</h1>
                    <h2 className="font-primary">404 - PAGE NOT FOUND</h2>
                    <p className="uppercase">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to='/' className="hover:shadow-lg transition-all rounded-full px-5 py-3 bg-primary text-white font-bold">GO TO HOMEPAGE</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;