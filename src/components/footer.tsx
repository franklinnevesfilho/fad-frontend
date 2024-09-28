
export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div
                className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400">MyApp</a>
                </div>

                {/* Footer Links - Centered */}
                <ul className="flex space-x-6 justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <li>
                        <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                    </li>
                </ul>

                {/* Copyright Information */}
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} FAD - Shellhacks 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
