import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Thailand from './pages/Thailand';
import Zanzibar from './pages/Zanzibar';
import Mauritius from './pages/Mauritius';
import Maldives from './pages/Maldives';
import Contact from './pages/Contact';
import BangkokPhuket from './pages/packages/BangkokPhuket';
import RomanticZanzibar from './pages/packages/RomanticZanzibar';
import MauritiusFamily from './pages/packages/MauritiusFamily';
import MaldivesOverwater from './pages/packages/MaldivesOverwater';
import ThankYou from './pages/ThankYou';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="thailand" element={<Thailand />} />
                    <Route path="mauritius" element={<Mauritius />} />
                    <Route path="zanzibar" element={<Zanzibar />} />
                    <Route path="maldives" element={<Maldives />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="packages/bangkok-phuket" element={<BangkokPhuket />} />
                    <Route path="packages/romantic-zanzibar" element={<RomanticZanzibar />} />
                    <Route path="packages/mauritius-family" element={<MauritiusFamily />} />
                    <Route path="packages/maldives-overwater" element={<MaldivesOverwater />} />
                    <Route path="thank-you/:slug" element={<ThankYou />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
