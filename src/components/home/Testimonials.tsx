import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah van der Merwe',
        location: 'Vanderbijlpark',
        rating: 5,
        text: 'Our family trip to Mauritius was perfectly orchestrated! Every transfer, hotel, and activity was seamless. Will only book with Vaal Travel Co. from now on.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Johan & Lisa',
        location: 'Vereeniging',
        rating: 5,
        text: 'We booked our Zanzibar honeymoon through them and it exceeded all expectations. They even arranged a surprise romantic dinner on the beach for us! Highly recommended.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Michael N.',
        location: 'Sasolburg',
        rating: 5,
        text: 'Thailand was amazing! I had no idea where to start planning, but their local experts put together a package that fit my budget and gave me the adventure of a lifetime.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop'
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">What Our Clients Say</h2>

                    <div className="flex items-center gap-2 mb-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                        <span className="font-bold text-gray-900">4.9/5</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-1">Based on Google Reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100" />

                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">{review.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
