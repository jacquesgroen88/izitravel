import { motion } from 'framer-motion';
import { Map, BadgeDollarSign, HeartHandshake, Headphones } from 'lucide-react';

const benefits = [
    {
        icon: <Map className="w-8 h-8 text-primary-500" />,
        title: 'Local Travel Experts',
        description: 'Based right here in the Vaal Triangle. We know travel, and we know what our clients expect from a dream holiday.'
    },
    {
        icon: <BadgeDollarSign className="w-8 h-8 text-primary-500" />,
        title: 'Best Travel Deals',
        description: 'We leverage our industry connections to get you exclusive rates on flights and luxury resorts that you won\'t find online.'
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-primary-500" />,
        title: 'Personal Travel Planning',
        description: 'No cookie-cutter itineraries. We listen to your needs and craft a bespoke travel experience tailored just for you.'
    },
    {
        icon: <Headphones className="w-8 h-8 text-primary-500" />,
        title: 'Support Before & During',
        description: 'From the moment you book until you land back home, our team provides 24/7 dedicated support for total peace of mind.'
    }
];

export default function WhyBookWithUs() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 -skew-x-12 transform origin-top-right z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Book With Us</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
                    Planning a trip can be stressful. Let our local experts handle the details so you can focus on making memories.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300 shadow-sm border border-primary-100">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
