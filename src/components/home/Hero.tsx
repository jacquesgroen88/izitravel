import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToWebhook } from '../../lib/webhook';

const rotatingWords = ['Island Holiday', 'Honeymoon', 'Birthday Escape', 'Wedding Getaway'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [formData, setFormData] = useState({ destination: '', travelMonth: '', budget: '', firstName: '', lastName: '', whatsapp: '', email: '', travellers: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            await submitToWebhook({ formType: 'hero_quick_enquiry', ...formData });
            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((i) => (i + 1) % rotatingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop)' }}
            ></div>
            <div className="absolute inset-0 z-0 bg-black/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Main Text Content */}
                    <div className="w-full lg:w-1/2 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary-600/30 border border-primary-500/50 text-white text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-lg"
                        >
                            Your Premier Travel Agent in the Vaal
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl text-white"
                        >
                            Plan Your Dream
                            <br />
                            <span className="relative inline-block min-h-[1.2em]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={wordIndex}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                                        className="text-primary-400 drop-shadow-lg absolute left-0"
                                    >
                                        {rotatingWords[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                                {/* Invisible placeholder to maintain layout height */}
                                <span className="invisible">{rotatingWords.reduce((a, b) => a.length > b.length ? a : b)}</span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-2xl text-gray-50 mb-10 max-w-xl font-medium leading-relaxed drop-shadow-xl"
                        >
                            Helping travellers in the Vaal Triangle book unforgettable trips to Thailand, Mauritius, Zanzibar and the Maldives. Expert advice, guaranteed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="#packages" className="btn-primary py-4 px-8 text-lg w-full sm:w-auto">
                                Plan My Trip
                            </a>
                            <a href="#quote" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-sm w-full sm:w-auto">
                                Get a Quote
                            </a>
                        </motion.div>
                    </div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full lg:w-[450px]"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Enquiry</h3>
                                <p className="text-gray-500 mb-6 text-sm">Let our local experts craft your perfect escape.</p>

                                {submitted ? (
                                    <div className="py-8 text-center">
                                        <div className="text-green-600 text-4xl mb-3">&#10003;</div>
                                        <p className="font-semibold text-gray-900">Thanks! We'll be in touch soon.</p>
                                    </div>
                                ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                                        <select name="destination" value={formData.destination} onChange={handleChange} className="input-field appearance-none">
                                            <option value="">Where to?</option>
                                            <option value="thailand">Thailand</option>
                                            <option value="mauritius">Mauritius</option>
                                            <option value="zanzibar">Zanzibar</option>
                                            <option value="maldives">Maldives</option>
                                            <option value="undecided">Not sure yet</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Month</label>
                                            <select name="travelMonth" value={formData.travelMonth} onChange={handleChange} className="input-field appearance-none">
                                                <option value="">Month</option>
                                                <option value="jan">January</option>
                                                <option value="feb">February</option>
                                                <option value="mar">March</option>
                                                <option value="apr">April</option>
                                                <option value="may">May</option>
                                                <option value="jun">June</option>
                                                <option value="jul">July</option>
                                                <option value="aug">August</option>
                                                <option value="sep">September</option>
                                                <option value="oct">October</option>
                                                <option value="nov">November</option>
                                                <option value="dec">December</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                                            <select name="budget" value={formData.budget} onChange={handleChange} className="input-field appearance-none">
                                                <option value="">Select</option>
                                                <option value="standard">Standard</option>
                                                <option value="premium">Premium</option>
                                                <option value="luxury">Luxury</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="input-field" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="input-field" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                        <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="+27 XX XXX XXXX" className="input-field" required />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="input-field" required />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travellers</label>
                                        <select name="travellers" value={formData.travellers} onChange={handleChange} className="input-field appearance-none">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5+">5+</option>
                                        </select>
                                    </div>

                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <button type="submit" disabled={submitting} className="btn-primary w-full mt-2 disabled:opacity-60">
                                        {submitting ? 'Sending...' : 'Request Pricing'}
                                    </button>
                                </form>
                                )}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
