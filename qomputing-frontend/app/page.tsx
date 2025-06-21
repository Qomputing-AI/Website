import Navbar from "../components/common/navbar";
import Hero from "../components/homepage/hero";
import Footer from "../components/common/footer";
import CTA from "../components/homepage/cta";
import QuantumProductCards from "../components/common/cards";


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
