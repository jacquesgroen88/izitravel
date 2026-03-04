import Hero from '../components/home/Hero';
import PopularDestinations from '../components/home/PopularDestinations';
import FeaturedPackages from '../components/home/FeaturedPackages';
import WhyBookWithUs from '../components/home/WhyBookWithUs';
import Testimonials from '../components/home/Testimonials';
import QuickQuote from '../components/home/QuickQuote';
import Gallery from '../components/home/Gallery';
import CTASection from '../components/home/CTASection';

export default function Home() {
    return (
        <>
            <Hero />
            <PopularDestinations />
            <FeaturedPackages />
            <WhyBookWithUs />
            <Testimonials />
            <QuickQuote />
            <Gallery />
            <CTASection />
        </>
    );
}
