import { motion } from "framer-motion";

export function SectionTitle({ title, subtitle, light }: { title: string; subtitle?: string; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-cream" : "text-choco"}`}>{title}</h2>
      <div className="mx-auto mt-3 flex items-center justify-center gap-2">
        <span className="h-px w-10 bg-gold" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold" />
      </div>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-xl ${light ? "text-cream/80" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
