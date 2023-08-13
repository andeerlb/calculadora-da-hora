import { Link } from 'react-router-dom';
export function NotFoundPage() {
    return (
        <>
            Error 404 Page not found, this url is not correct or this page does not exist
            <h2>
                <Link to={'/'}> Go to home Page </Link>
            </h2>
        </>
    );
}