import { motion } from 'framer-motion';
import { Plane, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import WhyBookWithUs from '../components/home/WhyBookWithUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

export default function Mauritius() {
    const faqs = [
        { q: 'Is Mauritius safe?', a: 'Mauritius is considered one of the safest travel destinations in the world with low crime rates, especially in resort areas.' },
        { q: 'Do packages include flights?', a: 'Yes! Our Mauritius packages include direct flights from Johannesburg OR Tambo to Sir Seewoosagur Ramgoolam International Airport.' },
        { q: 'What is the best time to travel?', a: 'Mauritius is great all year round! The peak summer season is from November to April, while winter (May to October) is cooler with less humidity.' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000&auto=format&fit=crop)' }}
                ></div>
                <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        <div className="w-full lg:w-1/2 text-white">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl text-white"
                            >
                                Discover the Magic <br /><span className="text-primary-400 drop-shadow-lg">of Mauritius</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg md:text-2xl text-white mb-8 max-w-xl font-medium leading-relaxed drop-shadow-xl"
                            >
                                Experience world-class luxury resorts, turquoise lagoons, and unmatched hospitality on a tropical island getaway.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 flex-wrap"
                            >
                                <div className="flex items-center gap-2 text-sm font-semibold bg-gray-900/60 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-100/20">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" /> Premium Resorts
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-gray-900/60 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-100/20">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Direct Flights from SA
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-gray-900/60 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-100/20">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Expert Planning
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-[450px]"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 border border-white/40">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan My Mauritius Holiday</h3>
                                <p className="text-gray-500 mb-6 text-sm">Get a free, no-obligation custom quote.</p>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div><input type="text" placeholder="Your Name" className="input-field border-gray-200" /></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="month" className="input-field border-gray-200" />
                                        <select className="input-field appearance-none px-2 border-gray-200"><option>Travellers</option><option>1</option><option>2</option><option>3+</option></select>
                                    </div>
                                    <select className="input-field appearance-none border-gray-200"><option>Budget Range (per person)</option><option>R18k - R25k</option><option>R25k - R40k</option><option>R40k+</option></select>
                                    <div><input type="tel" placeholder="WhatsApp / Phone" className="input-field border-gray-200" /></div>
                                    <div><input type="email" placeholder="Email Address" className="input-field border-gray-200" /></div>
                                    <button type="submit" className="btn-primary w-full mt-2 shadow-primary-500/30">Get My Mauritius Quote</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Resorts */}
            <section className="py-24 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Featured Mauritius Resorts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Trou aux Biches Beachcomber', nights: '7 Nights', inc: 'Half-Board', img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2116&auto=format&fit=crop' },
                            { title: 'LUX* Le Morne Resort', nights: '5 Nights', inc: 'All-inclusive', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop' },
                            { title: 'The Residence Mauritius', nights: '7 Nights', inc: 'Family Suite', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop' }
                        ].map((pkg, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col group">
                                <div className="overflow-hidden">
                                    <img src={pkg.img} alt={pkg.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                                    <p className="text-primary-600 font-semibold mb-6 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> {pkg.inc} • {pkg.nights}</p>
                                    <button className="btn-secondary transition-all w-full mt-auto group-hover:border-primary-500 group-hover:text-primary-600">Check Availability</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyBookWithUs />
            <Testimonials />
            <CTASection />
        </div>
    );
}
