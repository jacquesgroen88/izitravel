import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoImg from './logo/izilogo.jpg';

export default function Header() {
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: 'Destinations', path: '/#destinations' },
        { name: 'Packages', path: '/#packages' },
        { name: 'About', path: '/#about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 h-[80px] bg-white border-b border-gray-100 z-50 flex items-center shadow-sm">
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img src={logoImg} alt="IziTravel Logo" className="h-16 w-auto object-contain" />
                </Link>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Home</Link>
                    {navLinks.map((link) => (
                        link.path.startsWith('/#')
                            ? <a key={link.name} href={pathname !== '/' ? `/${link.path}` : link.path}
                                className="text-sm font-semibold transition-colors text-gray-600 hover:text-primary-600">
                                {link.name}
                            </a>
                            : <Link key={link.name} to={link.path}
                                className={`text-sm font-semibold transition-colors ${isActive(link.path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>
                                {link.name}
                            </Link>
                    ))}
                </nav>

                {/* Right CTA */}
                <div className="flex items-center gap-4">
                    <a href="tel:0161234567" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors">
                        <Phone className="w-4 h-4" /> 016 123 4567
                    </a>
                    <a href="#quote" className="btn-primary py-2 px-5 text-sm h-10 shadow-primary-600/20">
                        Get a Quote
                    </a>
                </div>

            </div>
        </header>
    );
}
