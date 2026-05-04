import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Star, Phone, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../../components/home/CTASection';
import { submitToWebhook } from '../../lib/webhook';

export default function MauritiusFamily() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', whatsapp: '', email: '', travelMonth: '', travellers: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'package_mauritius_family', ...formData });
            navigate('/thank-you/mauritius-family');
        } catch {
            setError('Something went wrong. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            <section className="relative min-h-[70vh] flex items-end pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000&auto=format&fit=crop)' }} />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pb-16 pt-32">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block bg-primary-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Mauritius • 7 Nights</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Mauritius Family Holiday</h1>
                        <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 7 Nights / 8 Days</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Trou aux Biches, Mauritius</span>
                            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-current" /> Beachfront Resort + Kids Club</span>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-28 right-6 md:right-12 z-10 bg-white rounded-2xl shadow-2xl p-6 text-center">
                    <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">From</div>
                    <div className="text-4xl font-extrabold text-primary-600">R21,000</div>
                    <div className="text-xs text-gray-500 mt-1">per person</div>
                    <div className="mt-3 text-xs text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full">🏖️ Top family pick</div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Package Highlights</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Return flights from Johannesburg', '7 nights at beachfront family resort', 'Kids Club included (ages 4–12)', 'Watersports & activities', 'Daily breakfast & dinner', 'Airport transfers throughout'].map((h, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 font-medium">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Itinerary</h2>
                            <div className="space-y-4">
                                {[
                                    { day: 'Day 1–2', title: 'Arrival & Resort Settling', desc: 'Direct flight from Johannesburg. Transfer to your beachfront resort. Kids settle into Kids Club while parents enjoy a welcome cocktail.' },
                                    { day: 'Day 3', title: 'Coastal Explorer', desc: 'Family catamaran trip along the northern coastline. Snorkelling, dolphin watching, and a beach BBQ lunch.' },
                                    { day: 'Day 4–5', title: 'Lagoon Days', desc: 'Lazy beach and pool days. Watersports for older kids. Spa for parents. Evening sunset walk along the beach.' },
                                    { day: 'Day 6', title: 'Chamarel Waterfall', desc: 'Day trip to the famous Seven Coloured Earths and Chamarel Waterfall. Rum distillery visit for the adults.' },
                                    { day: 'Day 7–8', title: 'Final Beach Day & Departure', desc: 'Morning dip and beach breakfast. Late checkout. Transfer to Sir Seewoosagur Ramgoolam Airport for return flight.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                        <div className="shrink-0 w-20 text-primary-600 font-bold text-sm">{item.day}</div>
                                        <div><h3 className="font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">✅ What's Included</h3>
                                <ul className="space-y-2">
                                    {['Return flights from JHB', '7 nights half-board', 'Kids Club (ages 4–12)', 'Catamaran family excursion', 'All airport transfers'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">❌ What's Excluded</h3>
                                <ul className="space-y-2">
                                    {['Travel insurance', 'Visa fees', 'Lunches', 'Personal spending', 'Optional extras'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500"><XCircle className="w-4 h-4 text-red-400 shrink-0" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-extrabold text-primary-600">R21,000 <span className="text-base font-normal text-gray-500">pp</span></div>
                                <div className="text-sm text-gray-500 mt-1">Half-board • 7 nights</div>
                                <div className="mt-2 text-xs font-bold text-orange-600 bg-orange-50 rounded-full px-3 py-1 inline-block">🏖️ Family favourite — book early</div>
                            </div>
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
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                                <Phone className="w-4 h-4" />
                                <a href="tel:0829672060" className="hover:text-primary-600 font-semibold">082 967 2060</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Your Mauritius Resort</h2>
                    <div className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop" alt="Mauritius Resort" className="w-full h-72 md:h-full object-cover" />
                        <div className="p-8 flex flex-col justify-center bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Star Family Beachfront Resort, Trou aux Biches</h3>
                            <ul className="space-y-3">
                                {['Award-winning Kids Club (ages 4–12)', 'Multiple pools including dedicated kids pool', 'Dedicated family beach area', 'Wide range of watersports included', 'Evening kids entertainment programme'].map((f, i) => (
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
