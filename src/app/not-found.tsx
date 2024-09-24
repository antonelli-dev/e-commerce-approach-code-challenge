import  Link  from 'next/link';

export const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1 style={{ fontSize: '72px', color: '#ff4d4d' }}>404</h1>
            <p style={{ fontSize: '24px', color: '#333' }}>Oops! The page you are looking for can not be found.</p>
            <Link href="/" style={{ fontSize: '18px', color: '#007bff', textDecoration: 'none' }}>
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFoundPage;
