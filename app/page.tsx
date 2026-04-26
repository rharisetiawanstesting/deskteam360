import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Values />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <Faq />
      <Footer />
    </main>
  );
}
