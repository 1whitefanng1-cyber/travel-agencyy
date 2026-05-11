import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export default function TestimonialsCarousel() {
  return (
    <section id="reviews" className="py-24 bg-midnight relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-cyan-glow font-bold mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tighter"
          >
            VOICES OF <span className="text-gradient-gold">LUXURY</span>
          </motion.h2>
        </div>

        <div className="flex overflow-hidden relative group">
          <div className="flex animate-marquee-slower group-hover:pause gap-8">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((test, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[400px] glass p-10 rounded-[40px] relative overflow-hidden group/card"
              >
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-lg text-white/80 font-light italic leading-relaxed mb-8 relative z-10">
                  "{test.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 p-1 group-hover/card:border-cyan-glow transition-all duration-500">
                    <img src={test.image} alt={test.name} className="w-full h-full rounded-full grayscale group-hover/card:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-tight">{test.name}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
