import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Thailand from './pages/Thailand';
import Zanzibar from './pages/Zanzibar';
import Mauritius from './pages/Mauritius';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="thailand" element={<Thailand />} />
                    <Route path="mauritius" element={<Mauritius />} />
                    <Route path="zanzibar" element={<Zanzibar />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
