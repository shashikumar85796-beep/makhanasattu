import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Leaf, Dumbbell, WheatOff, Gem, BadgeCheck, Award, MessageCircle, ChevronDown,
  Mail, MapPin, Phone, ShoppingBasket, Truck,
} from "lucide-react";
import { SITE, FAQS, PRODUCTS, waLink, MESSAGES } from "@/data/site";
import { SectionTitle } from "./SectionTitle";
import { MakhanaPiece } from "./MakhanaRain";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

export function WhyUs() {
  const tiles = [
    { icon: Leaf, label: "Plant Based", text: "100% vegetarian, straight from nature." },
    { icon: Dumbbell, label: "High in Protein", text: "Fuel that keeps you full and active." },
    { icon: WheatOff, label: "Gluten Free", text: "Gentle on the gut, great for everyone." },
    { icon: Gem, label: "Rich in Minerals", text: "Packed with calcium, iron and magnesium." },
  ];
  return (
    <section id="why-us" className="bg-forest py-20 text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Why Shake N Bite" subtitle="Snacking that loves you back." light />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-cream/15 bg-cream/5 p-5 text-center sm:p-6"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground">
                <t.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{t.label}</h3>
              <p className="mt-1 text-sm text-forest-foreground/75">{t.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
          {[{ icon: BadgeCheck, t: "100% Natural" }, { icon: Award, t: "Premium Quality" }].map((b) => (
            <span key={b.t} className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-5 py-2 font-semibold text-gold">
              <b.icon className="h-5 w-5" /> {b.t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -40]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-background py-20">
      <motion.div style={{ y: y1 }} className="absolute left-[6%] top-16" aria-hidden><MakhanaPiece size={44} blur={1} opacity={0.6} /></motion.div>
      <motion.div style={{ y: y2 }} className="absolute right-[8%] top-1/3" aria-hidden><MakhanaPiece size={30} blur={2} opacity={0.5} /></motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-16 left-1/2" aria-hidden><MakhanaPiece size={24} blur={2} opacity={0.4} /></motion.div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div {...fadeUp}>
          <p className="font-heading text-sm italic tracking-[0.25em] text-gold">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-choco sm:text-4xl">
            From the Ponds of Mithila to Your Home
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every makhana we pack begins its journey in the lotus ponds of Mithila, where farmers have
            harvested fox nuts by hand for generations. We source directly, sun-dry each batch, and roast
            it carefully in small lots so it stays light, crunchy and full of goodness.
          </p>
          <p className="mt-4 text-muted-foreground">
            The same honesty goes into our jaggery, sattu and chana — no preservatives, no shortcuts,
            just natural ingredients you can trust.
          </p>
          <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-secondary p-5">
            <p className="font-heading text-xl italic text-choco">"Sattu La Naya Awtaar, Kato Gholo Peelo Yaar"</p>
          </blockquote>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <div className="absolute inset-6 rounded-[2.5rem] bg-forest/15 blur-2xl" aria-hidden />
          <img
            src={PRODUCTS[0].image}
            alt="Shake N Bite Makhana pouch, sourced from Mithila"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative mx-auto w-full max-w-md rounded-[2.5rem] bg-card"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function HowToOrder() {
  const steps = [
    { icon: ShoppingBasket, title: "Choose your products", text: "Pick your favourites and the pack size you need." },
    { icon: MessageCircle, title: "Send enquiry on WhatsApp", text: "One tap sends us your list — we reply quickly." },
    { icon: Truck, title: "Confirm & get it delivered", text: "Confirm price and payment, and we ship it fresh." },
  ];
  return (
    <section id="how-to-order" className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="How to Order" subtitle="Three simple steps. No app, no sign-up." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-forest text-forest-foreground shadow-lg">
                <s.icon className="h-8 w-8" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-heading font-bold text-gold-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-choco">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-12 text-center">
          <a
            href={waLink(MESSAGES.howToOrder)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-lg font-semibold text-forest-foreground shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" /> Start on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function BulkStrip() {
  return (
    <section className="bg-charcoal py-14 text-charcoal-foreground">
      <motion.div {...fadeUp} className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Looking for bulk, retail or gifting orders?</h2>
          <p className="mt-2 text-charcoal-foreground/70">Special pricing for shops, offices and festive gifting.</p>
        </div>
        <a
          href={waLink(MESSAGES.bulk)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" /> Talk to Us on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <motion.div key={f.q} {...fadeUp} className="overflow-hidden rounded-2xl bg-card shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-choco"
              >
                {f.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-forest transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-choco pb-24 pt-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-gold" />
            <span className="font-heading text-2xl font-bold">{SITE.brand}</span>
          </div>
          <p className="mt-3 font-heading italic text-cream/75">{SITE.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-cream/10 p-2.5 hover:bg-gold hover:text-gold-foreground">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-cream/10 p-2.5 hover:bg-gold hover:text-gold-foreground">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V3h-2.6C11.7 3 11 4.8 11 6.5v2H9V12h2v9h3v-9h2.3l.4-3.5H14z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {[["Products", "#products"], ["Why Us", "#why-us"], ["Our Story", "#story"], ["How to Order", "#how-to-order"], ["FAQ", "#faq"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gold">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li><a href={waLink(MESSAGES.floating)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" /> {SITE.whatsappDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold"><Mail className="h-4 w-4" /> {SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 border-t border-cream/10 pt-6 text-center text-sm text-cream/60">© 2026 Shake N Bite. All rights reserved.</p>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-forest-foreground shadow-xl"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-forest opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
