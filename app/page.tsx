import ContactSection from "@/components/ContactSection";
import DivisionSection from "@/components/DivisionSection";
import FaqSection from "@/components/FaqSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createSupabaseServerClient();

  const { data } = await (await supabase).auth.getUser();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-2">
        <HeroSection />
        <DivisionSection />
        <FaqSection />
        {data.user ? <FeedbackSection /> : <ContactSection />}
      </main>
      <Footer />
    </>
  );
}
