import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from './logo/izilogo.jpg';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center group mb-6">
                        <img src={logoImg} alt="IziTravel Logo" className="h-14 w-auto object-contain invert mix-blend-screen grayscale brightness-200" />
                    </Link>
                    <p className="text-sm text-gray-400">
                        Helping travellers in the Vaal Triangle book unforgettable trips to Thailand, Mauritius, and Zanzibar. expert travel planning, best deals, and personal support.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="https://www.facebook.com/profile.php?id=100054564034399" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="https://www.instagram.com/izi_travel_and_tours/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Destinations</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/mauritius" className="hover:text-primary-500 transition-colors">Mauritius</Link></li>
                        <li><Link to="/zanzibar" className="hover:text-primary-500 transition-colors">Zanzibar</Link></li>
                        <li><Link to="/thailand" className="hover:text-primary-500 transition-colors">Thailand</Link></li>
                        <li><Link to="/maldives" className="hover:text-primary-500 transition-colors">Maldives</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
                        <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
                        <li><Link to="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link></li>
                        <li><Link to="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                            <span>20 Fairbanks Street, <br />NW 7, Vanderbijlpark</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                            <a href="tel:0829672060" className="hover:text-white transition-colors">082 967 2060</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                            <a href="mailto:terrib@izitravel.co.za" className="hover:text-white transition-colors">terrib@izitravel.co.za</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
                <p>&copy; {new Date().getFullYear()} Vaal Travel Co. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Built with passion for travel.</p>
            </div>
        </footer>
    );
}
