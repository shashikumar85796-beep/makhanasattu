import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, Plus } from "lucide-react";
import { PRODUCTS, waLink, MESSAGES, type Product } from "@/data/site";
import { MakhanaPiece } from "./MakhanaRain";
import { SectionTitle } from "./SectionTitle";

type Selection = Record<string, string>; // productId -> weight

function ProductCard({
  product,
  weight,
  onWeight,
  selected,
  onToggle,
}: {
  product: Product;
  weight: string;
  onWeight: (w: string) => void;
  selected: boolean;
  onToggle: () => void;
}) {
  const [hover, setHover] = useState(false);
  const isMakhana = product.id === "makhana";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card p-5 shadow-[0_6px_24px_-12px_oklch(0.32_0.07_50/0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_oklch(0.32_0.07_50/0.45)]"
    >
      {isMakhana && hover && (
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
          {[20, 45, 68, 82].map((left, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${left}%`, top: -30 }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 220, opacity: [0, 1, 0], rotate: 160 }}
              transition={{ duration: 1.4, delay: i * 0.15, ease: "easeIn" }}
            >
              <MakhanaPiece size={16 + i * 3} blur={0} opacity={1} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-secondary">
        <img
          src={product.image}
          alt={`Shake N Bite ${product.name} — ${product.subtitle}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-2xl font-bold text-choco">{product.name}</h3>
      <p className="text-sm font-medium text-forest">{product.subtitle}</p>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>

      <div className="mt-4 flex flex-wrap gap-2" role="radiogroup" aria-label={`${product.name} weight`}>
        {product.weights.map((w) => (
          <button
            key={w}
            role="radio"
            aria-checked={weight === w}
            onClick={() => onWeight(w)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              weight === w
                ? "border-forest bg-forest text-forest-foreground"
                : "border-border bg-background text-foreground/70 hover:border-forest"
            }`}
          >
            {w}
          </button>
        ))}
      </div>

      <a
        href={waLink(MESSAGES.product(product.name, weight))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-forest-foreground transition-transform hover:scale-[1.02]"
      >
        <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
      </a>
      <button
        onClick={onToggle}
        aria-pressed={selected}
        className={`mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
          selected ? "border-gold bg-gold/20 text-choco" : "border-border text-foreground/70 hover:border-gold"
        }`}
      >
        {selected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        {selected ? "Added to enquiry" : "Add to enquiry"}
      </button>
    </motion.article>
  );
}

export function Products() {
  const [weights, setWeights] = useState<Selection>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.weights[0]])),
  );
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const items = PRODUCTS.filter((p) => selected.includes(p.id)).map((p) => ({
    name: p.name,
    weight: weights[p.id],
  }));

  return (
    <section id="products" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Our Products" subtitle="Four honest snacks, one promise of purity." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              weight={weights[p.id]}
              onWeight={(w) => setWeights((s) => ({ ...s, [p.id]: w }))}
              selected={selected.includes(p.id)}
              onToggle={() => toggle(p.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {items.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-choco px-4 py-3 text-cream shadow-2xl"
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 pr-16 sm:flex-row sm:justify-between">
              <p className="text-sm font-medium">
                {items.length} product{items.length > 1 ? "s" : ""} selected
              </p>
              <a
                href={waLink(MESSAGES.multi(items))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2 text-sm font-semibold text-forest-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Send Enquiry on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
