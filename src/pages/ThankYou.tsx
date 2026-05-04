import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Phone, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const PAGE_CONTENT: Record<string, { title: string; subtitle: string; emoji: string; backPath: string; backLabel: string }> = {
    'general': {
        title: 'Enquiry Received!',
        subtitle: "Thanks for reaching out. One of our Vaal Triangle travel experts will contact you within 24 hours to start planning your dream holiday.",
        emoji: '✈️',
        backPath: '/',
        backLabel: 'Back to Home',
    },
    'quote': {
        title: 'Quote Request Received!',
        subtitle: "Thanks for submitting your quote request. We'll build a custom itinerary and pricing just for you — expect to hear from us within 24 hours.",
        emoji: '📋',
        backPath: '/#packages',
        backLabel: 'Browse Packages',
    },
    'contact': {
        title: 'Message Sent!',
        subtitle: "We've received your message and will get back to you as soon as possible. Feel free to WhatsApp us if you need a faster response.",
        emoji: '💬',
        backPath: '/',
        backLabel: 'Back to Home',
    },
    'mauritius': {
        title: 'Mauritius Enquiry Received!',
        subtitle: "Fantastic choice! Our Mauritius specialist will be in touch within 24 hours with tailored package options and pricing just for you.",
        emoji: '🏖️',
        backPath: '/mauritius',
        backLabel: 'Back to Mauritius',
    },
    'zanzibar': {
        title: 'Zanzibar Enquiry Received!',
        subtitle: "Great news! Our Zanzibar specialist will contact you within 24 hours with the best package options and pricing tailored to your needs.",
        emoji: '🌅',
        backPath: '/zanzibar',
        backLabel: 'Back to Zanzibar',
    },
    'thailand': {
        title: 'Thailand Enquiry Received!',
        subtitle: "Sawadee! Our Thailand specialist will be in touch within 24 hours with tailored Bangkok & Phuket package options and pricing.",
        emoji: '🛕',
        backPath: '/thailand',
        backLabel: 'Back to Thailand',
    },
    'maldives': {
        title: 'Maldives Enquiry Received!',
        subtitle: "Your dream overwater villa awaits! Our Maldives specialist will contact you within 24 hours with the best package options and pricing.",
        emoji: '🌊',
        backPath: '/maldives',
        backLabel: 'Back to Maldives',
    },
    'mauritius-family': {
        title: 'Mauritius Family Holiday — Enquiry Received!',
        subtitle: "The whole family will love it! Our specialist will contact you within 24 hours to confirm availability and finalise your Mauritius Family package.",
        emoji: '👨‍👩‍👧‍👦',
        backPath: '/packages/mauritius-family',
        backLabel: 'Back to Package',
    },
    'romantic-zanzibar': {
        title: 'Romantic Zanzibar Getaway — Enquiry Received!',
        subtitle: "Love is in the air! Our specialist will be in touch within 24 hours to confirm availability and put together your perfect Zanzibar escape.",
        emoji: '💑',
        backPath: '/packages/romantic-zanzibar',
        backLabel: 'Back to Package',
    },
    'bangkok-phuket': {
        title: 'Bangkok + Phuket Escape — Enquiry Received!',
        subtitle: "Thailand here we come! Our specialist will contact you within 24 hours to confirm availability and finalise your Bangkok & Phuket package.",
        emoji: '🐘',
        backPath: '/packages/bangkok-phuket',
        backLabel: 'Back to Package',
    },
    'maldives-overwater': {
        title: 'Maldives Overwater Escape — Enquiry Received!',
        subtitle: "Pure paradise awaits! Our specialist will be in touch within 24 hours to confirm your overwater villa availability and tailor your Maldives package.",
        emoji: '🏝️',
        backPath: '/packages/maldives-overwater',
        backLabel: 'Back to Package',
    },
};

const WHATSAPP_MESSAGES: Record<string, string> = {
    'mauritius-family': "Hi, I just submitted an enquiry for the Mauritius Family Holiday package. Can you help me?",
    'romantic-zanzibar': "Hi, I just submitted an enquiry for the Romantic Zanzibar Getaway. Can you help me?",
    'bangkok-phuket': "Hi, I just submitted an enquiry for the Bangkok + Phuket Escape. Can you help me?",
    'maldives-overwater': "Hi, I just submitted an enquiry for the Maldives Overwater Escape. Can you help me?",
    'mauritius': "Hi, I just submitted an enquiry for Mauritius. Can you help me?",
    'zanzibar': "Hi, I just submitted an enquiry for Zanzibar. Can you help me?",
    'thailand': "Hi, I just submitted an enquiry for Thailand. Can you help me?",
    'maldives': "Hi, I just submitted an enquiry for the Maldives. Can you help me?",
};
const DEFAULT_WA = "Hi, I just submitted an enquiry on your website. Can you help me?";

export default function ThankYou() {
    const { slug } = useParams<{ slug: string }>();
    const content = (slug && PAGE_CONTENT[slug]) ? PAGE_CONTENT[slug] : PAGE_CONTENT['general'];
    const waMessage = (slug && WHATSAPP_MESSAGES[slug]) ? WHATSAPP_MESSAGES[slug] : DEFAULT_WA;
    const waUrl = `https://wa.me/27829672060?text=${encodeURIComponent(waMessage)}`;

    const otherPackages = [
        { label: 'Mauritius Family Holiday', path: '/packages/mauritius-family', emoji: '🏖️' },
        { label: 'Romantic Zanzibar Getaway', path: '/packages/romantic-zanzibar', emoji: '🌅' },
        { label: 'Bangkok + Phuket Escape', path: '/packages/bangkok-phuket', emoji: '🛕' },
        { label: 'Maldives Overwater Escape', path: '/packages/maldives-overwater', emoji: '🏝️' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero */}
            <section className="bg-primary-600 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0" />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="flex justify-center mb-6"
                    >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="text-5xl mb-4">{content.emoji}</div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{content.title}</h1>
                        <p className="text-primary-100 text-lg max-w-xl mx-auto leading-relaxed">{content.subtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">What Happens Next?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '1', icon: '📬', title: 'Enquiry Logged', desc: 'Your details have been received by our team and logged in our system.' },
                            { step: '2', icon: '📞', title: 'We Contact You', desc: 'A dedicated travel expert will reach out within 24 hours via phone or WhatsApp.' },
                            { step: '3', icon: '🗺️', title: 'Custom Itinerary', desc: "We'll build a tailored quote and itinerary based on your travel dates and budget." },
                        ].map((item) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: Number(item.step) * 0.15 }}
                                className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <div className="w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">{item.step}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Buttons */}
            <section className="py-10 bg-gray-50">
                <div className="max-w-xl mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                        style={{ backgroundColor: '#25D366' }}
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                    <a
                        href="tel:0829672060"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                    >
                        <Phone className="w-5 h-5 text-primary-600" />
                        082 967 2060
                    </a>
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Home
                    </Link>
                </div>
            </section>

            {/* Browse Other Packages */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Browse Other Packages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {otherPackages.map((pkg) => (
                            <Link
                                key={pkg.path}
                                to={pkg.path}
                                className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group bg-gray-50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{pkg.emoji}</span>
                                    <span className="font-semibold text-gray-900">{pkg.label}</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
