import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Advantages from '@/components/Advantages';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';


export default function Home() {
    return (
        <main className="relative min-h-screen w-full bg-[#020202] text-white overflow-x-hidden">
            <Header />
            <Hero />
            <Marquee />
            <Advantages />
            <Testimonials />
            <Footer />
        </main>
    );
}