import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl sm:text-2xl text-gray-900">
            MVP<span className="text-green-600">.</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Experience
            </a>
            <a
              href="#leadership"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Leadership
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="#contact"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
