import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhyUs, Story, HowToOrder, BulkStrip, FAQ, Footer, FloatingWhatsApp } from "@/components/Sections";
import { SITE } from "@/data/site";

const TITLE = "Shake N Bite | Premium Makhana, Jaggery, Sattu & Chana";
const DESC =
  "Handpicked makhana from Mithila, pure jaggery, sattu and roasted chana. Healthy Indian snacks packed fresh — enquire and order on WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  description: DESC,
  email: SITE.email,
  telephone: SITE.whatsappDisplay,
  address: SITE.address,
  sameAs: [SITE.instagramUrl, SITE.facebookUrl],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Story />
        <HowToOrder />
        <BulkStrip />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
