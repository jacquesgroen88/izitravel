import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToHash from './ScrollToHash';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToHash />
            <Header />
            <main className="flex-grow pt-[80px]"> {/* Offset for fixed header */}
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
