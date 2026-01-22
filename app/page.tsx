import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { GallerySection } from "@/components/landing/gallery-section";
import { ImpactGrid } from "@/components/landing/impact-grid";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { MerchSection } from "@/components/landing/merch-section";
import { Navbar } from "@/components/landing/navbar";
import { RegistrationForm } from "@/components/landing/registration-form";
import { SponsorsSection } from "@/components/landing/sponsors-section";
import { SponsorshipCTA } from "@/components/landing/sponsorship-cta";
import { Timeline } from "@/components/landing/timeline";
import { WhyAttend } from "@/components/landing/why-attend";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-900 dark:text-slate-200 antialiased selection:bg-accent selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ImpactGrid />
      <SponsorsSection />
      <WhyAttend />
      <GallerySection />
      <MerchSection />
      <Timeline />
      <RegistrationForm />
      <SponsorshipCTA />
      <Footer />
    </main>
  );
}
