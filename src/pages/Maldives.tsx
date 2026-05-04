import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WhyBookWithUs from '../components/home/WhyBookWithUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import { submitToWebhook } from '../lib/webhook';

export default function Maldives() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', travelMonth: '', travelYear: '', travellers: '', budget: '', phone: '', email: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'maldives_quote', ...formData });
            navigate('/thank-you/maldives');
        } catch {
            setError('Something went wrong. Please try again.');
            setSubmitting(false);
        }
    };

    const faqs = [
        { q: 'Is the Maldives good for a honeymoon?', a: 'Absolutely — the Maldives is consistently ranked as the #1 honeymoon destination in the world. Private overwater bungalows, intimate dinners on the beach, and world-class spa experiences make it incomparable.' },
        { q: 'Do your packages include flights?', a: 'Yes! All our Maldives packages include return flights from South Africa, seaplane or speedboat transfers to your resort island, and all listed inclusions.' },
        { q: 'When is the best time to visit?', a: 'The Maldives is beautiful year-round. The dry season (November to April) offers the calmest seas and best visibility for snorkelling and diving. May to October has fewer crowds and competitive pricing.' },
        { q: 'Can I customise my package?', a: 'Yes — every package is a starting point. We can adjust resort, duration, excursions and board basis to match your exact budget and travel style.' }
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2000&auto=format&fit=crop)' }}
                />
                <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 text-white">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                                className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl text-white">
                                Escape to Paradise <br /><span className="text-primary-400 drop-shadow-lg">in the Maldives</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg md:text-2xl text-white mb-8 max-w-xl font-medium leading-relaxed drop-shadow-xl">
                                Overwater bungalows, crystal-clear lagoons, and world-class luxury. The ultimate Indian Ocean getaway, planned by experts who care.
                            </motion.p>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-4 flex-wrap">
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" /> #1 Honeymoon Destination
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Overwater Villas
                                </div>
                                <div className="flex items-center gap-2 text-sm font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Flights Included
                                </div>
                            </motion.div>
                        </div>

                        <motion.div id="quote" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-[450px]">
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan My Maldives Holiday</h3>
                                <p className="text-gray-500 mb-6 text-sm">Get a free, no-obligation custom quote.</p>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input-field border-gray-200" required />
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input-field border-gray-200" required />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1 font-medium">When do you want to travel?</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <select name="travelMonth" value={formData.travelMonth} onChange={handleChange} className="input-field appearance-none border-gray-200">
                                                <option value="">Month</option>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                            <select name="travelYear" value={formData.travelYear} onChange={handleChange} className="input-field appearance-none border-gray-200">
                                                <option value="">Year</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                            </select>
                                        </div>
                                    </div>
                                    <select name="travellers" value={formData.travellers} onChange={handleChange} className="input-field appearance-none px-2 border-gray-200">
                                        <option value="">Number of Travellers</option><option value="1">1</option><option value="2">2</option><option value="3+">3+</option>
                                    </select>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="input-field appearance-none border-gray-200">
                                        <option value="">Budget Range (per person)</option>
                                        <option value="R25k-R35k">R25k - R35k</option><option value="R35k-R55k">R35k - R55k</option><option value="R55k+">R55k+</option>
                                    </select>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="WhatsApp / Phone" className="input-field border-gray-200" required />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input-field border-gray-200" required />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <button type="submit" disabled={submitting} className="btn-primary w-full mt-2 disabled:opacity-60">{submitting ? 'Sending...' : 'Get My Maldives Quote'}</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Maldives */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Why the Maldives?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop', title: 'Overwater Villas', desc: 'Wake up above the turquoise ocean in a private bungalow' },
                            { img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop', title: 'World-Class Diving', desc: 'Crystal-clear waters, vibrant coral reefs and manta rays' },
                            { img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop', title: 'Luxury All-Inclusive', desc: 'Private beach dining, spa treatments and sunset cruises' },
                            { img: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2000&auto=format&fit=crop', title: 'Romantic Sunsets', desc: 'Unmatched Indian Ocean horizons every single evening' },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group rounded-2xl overflow-hidden shadow-sm relative h-80">
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

            {/* Featured Resorts */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Top Maldives Resorts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Overwater Bungalow Escape', nights: '7 Nights', inc: 'All-inclusive', img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Honeymoon Private Island', nights: '5 Nights', inc: 'Half-board', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop' },
                            { title: 'Luxury Family Villa', nights: '7 Nights', inc: 'Full-board', img: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2000&auto=format&fit=crop' },
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
            <section className="py-20 bg-primary-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">What's Typically Included?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {['Flights from SA', 'Resort Accommodation', 'Seaplane/Speedboat Transfer', 'Selected Excursions', 'Travel Support'].map((inc, i) => (
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

            {/* Deal Banner */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4">Maldives Honeymoon Special</h2>
                    <p className="text-xl text-gray-300 mb-8">Complimentary room upgrade + sunset dinner for couples booking a 7-night package this season.</p>
                    <a href="#quote" className="btn-primary inline-flex py-4 px-10 text-lg">Get My Maldives Quote</a>
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
