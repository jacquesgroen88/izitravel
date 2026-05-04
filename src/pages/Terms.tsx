import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="bg-primary-600 py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-primary-100 text-lg">Last updated: May 2026</p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6 prose prose-gray">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 space-y-8 text-gray-700 leading-relaxed">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
                            <p>By using the Izi Travel &amp; Tours website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Services</h2>
                            <p>Izi Travel &amp; Tours provides travel planning, holiday packages, and related services for clients in and around the Vaal Triangle. All packages are subject to availability and confirmation.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Bookings &amp; Payments</h2>
                            <p>All bookings are confirmed only upon receipt of a deposit as agreed with your travel consultant. Full payment is required before travel dates as communicated. Prices are quoted in South African Rand (ZAR) and are subject to change until a booking is confirmed in writing.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cancellations &amp; Refunds</h2>
                            <p>Cancellation policies vary depending on the package, airline, and accommodation provider. Any applicable cancellation fees will be communicated at the time of booking. We strongly recommend travel insurance to protect against unforeseen cancellations.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Travel Insurance</h2>
                            <p>We strongly advise all clients to obtain comprehensive travel insurance prior to departure. Izi Travel &amp; Tours accepts no liability for events outside our control, including but not limited to flight delays, medical emergencies, or natural disasters.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Accuracy of Information</h2>
                            <p>While we make every effort to ensure the accuracy of information on our website, prices, itineraries, and availability are subject to change. We will always communicate any significant changes to confirmed bookings as soon as possible.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Liability</h2>
                            <p>Izi Travel &amp; Tours acts as an agent for airlines, hotels, and other service providers. We are not liable for any loss, damage, injury, or disappointment arising from services provided by third parties.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Contact</h2>
                            <p>For any queries regarding these terms, please contact us at <a href="mailto:terrib@izitravel.co.za" className="text-primary-600 hover:underline">terrib@izitravel.co.za</a> or call <a href="tel:0829672060" className="text-primary-600 hover:underline">082 967 2060</a>.</p>
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
