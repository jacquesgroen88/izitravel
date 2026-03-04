import { motion } from 'framer-motion';
import { Plane, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import WhyBookWithUs from '../components/home/WhyBookWithUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

export default function Zanzibar() {
    const faqs = [
        { q: 'Is Zanzibar safe?', a: 'Zanzibar is very safe for tourists. The locals are incredibly welcoming and hospital. As always, practice normal travel safety precautions.' },
        { q: 'Do packages include flights?', a: 'Yes, our Zanzibar packages typically include direct or connecting flights from major South African airports to Abeid Amani Karume International Airport.' },
        { q: 'Is Zanzibar good for honeymoons?', a: 'It is one of the top honeymoon destinations in the world! From private plunge pools to romantic dhow cruises, it\'s the perfect romantic escape.' },
        { q: 'What is the best time to travel?', a: 'The best time to visit Zanzibar is during the dry seasons: from July to October, and from December to February.' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop)' }}
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
                                Zanzibar Island <br /><span className="text-primary-400 drop-shadow-lg">Holiday Packages</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg md:text-2xl text-white mb-8 max-w-xl font-medium leading-relaxed drop-shadow-xl"
                            >
                                Escape to the exotic island of Zanzibar with luxury resorts, crystal-clear waters and unforgettable sunsets.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 flex-wrap"
                            >
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm backdrop-filter border border-white/10">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" /> Trusted Travel Experts
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm backdrop-filter border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Best Resort Deals
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm backdrop-filter border border-white/10">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Personal Holiday Planning
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan My Zanzibar Holiday</h3>
                                <p className="text-gray-500 mb-6 text-sm">Let our specialists craft your exotic escape.</p>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div><input type="text" placeholder="Your Name" className="input-field border-gray-200" /></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="month" className="input-field border-gray-200" />
                                        <select className="input-field appearance-none px-2 border-gray-200"><option>Travellers</option><option>1</option><option>2</option><option>3+</option></select>
                                    </div>
                                    <select className="input-field appearance-none border-gray-200"><option>Budget Range (per person)</option><option>R18k - R25k</option><option>R25k - R40k</option><option>R40k+</option></select>
                                    <div><input type="tel" placeholder="WhatsApp / Phone" className="input-field border-gray-200" /></div>
                                    <div><input type="email" placeholder="Email Address" className="input-field border-gray-200" /></div>
                                    <button type="submit" className="btn-primary w-full mt-2 shadow-primary-500/30">Get My Zanzibar Quote</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Zanzibar */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Why Choose Zanzibar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2080&auto=format&fit=crop', title: 'World-Class Beaches', desc: 'Powder-white sand and crystal clear turquoise waters as far as the eye can see.' },
                            { img: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2000&auto=format&fit=crop', title: 'Incredible Sunsets', desc: 'Romantic dhow cruises beneath breathtaking Indian Ocean sunsets.' },
                            { img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop', title: 'Luxury Resorts', desc: 'From boutique beachfront hideaways to sprawling all-inclusive 5-star estates.' },
                            { img: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2000&auto=format&fit=crop', title: 'Snorkelling & Diving', desc: 'Explore vibrant coral reefs and swim with majestic sea turtles and dolphins.' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl overflow-hidden shadow-md relative h-80 flex">
                                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-200">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resorts */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Top Zanzibar Resorts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Luxury Beach Resort', nights: '5 Nights', inc: 'All-inclusive', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Romantic Zanzibar Escape', nights: '7 Nights', inc: 'Perfect for honeymoons', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Family Zanzibar Holiday', nights: '7 Nights', inc: 'Beachfront resort', img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop' }
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

            {/* What's Included */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900">What's Included in Your Zanzibar Package?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Return Flights', icon: <Plane className="w-8 h-8 text-primary-500 mb-3" /> },
                            { label: 'Luxury Accommodation', icon: <Star className="w-8 h-8 text-primary-500 mb-3" /> },
                            { label: 'Airport Transfers', icon: <CheckCircle2 className="w-8 h-8 text-primary-500 mb-3" /> },
                            { label: 'All-inclusive / Half-board', icon: <Star className="w-8 h-8 text-primary-500 mb-3" /> }
                        ].map((inc, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                {inc.icon}
                                <span className="font-bold text-gray-800">{inc.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspiration Gallery */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Zanzibar Inspiration Gallery</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Immerse yourself in the magic of the Spice Island.</p>
                    <div className="columns-2 md:columns-3 gap-4 space-y-4">
                        <img src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full" alt="White beaches" />
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full" alt="Luxury resorts" />
                        <img src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full" alt="Sunsets" />
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full" alt="Couples" />
                        <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800" className="rounded-xl w-full" alt="Ocean views" />
                    </div>
                </div>
            </section>

            <WhyBookWithUs />

            {/* Testimonials */}
            <Testimonials />

            {/* Limited Deal */}
            <section className="py-20 bg-primary-600 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Zanzibar Summer Escape</h2>
                    <p className="text-xl text-primary-100 mb-10">Save up to R3,500 on selected 5-star beach resorts when booking for couples.</p>
                    <a href="#quote" className="bg-white text-primary-600 font-bold hover:bg-gray-100 transition-colors inline-block py-4 px-10 rounded-xl text-lg shadow-xl shadow-black/20">Get My Zanzibar Quote</a>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5 text-sm">Q</div>
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 pl-10 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
