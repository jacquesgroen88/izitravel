import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Star, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../../components/home/CTASection';
import { submitToWebhook } from '../../lib/webhook';

export default function BangkokPhuket() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', whatsapp: '', email: '', travelMonth: '', travellers: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'package_bangkok_phuket', ...formData });
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-end pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop)' }} />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-16 pt-32">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block bg-primary-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Thailand • 7 Nights</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl">Bangkok + Phuket Escape</h1>
                        <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 Nights / 8 Days</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bangkok → Phuket</span>
                            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-current" /> 4-Star Hotels</span>
                        </div>
                    </motion.div>
                </div>
                {/* Price badge */}
                <div className="absolute top-28 right-6 md:right-12 z-10 bg-white rounded-2xl shadow-2xl p-6 text-center">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">From</div>
                    <div className="text-4xl font-extrabold text-primary-600">R18,500</div>
                    <div className="text-xs text-gray-500 mt-1">per person</div>
                    <div className="mt-3 text-xs text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full">🔥 Limited availability</div>
                </div>
            </section>

            {/* Overview + Itinerary */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Highlights */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Package Highlights</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Return flights from Johannesburg', '4-Star hotel in Bangkok (3 nights)', 'Beachfront resort in Phuket (4 nights)', 'Phi Phi Island day tour', 'Airport transfers throughout', 'Daily breakfast included'].map((h, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Itinerary</h2>
                            <div className="space-y-4">
                                {[
                                    { day: 'Day 1–2', title: 'Arrival in Bangkok', desc: 'Fly overnight from Johannesburg to Bangkok. Check in to your 4-star hotel. City orientation, Khao San Road evening.' },
                                    { day: 'Day 3–4', title: 'Bangkok Sightseeing', desc: 'Grand Palace and Wat Pho temple complex. Evening street food tour. Chao Phraya river cruise.' },
                                    { day: 'Day 5', title: 'Fly to Phuket', desc: 'Domestic flight to Phuket. Transfer to beachfront resort. Enjoy your first Andaman Sea sunset.' },
                                    { day: 'Day 6', title: 'Phi Phi Island Tour', desc: 'Full-day speedboat excursion to the iconic Phi Phi islands. Snorkelling, swimming and Thai lunch included.' },
                                    { day: 'Day 7–8', title: 'Beach Days & Departure', desc: 'Free day on Patong or Karon Beach. Evening departure transfer. Return flight to Johannesburg.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <div className="shrink-0 w-20 text-primary-600 font-bold text-sm">{item.day}</div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Included / Excluded */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">✅ What's Included</h3>
                                <ul className="space-y-2">
                                    {['Return international flights', '7 nights accommodation', 'Phi Phi island tour', 'All airport transfers', 'Daily breakfast'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">❌ What's Excluded</h3>
                                <ul className="space-y-2">
                                    {['Travel insurance', 'Visa fees', 'Personal spending', 'Optional excursions', 'Lunches & dinners'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500"><XCircle className="w-4 h-4 text-red-400 shrink-0" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Quote Panel */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-extrabold text-primary-600">R18,500 <span className="text-base font-normal text-gray-500">pp</span></div>
                                <div className="text-sm text-gray-500 mt-1">Flights + 7 nights included</div>
                                <div className="mt-2 text-xs font-bold text-orange-600 bg-orange-50 rounded-full px-3 py-1 inline-block">🔥 Only 4 spots left at this price</div>
                            </div>
                            {submitted ? (
                                <div className="py-6 text-center">
                                    <div className="text-green-500 text-4xl mb-3">&#10003;</div>
                                    <p className="font-semibold text-gray-900">Thanks! We'll be in touch soon.</p>
                                </div>
                            ) : (
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input-field border-gray-200 text-sm" required />
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input-field border-gray-200 text-sm" required />
                                </div>
                                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className="input-field border-gray-200 text-sm" required />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="input-field border-gray-200 text-sm" required />
                                <input type="month" name="travelMonth" value={formData.travelMonth} onChange={handleChange} className="input-field border-gray-200 text-sm" />
                                <select name="travellers" value={formData.travellers} onChange={handleChange} className="input-field appearance-none border-gray-200 text-sm">
                                    <option value="">Number of Travellers</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>
                                {error && <p className="text-red-500 text-xs">{error}</p>}
                                <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">{submitting ? 'Sending...' : 'Book This Package'}</button>
                            </form>
                            )}
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                                <Phone className="w-4 h-4" />
                                <a href="tel:0161234567" className="hover:text-primary-600 font-semibold">016 123 4567</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resort Spotlight */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Your Phuket Resort</h2>
                    <div className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" alt="Phuket Resort" className="w-full h-72 md:h-full object-cover" />
                        <div className="p-8 flex flex-col justify-center bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">4-Star Beachfront Resort, Patong Beach</h3>
                            <ul className="space-y-3">
                                {['Beachfront location on Patong Beach', 'Infinity pool with Andaman Sea views', 'Spa, gym and beach bar', 'Daily breakfast buffet', '5-minute walk to Bangla Road'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm"><CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />{f}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
