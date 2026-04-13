import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ExperienceCategories } from "@/components/sections/ExperienceCategories";
import { WhyXO } from "@/components/sections/WhyXO";
import { SignatureExperiences } from "@/components/sections/SignatureExperiences";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceCategories />
        <WhyXO />
        <SignatureExperiences />
        <HowItWorks />
        <Testimonials />
        <InquiryForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
