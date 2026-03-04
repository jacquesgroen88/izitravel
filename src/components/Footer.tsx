import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2 group mb-6">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                            <Plane className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white uppercase">Vaal Travel Co.</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Helping travellers in the Vaal Triangle book unforgettable trips to Thailand, Mauritius, and Zanzibar. expert travel planning, best deals, and personal support.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Destinations</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/thailand" className="hover:text-primary-500 transition-colors">Thailand</Link></li>
                        <li><Link to="/mauritius" className="hover:text-primary-500 transition-colors">Mauritius</Link></li>
                        <li><Link to="/zanzibar" className="hover:text-primary-500 transition-colors">Zanzibar</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="/#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
                        <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
                        <li><a href="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                            <span>123 Travel Avenue, <br />Vaal Triangle, South Africa</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                            <a href="tel:0161234567" className="hover:text-white transition-colors">016 123 4567</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                            <a href="mailto:hello@vaaltravel.co.za" className="hover:text-white transition-colors">hello@vaaltravel.co.za</a>
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
