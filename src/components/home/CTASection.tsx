import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-6 text-gray-900">Start Planning Your <span className="text-primary-600">Island Escape</span> Today</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Our Vaal Triangle experts are ready to turn your dream holiday into reality. Fast response, best prices, personalized service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#quote" className="btn-primary py-4 px-8 text-lg w-full sm:w-auto shadow-primary-500/20">
                            Get a Quote <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://wa.me/27821234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] w-full sm:w-auto text-lg"
                        >
                            <MessageCircle className="w-5 h-5 fill-current" /> Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
