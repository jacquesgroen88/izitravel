import { motion } from 'framer-motion';

export default function QuickQuote() {
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
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input type="text" className="input-field" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="input-field" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="input-field" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                                <input type="tel" className="input-field" placeholder="+27 XX XXX XXXX" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
                                <select className="input-field appearance-none bg-white">
                                    <option value="">Select Destination</option>
                                    <option value="thailand">Thailand</option>
                                    <option value="mauritius">Mauritius</option>
                                    <option value="zanzibar">Zanzibar</option>
                                    <option value="other">Other / Not sure</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Month</label>
                                <input type="month" className="input-field" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Budget per Person</label>
                                <select className="input-field appearance-none bg-white">
                                    <option value="">Select Budget</option>
                                    <option value="10k-15k">R10,000 - R15,000</option>
                                    <option value="15k-25k">R15,000 - R25,000</option>
                                    <option value="25k+">R25,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Any special requests? (Optional)</label>
                            <textarea className="input-field min-h-[100px] resize-y" placeholder="e.g. Honeymoon, dietary requirements, specific activities..." />
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="btn-primary w-full py-4 text-lg">
                                Submit Quote Request
                            </button>
                            <p className="text-center text-sm text-gray-500 mt-4">We usually respond within 24 hours.</p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
