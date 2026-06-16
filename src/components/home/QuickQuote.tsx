import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { submitToWebhook } from '../../lib/webhook';

export default function QuickQuote() {
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', destination: '', departureDate: '', returnDate: '', budget: '', travellers: '', specialRequests: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'quick_quote', ...formData });
            navigate('/thank-you/quote');
        } catch {
            setError('Something went wrong. Please try again.');
            setSubmitting(false);
        }
    };

    return (
        <section id="quote" className="py-24 bg-primary-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2098&auto=format&fit=crop)' }}
            ></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-4 text-white">Get a Custom Holiday Quote</h2>
                <p className="text-primary-100 text-lg mb-12">
                    Tell us about your dream trip, and our local experts will craft the perfect itinerary for you.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-left"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" placeholder="John" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-field" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+27 XX XXX XXXX" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travellers</label>
                                <select name="travellers" value={formData.travellers} onChange={handleChange} className="input-field appearance-none bg-white">
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
                                <select name="destination" value={formData.destination} onChange={handleChange} className="input-field appearance-none bg-white">
                                    <option value="">Select Destination</option>
                                    <option value="thailand">Thailand</option>
                                    <option value="mauritius">Mauritius</option>
                                    <option value="zanzibar">Zanzibar</option>
                                    <option value="maldives">Maldives</option>
                                    <option value="other">Other / Not sure</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Date</label>
                                <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="input-field bg-white" min={today} required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Return Date</label>
                                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="input-field bg-white" min={today} required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget per person <span className="text-gray-400 font-normal">(incl. flights)</span></label>
                                <select name="budget" value={formData.budget} onChange={handleChange} className="input-field appearance-none bg-white">
                                    <option value="">Select Budget</option>
                                    <option value="R8,000 - R12,000 pp">R8,000 - R12,000 per person</option>
                                    <option value="R12,000 - R18,000 pp">R12,000 - R18,000 per person</option>
                                    <option value="R18,000 - R30,000 pp">R18,000 - R30,000 per person</option>
                                    <option value="R30,000 - R50,000 pp">R30,000 - R50,000 per person</option>
                                    <option value="R50,000+ pp">R50,000+ per person</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Any special requests? (Optional)</label>
                            <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} className="input-field min-h-[100px] resize-y" placeholder="e.g. Honeymoon, dietary requirements, specific activities..." />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="pt-4">
                            <button type="submit" disabled={submitting} className="btn-primary w-full py-4 text-lg disabled:opacity-60">
                                {submitting ? 'Submitting...' : 'Submit Quote Request'}
                            </button>
                            <p className="text-center text-sm text-gray-500 mt-4">We usually respond within 24 hours.</p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
