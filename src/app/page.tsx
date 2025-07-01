import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact';



export default function app() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <FAQ/>
      <Contact/>
    </>
  );
}
