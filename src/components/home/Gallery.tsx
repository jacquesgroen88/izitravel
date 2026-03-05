import { motion } from 'framer-motion';

const images = [
    // Hero — Zanzibar white sand beach, large focal point
    { url: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=2000&auto=format&fit=crop', label: 'Zanzibar Beaches', dest: 'Zanzibar', mdColSpan: 'md:col-span-2', mdRowSpan: 'md:row-span-3' },
    // Mauritius aerial turquoise lagoon
    { url: 'https://images.unsplash.com/photo-1562972904-4ec8a0d3acfb?q=80&w=2000&auto=format&fit=crop', label: 'Mauritius Lagoons', dest: 'Mauritius', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-2' },
    // Thailand Phi Phi island
    { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop', label: 'Thai Island Life', dest: 'Thailand', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-1' },
    // Overwater villas / bungalows
    { url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2000&auto=format&fit=crop', label: 'Overwater Villas', dest: 'Mauritius', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-2' },
    // Stone Town / Zanzibar culture
    { url: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2000&auto=format&fit=crop', label: 'Island Sunsets', dest: 'Zanzibar', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-1' },
    // Mauritius infinity pool
    { url: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2000&auto=format&fit=crop', label: 'Luxury Resorts', dest: 'Mauritius', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-1' },
    // Thai temples / Bangkok
    { url: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=2000&auto=format&fit=crop', label: 'Thai Culture', dest: 'Thailand', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-1' },
    // Zanzibar dhow sunset
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop', label: 'Tropical Escapes', dest: 'All Destinations', mdColSpan: 'md:col-span-1', mdRowSpan: 'md:row-span-1' },
];

const destColors: Record<string, string> = {
    'Zanzibar': 'bg-emerald-600',
    'Mauritius': 'bg-blue-600',
    'Thailand': 'bg-orange-600',
    'All Destinations': 'bg-primary-600',
};

export default function Gallery() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Inspiration Gallery</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Paradise is closer than you think. Explore our destinations — Zanzibar, Mauritius, and Thailand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[160px] gap-3">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`relative rounded-2xl overflow-hidden group col-span-1 ${img.mdColSpan} ${img.mdRowSpan}`}
                        >
                            <img
                                src={img.url}
                                alt={img.label}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            {/* Always-visible gradient + label */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                                <span className="text-white font-bold text-base drop-shadow-lg">{img.label}</span>
                                <span className={`text-white text-xs font-semibold px-2 py-1 rounded-full ${destColors[img.dest]} opacity-90`}>
                                    {img.dest}
                                </span>
                            </div>
                            {/* Hover shimmer overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
