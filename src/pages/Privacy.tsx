import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="bg-primary-600 py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-primary-100 text-lg">Last updated: May 2026</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-8 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
                            <p>When you use our website or submit an enquiry, we may collect personal information including your name, email address, phone number, and travel preferences. This information is used solely to provide you with travel planning services.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
                            <p>We use the information you provide to:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Respond to your enquiries and provide quotes</li>
                                <li>Process and manage your travel bookings</li>
                                <li>Send you relevant travel offers and updates (with your consent)</li>
                                <li>Improve our website and services</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Data Sharing</h2>
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with airlines, hotels, and other travel service providers strictly for the purpose of fulfilling your booking.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cookies</h2>
                            <p>Our website uses cookies and analytics tools (including Google Tag Manager) to understand how visitors use our site. This helps us improve your experience. You can disable cookies in your browser settings, though some features may not function as intended.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data Security</h2>
                            <p>We take reasonable steps to protect your personal information from unauthorised access, disclosure, or misuse. Our website uses HTTPS encryption for all data transmission.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
                            <p>You have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, please contact us directly.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. POPIA Compliance</h2>
                            <p>Izi Travel &amp; Tours processes personal information in accordance with the Protection of Personal Information Act (POPIA). We are committed to responsible data handling and your right to privacy.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:terrib@izitravel.co.za" className="text-primary-600 hover:underline">terrib@izitravel.co.za</a> or call <a href="tel:0829672060" className="text-primary-600 hover:underline">082 967 2060</a>.</p>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <Link to="/" className="text-primary-600 font-semibold hover:underline">&larr; Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
