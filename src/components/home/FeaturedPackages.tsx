import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
    {
        id: 'pkg3',
        title: 'Mauritius Family Holiday',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2116&auto=format&fit=crop',
        duration: '7 Nights',
        location: 'Mauritius',
        highlights: ['Beachfront Resort', 'Kids Club Included', 'Flights & Transfers'],
        price: 'R21,000',
        slug: '/packages/mauritius-family',
    },
    {
        id: 'pkg2',
        title: 'Romantic Zanzibar Getaway',
        image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=2000&auto=format&fit=crop',
        duration: '5 Nights',
        location: 'Zanzibar',
        highlights: ['All-inclusive Resort', 'Sunset Dhow Cruise', 'Airport Transfers'],
        price: 'R14,200',
        slug: '/packages/romantic-zanzibar',
    },
    {
        id: 'pkg1',
        title: 'Bangkok + Phuket Escape',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop',
        duration: '7 Nights',
        location: 'Thailand',
        highlights: ['Flights Included', '4-Star Hotels', 'Phi Phi Island Tour'],
        price: 'R18,500',
        slug: '/packages/bangkok-phuket',
    },
    {
        id: 'pkg4',
        title: 'Maldives Overwater Escape',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2000&auto=format&fit=crop',
        duration: '6 Nights',
        location: 'Maldives',
        highlights: ['Private Overwater Villa', 'All-inclusive & Seaplane', 'Couples Spa Included'],
        price: 'R32,000',
        slug: '/packages/maldives-overwater',
    }
];

export default function FeaturedPackages() {
    return (
        <section id="packages" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Holiday Packages</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our most popular travel deals handpicked by our Vaal Triangle experts. Flight, accommodation, and peace of mind included.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wide">
                                    {pkg.location}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between flex-wrap gap-2 items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">From</div>
                                        <div className="text-xl font-bold text-primary-600">{pkg.price}</div>
                                        <div className="text-xs text-gray-500">per person</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gray-400" /> {pkg.duration}</div>
                                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> {pkg.location}</div>
                                </div>

                                <ul className="space-y-2 mb-8 flex-grow">
                                    {pkg.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={pkg.slug} className="btn-primary w-full shadow-primary-500/20 flex items-center justify-center gap-2">
                                    <Plane className="w-5 h-5" /> View Package
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
