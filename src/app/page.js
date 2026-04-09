import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Clients from '@/components/Clients';
import ImpactAndBlog from '@/components/ImpactAndBlog';
import CareersAndContact from '@/components/CareersAndContact';

export const metadata = {
  title: "Dynamic Technosoft Pvt. Ltd. | Nepal's Leading ERP & IT Solutions",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Ticker />
      <About />
      <Products />
      <Services />
      <WhyUs />
      <Clients />
      <ImpactAndBlog />
      <CareersAndContact />
    </>
  );
}
