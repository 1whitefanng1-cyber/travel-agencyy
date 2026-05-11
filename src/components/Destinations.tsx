import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DESTINATIONS } from "../constants";
import DestinationCard from "./DestinationCard";

export default function Destinations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="destinations" ref={containerRef} className="py-24 bg-midnight relative overflow-hidden">
      {/* Decorative Orbs */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 300]) }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-glow/5 blur-[150px] rounded-full" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [200, -300]) }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full" 
      />

      {/* Parallax Background Text */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-1/2 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none"
      >
        <span className="text-[20vw] font-black uppercase leading-none">EXPLORE • DISCOVER • WANDER • </span>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-glow font-bold mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter">
              LUXURY <span className="italic font-serif font-light text-white/40">Destinations</span> <br />
              CRAFTED FOR YOU
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-sm leading-relaxed"
          >
            Discover hand-picked global escapes that blend culture, comfort, and breathtaking luxury. Every trip is a masterpiece.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {DESTINATIONS.map((dest, i) => {
            const yValue = typeof window !== 'undefined' && window.innerWidth < 1024 ? (i * 20) : (i % 2 === 0 ? 80 : -40);
            return (
              <motion.div
                key={dest.id}
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [0, yValue]),
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative z-10"
              >
                <DestinationCard destination={dest} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
