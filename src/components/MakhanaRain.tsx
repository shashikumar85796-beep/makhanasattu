import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Piece {
  id: number;
  left: number; // % across hero
  size: number; // px
  duration: number; // s
  delay: number; // s
  rotate: number;
  blur: number;
  opacity: number;
}

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, i) => {
    const near = i % 3 !== 0; // 2/3 near, 1/3 far
    return {
      id: i,
      left: 36 + ((i * 37) % 26), // column above the bowl
      size: near ? 26 + ((i * 13) % 22) : 14 + ((i * 7) % 10),
      duration: near ? 3.2 + ((i * 0.7) % 1.6) : 5 + ((i * 0.9) % 2),
      delay: (i * 0.55) % 4,
      rotate: 90 + ((i * 47) % 180),
      blur: near ? 0 : 2.2,
      opacity: near ? 1 : 0.6,
    };
  });
}

export function MakhanaPiece({ size, blur, opacity }: { size: number; blur: number; opacity: number }) {
  return (
    <div
      className="makhana-piece"
      style={{ width: size, height: size, filter: blur ? `blur(${blur}px)` : undefined, opacity }}
    />
  );
}

export function MakhanaRain() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(14);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setCount(mq.matches ? 8 : 14);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const pieces = makePieces(count);

  if (reduce) {
    // Static scatter for reduced motion
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {pieces.map((p) => (
          <div key={p.id} className="absolute" style={{ left: `${p.left}%`, bottom: `${10 + (p.id * 13) % 55}%` }}>
            <MakhanaPiece size={p.size} blur={p.blur} opacity={p.opacity} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: -60 }}
          animate={{ y: ["0vh", "84vh"], rotate: [0, p.rotate], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeIn",
          }}
        >
          <MakhanaPiece size={p.size} blur={p.blur} opacity={p.opacity} />
        </motion.div>
      ))}
    </div>
  );
}
