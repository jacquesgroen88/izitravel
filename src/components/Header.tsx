import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from './logo/izilogo.jpg';

const navLinks = [
    { name: 'Destinations', path: '/#destinations' },
    { name: 'Packages', path: '/#packages' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
];

export default function Header() {
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between h-[80px]">

                {/* Logo */}
                <Link to="/" className="flex items-center group" onClick={handleNavClick}>
                    <img src={logoImg} alt="IziTravel Logo" className="h-16 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Home</Link>
                    {navLinks.map((link) => (
                        link.path.startsWith('/#')
                            ? <a key={link.name} href={link.path}
                                className="text-sm font-semibold transition-colors text-gray-600 hover:text-primary-600">
                                {link.name}
                            </a>
                            : <Link key={link.name} to={link.path}
                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                                {link.name}
                            </Link>
                    ))}
                </nav>

                {/* Right CTA (desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:0829672060" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                        <Phone className="w-4 h-4" /> 082 967 2060
                    </a>
                    <a href="/#quote" className="btn-primary py-2 px-5 text-sm h-10 shadow-primary-600/20">
                        Get a Quote
                    </a>
                </div>

                {/* Mobile: hamburger */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Panel */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 pb-6 pt-4 space-y-1 z-50">
                    <Link to="/" onClick={handleNavClick}
                        className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${isActive('/') ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                        Home
                    </Link>
                    {navLinks.map((link) => (
                        link.path.startsWith('/#')
                            ? <a key={link.name} href={link.path}
                                onClick={handleNavClick}
                                className="block py-3 px-4 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                {link.name}
                            </a>
                            : <Link key={link.name} to={link.path} onClick={handleNavClick}
                                className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${isActive(link.path) ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                                {link.name}
                            </Link>
                    ))}
                    <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
                        <a href="tel:0829672060" className="flex items-center gap-2 text-sm font-semibold text-gray-700 px-4 py-3">
                            <Phone className="w-4 h-4 text-primary-600" /> 082 967 2060
                        </a>
                        <a href="/#quote" onClick={handleNavClick} className="btn-primary text-center">
                            Get a Quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
