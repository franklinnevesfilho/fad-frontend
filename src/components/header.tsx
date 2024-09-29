import { Link } from 'react-router-dom';

interface HeaderProps {
    hideLinks?: boolean;
}

export function Header({ hideLinks }: HeaderProps) {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-400" title="FAD">
                        FAD
                    </Link>
                </div>

                {!hideLinks && (
                    <>
                        <ul className="hidden md:flex space-x-6">
                            <li>
                                <Link to="/contact" className="hover:text-gray-400" title="Contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin" className="hover:text-gray-400" title="Sign in">
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="hover:text-gray-400" title="Register">
                                    Register
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}
