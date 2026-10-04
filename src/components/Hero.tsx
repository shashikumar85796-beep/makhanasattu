import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { MakhanaRain, MakhanaPiece } from "./MakhanaRain";
import { waLink, MESSAGES } from "@/data/site";
import makhanaPackCut from "@/assets/makhana-pack-cut.png";

const PILE: [number, number, number][] = [
  [-70, 8, 34], [-38, 2, 38], [-4, 0, 40], [32, 3, 36], [64, 9, 32],
  [-52, -14, 34], [-18, -20, 38], [16, -18, 36], [48, -12, 32], [0, -34, 34],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      <MakhanaRain />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 pb-56 pt-12 sm:px-6 lg:grid-cols-2 lg:pb-64">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left"
        >
          <p className="font-heading text-base italic tracking-[0.3em] text-gold sm:text-lg">
            Handpicked From Mithila
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Naturally Crunchy.
            <br />
            <span className="text-gold">Honestly Healthy.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-charcoal-foreground/75 lg:mx-0">
            Premium makhana, jaggery, sattu and chana, packed fresh and delivered to your door.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={waLink(MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-forest-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              View Products
            </a>
          </div>
        </motion.div>

        <motion.img
          src={makhanaPackCut}
          alt="Shake N Bite Makhana pack — Roasted & Lightly Salted, 250g"
          width={1024}
          height={1024}
          className="relative z-10 mx-auto w-56 drop-shadow-2xl sm:w-72 lg:ml-auto lg:mr-0 lg:w-96"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Bowl at bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-64 -translate-x-1/2 sm:w-80" aria-hidden>
        <div className="relative h-16">
          {PILE.map(([x, y, s], i) => (
            <div key={i} className="absolute left-1/2" style={{ bottom: -y, transform: `translateX(${x - s / 2}px)` }}>
              <MakhanaPiece size={s} blur={0} opacity={1} />
            </div>
          ))}
        </div>
        <div className="wooden-bowl-rim h-4 rounded-full" />
        <div className="wooden-bowl mx-auto h-24 w-[94%] sm:h-28" />
      </div>
    </section>
  );
}
