import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">

            {/* Page Header */}
            <section className="bg-primary-600 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Talk Travel</h1>
                    <p className="text-xl text-primary-100 font-light max-w-2xl mx-auto">
                        Ready to start planning? Connect with our Vaal Triangle travel experts today.
                        We're here to answer your questions and build your perfect itinerary.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Whether you're looking for a quick quote, need advice on a destination, or require assistance with an existing booking, our dedicated team is here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="tel:0161234567" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                                    <div className="text-2xl font-bold text-gray-900">016 123 4567</div>
                                </div>
                            </a>

                            <a href="https://wa.me/27821234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp Us</div>
                                    <div className="text-xl font-bold text-gray-900">Chat with an Expert</div>
                                </div>
                            </a>

                            <a href="mailto:hello@vaaltravel.co.za" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</div>
                                    <div className="text-xl font-bold text-gray-900">hello@vaaltravel.co.za</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <div className="w-14 h-14 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Office Location</div>
                                    <div className="text-lg font-semibold text-gray-900 leading-snug">
                                        123 Travel Avenue, <br />Vaal Triangle, <br />South Africa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-10 rounded-3xl shadow-xl border border-gray-50 h-max"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="input-field bg-gray-50" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="input-field bg-gray-50" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="input-field bg-gray-50" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" className="input-field bg-gray-50" placeholder="+27 XX XXX XXXX" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
                                <textarea className="input-field bg-gray-50 min-h-[150px] resize-y" placeholder="Tell us what you need help with..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 shadow-primary-500/20">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
