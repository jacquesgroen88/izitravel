import { motion } from 'framer-motion';

const images = [
    { url: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2000&auto=format&fit=crop', label: 'Beaches', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop', label: 'Resorts', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { url: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2000&auto=format&fit=crop', label: 'Island Sunsets', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop', label: 'Couples Travel', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { url: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop', label: 'Family Holidays', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop', label: 'Adventures', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Inspiration Gallery</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Get a glimpse of the paradise waiting for you. From pristine beaches to luxury resorts.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative rounded-xl overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
                        >
                            <img
                                src={img.url}
                                alt={img.label}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{img.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
