import { useState } from "react";
import { Leaf, Menu, X, MessageCircle } from "lucide-react";
import { SITE, waLink, MESSAGES } from "@/data/site";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Story", href: "#story" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-forest-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold text-choco">{SITE.brand}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(MESSAGES.floating)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-forest-foreground shadow-sm transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <button
          className="rounded-md p-2 text-choco lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-cream px-4 pb-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/50 py-3 text-sm font-medium text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(MESSAGES.floating)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-forest-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
