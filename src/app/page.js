import About from '@/components/About';
import Clients from '@/components/Clients';
import Hero from '@/components/Hero';
import ImpactAndBlog from '@/components/ImpactAndBlog';
import Products from '@/components/Products';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <ImpactAndBlog />
      <Clients />
    </>
  );
}
