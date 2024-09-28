
interface HeaderProps{
    hideLinks ?: boolean;
}

export function Header({hideLinks}: HeaderProps){
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400">
                        FAD
                    </a>
                </div>

                {
                    !hideLinks && (
                        <>
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <a href="#services" className="hover:text-gray-400">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-gray-400">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#home" className="hover:text-gray-400">
                                        Sign in
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-gray-400">
                                        Register
                                    </a>
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
                    )
                }
            </nav>
        </header>
    )
    }