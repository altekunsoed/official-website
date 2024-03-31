import ContactSection from "@/components/ContactSection";
import DivisionSection from "@/components/DivisionSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-2">
        <HeroSection />
        <DivisionSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
