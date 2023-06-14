import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-stone-100">
            <header className="bg-stone-50 shadow-sm">
                <div className="max-w-screen-lg mx-auto px-4 py-6 md:py-8 flex justify-between items-center">
                    <Link to="/" className="text-lg font-bold text-stone-800 hover:text-stone-700">
                        Misbah Blog
                    </Link>
                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <Link
                                    to="/"
                                    activeClassName="font-medium text-stone-900"
                                    className="text-stone-600 hover:text-stone-900 transition duration-150 ease-in-out"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blogs"
                                    activeClassName="font-medium text-stone-900"
                                    className="text-stone-600 hover:text-stone-900 transition duration-150 ease-in-out"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow px-4 py-8 md:py-12 bg-stone-100 ">
                {children}
            </main>
            <footer className="bg-stone-800 py-4">
                <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center">
                    <div className="flex space-x-4 mb-4">
                        <a
                            href="https://twitter.com/misbah-blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-300 hover:text-stone-400 transition duration-150 ease-in-out"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M24 4.56a9.86 9.86 0 0 1-2.83.775 4.932 4.932 0 0 0 2.167-2.717c-.953.568-2.008.977-3.13 1.2a4.932 4.932 0 0 0-8.404 4.496A13.982 13.982 0 0 1 1.67 3.18a4.93 4.93 0 0 0 1.523 6.567A4.907 4.907 0 0 1 1 9.4v.06a4.93 4.93 0 0 0 3.949 4.836A4.932 4.932 0 0 1 3 14.388c0 2.305 1.712 4.224 3.967 4.66a4.93 4.93 0 0 1-2.301-.64c.003.056.003.113.003.17a4.93 4.93 0 0 0 3.948 4.836 9.86 9.86 0 0 1-6.844 2.705A13.928 13.928 0 0 0 9.043 24c9.1 0 14.09-7.513 14.09-14.043 0-.21-.005-.42-.015-.63A9.967 9.967 0 0 0 24 4.56z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/misbah-blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-300 hover:text-stone-400 transition duration-150 ease-in-out"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.513 10.513 0 0 0 12 1.5zm1.574 17.424v-6.528h1.786l.267-2.028h-2.053v-1.298c0-.585.162-.984.992-.984h1.1V6.09a14.18 14.18 0 0 0-1.533-.078c-1.511 0-2.547.91-2.547 2.578v1.439H9v2.028h1.886V19.924h2.688z"
                                />
                            </svg>
                        </a>
                        <a
                            href="mailto:newsletter@misbah-blog.com"
                            className="text-stone-300 hover:text-stone-400 transition duration-150 ease-in-out"
                        >
                            <span className="sr-only">Email</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.002 4.5h19.996A1.502 1.502 0 0 1 23.5 6.002L23.5 17.5a1.5 1.5 0 0 1-1.498 1.498H2.002A1.5 1.5 0 0 1 .504 17.5v-11.5a1.5 1.5 0 0 1 1.498-1.498zm0-2A3.502 3.502 0 0 0-1 4.502L-1 17.5A3.5 3.5 0 0 0 2.002 21h19.996A3.5 3.5 0 0 0 25.5 17.5V4.502A3.502 3.502 0 0 0 22.004 1H2.002zm9.5 7.5L23 15h-6.997v4h-4.006v-4H2L11.5 8.5zm7.5-1h-3v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 9h-11v-7h11v7zm-7-5h3v3h-3v-3z"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="text-sm text-stone-300">© {new Date().getFullYear()} Misbah Blog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
