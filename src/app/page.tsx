import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { Experience } from "@/components/Experience";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stepan Rabotkin",
  url: "https://epicstep.dev",
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "OZON",
  },
  knowsAbout: [
    "Go",
    "ClickHouse",
    "Kubernetes",
    "High-Load Systems",
    "Microservices",
    "Backend Development",
  ],
  sameAs: [
    "https://github.com/EpicStep",
    "https://linkedin.com/in/epicstep",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <ImpactSection />
        <Experience />
        <OpenSourceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
