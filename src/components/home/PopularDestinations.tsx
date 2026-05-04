import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
    {
        id: 'mauritius',
        name: 'Mauritius',
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000&auto=format&fit=crop',
        description: 'Luxury resorts, pristine beaches, and turquoise lagoons. The ultimate relaxing escape.',
        path: '/mauritius'
    },
    {
        id: 'zanzibar',
        name: 'Zanzibar',
        image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=2000&auto=format&fit=crop',
        description: 'Exotic beaches, romantic sunsets, and historic Stone Town explorations.',
        path: '/zanzibar'
    },
    {
        id: 'thailand',
        name: 'Thailand',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
        description: 'Vibrant cities, stunning islands, and rich culture. Perfect for couples and families.',
        path: '/thailand'
    },
    {
        id: 'maldives',
        name: 'Maldives',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2000&auto=format&fit=crop',
        description: 'Private overwater villas, crystal lagoons, and unparalleled luxury. The pinnacle of island living.',
        path: '/maldives'
    }
];

export default function PopularDestinations() {
    return (
        <section id="destinations" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 text-center flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Popular Destinations</h2>
                        <p className="text-gray-600 text-lg">
                            Discover our handpicked tropical escapes offering breathtaking beaches, luxury resorts, and cultural adventures.
                        </p>
                    </div>
                    <a href="/#packages" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center lg:justify-start gap-2 group shrink-0">
                        View All Packages
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((dest, i) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-3">{dest.name}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{dest.description}</p>
                                <Link to={dest.path} className="btn-secondary w-full group-hover:border-primary-500 group-hover:text-primary-600">
                                    Explore {dest.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
