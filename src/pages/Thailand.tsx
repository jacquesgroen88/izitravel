import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, CheckCircle2, Star, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WhyBookWithUs from '../components/home/WhyBookWithUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import { submitToWebhook } from '../lib/webhook';

export default function Thailand() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', travelMonth: '', travellers: '', budget: '', phone: '', email: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'thailand_quote', ...formData });
            navigate('/thank-you/thailand');
        } catch {
            setError('Something went wrong. Please try again.');
            setSubmitting(false);
        }
    };

    const faqs = [
        { q: 'Do packages include flights?', a: 'Yes, most of our Thailand packages include return flights from South Africa, though we can customize a land-only package if preferred.' },
        { q: 'Is Thailand safe to travel to?', a: 'Absolutely. Thailand is generally very safe for tourists. As with any international travel, standard precautions apply, but millions visit safely every year.' },
        { q: 'When is the best time to visit?', a: 'The best time to visit Thailand is generally between November and April when the weather is cool and dry. However, depending on the coast, travel can be great year-round.' },
        { q: 'Can you customise the package?', a: 'Yes! All our packages serve as a starting point. We specialize in tailoring itineraries to match your exact dates, budget, and travel style.' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop)' }}
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
                                Thailand Holiday Packages <br /><span className="text-primary-400 drop-shadow-lg">From South Africa</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg md:text-2xl text-white mb-8 max-w-xl font-medium leading-relaxed drop-shadow-xl"
                            >
                                Custom Thailand holidays including flights, hotels and island experiences. Let our travel experts plan your perfect trip.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 flex-wrap"
                            >
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" /> 4.9 Google Rating
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Best Thailand Deals
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Expert Travel Planning
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            id="quote"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-[450px]"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan My Thailand Trip</h3>
                                <p className="text-gray-500 mb-6 text-sm">Get a free, no-obligation custom quote.</p>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input-field" required />
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input-field" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="month" name="travelMonth" value={formData.travelMonth} onChange={handleChange} className="input-field" />
                                        <select name="travellers" value={formData.travellers} onChange={handleChange} className="input-field appearance-none px-2"><option value="">Travellers</option><option value="1">1</option><option value="2">2</option><option value="3+">3+</option></select>
                                    </div>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="input-field appearance-none"><option value="">Budget Range (per person)</option><option value="R15k-R20k">R15k - R20k</option><option value="R20k-R30k">R20k - R30k</option><option value="R30k+">R30k+</option></select>
                                    <div><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="WhatsApp / Phone" className="input-field" required /></div>
                                    <div><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input-field" required /></div>
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <button type="submit" disabled={submitting} className="btn-primary w-full mt-2 disabled:opacity-60">{submitting ? 'Sending...' : 'Get My Thailand Quote'}</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Thailand */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Why Thailand?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop', title: 'Island Hopping', desc: 'Phuket, Krabi, and Phi Phi' },
                            { img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070&auto=format&fit=crop', title: 'Incredible Cuisine', desc: 'Authentic Thai street food' },
                            { img: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop', title: 'Culture & Temples', desc: 'Historic Bangkok architecture' },
                            { img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2070&auto=format&fit=crop', title: 'Unique Experiences', desc: 'Elephant sanctuaries & markets' }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl overflow-hidden shadow-sm relative h-80">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-200 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Popular Thailand Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Bangkok + Phuket Escape', nights: '7 Nights', inc: 'Flights Included', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Phuket Island Adventure', nights: '5 Nights', inc: 'Beach Resort', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Thailand Explorer', nights: '10 Nights', inc: 'Bangkok + Krabi', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop' }
                        ].map((pkg, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                                <img src={pkg.img} alt={pkg.title} className="w-full h-56 object-cover" />
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6">{pkg.nights} | {pkg.inc}</p>
                                    <button className="btn-secondary w-full mt-auto">Check Availability</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-primary-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">What's Typically Included?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {['Flights from SA', 'Hotel Accommodation', 'Airport Transfers', 'Selected Excursions', 'Travel Support'].map((inc, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-primary-100 flex flex-col items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary-500" />
                                <span className="text-sm font-semibold text-gray-700">{inc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyBookWithUs />
            <Testimonials />

            {/* Limited Deal */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">Thailand Summer Special</h2>
                    <p className="text-xl text-gray-300 mb-8">Save up to 20% on selected beach resort packages when you book before the end of the month.</p>
                    <a href="#quote" className="btn-primary inline-flex py-4 px-10 text-lg">Get My Thailand Quote</a>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-gray-900 list-none">
                                    {faq.q}
                                    <span className="transition group-open:rotate-180"><ChevronDown className="w-5 h-5" /></span>
                                </summary>
                                <div className="text-gray-600 mt-4 leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
