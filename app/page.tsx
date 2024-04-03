import ContactSection from "@/app/components/ContactSection";
import DivisionSection from "@/app/components/DivisionSection";
import FaqSection from "@/app/components/FaqSection";
import FeedbackSection from "@/app/components/FeedbackSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();

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
