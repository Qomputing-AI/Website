import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import CTA from "../components/cta";
import QuantumProductCards from "../components/cards";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuantumProductCards/>
      <CTA />
      <Footer />
    </main>
  );
}
