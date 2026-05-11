import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Map, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Headset 
} from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    title: "AI Itinerary Planning",
    description: "Get personalized travel flows using advanced AI that understands your preferences.",
    icon: Zap,
    className: "lg:col-span-2 lg:row-span-2 bg-linear-to-br from-cyan-glow/20 to-transparent",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    parallaxSpeed: 0.2
  },
  {
    title: "Verified Luxury Hotels",
    description: "Only the top 1% of boutique and 5-star properties.",
    icon: ShieldCheck,
    className: "lg:col-span-1 lg:row-span-1",
    parallaxSpeed: 0.1
  },
  {
    title: "Instant WhatsApp Booking",
    description: "Book entire trips via a secure chat interface.",
    icon: MessageCircle,
    className: "lg:col-span-1 lg:row-span-1",
    parallaxSpeed: 0.15
  },
  {
    title: "24/7 Concierge Support",
    description: "Personal travel experts available round the clock.",
    icon: Headset,
    className: "lg:col-span-2 lg:row-span-1",
    parallaxSpeed: 0.05
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free documentation for any country.",
    icon: Globe,
    className: "lg:col-span-1 lg:row-span-1",
    parallaxSpeed: 0.25
  },
  {
    title: "Safe Travel Promise",
    description: "Comprehensive travel insurance and safety protocols.",
    icon: ShieldCheck,
    className: "lg:col-span-1 lg:row-span-1",
    parallaxSpeed: 0.12
  }
];

export default function BentoFeatures() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="why-us" ref={containerRef} className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-glow/5 blur-[150px] rounded-full -z-10" 
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] text-cyan-glow font-bold mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tighter"
          >
            THE NEW ERA OF <span className="text-gradient-gold">TRAVEL</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[800px] lg:gap-8">
          {features.map((feature, i) => {
            // Disable parallax on mobile to prevent overlapping/awkward gaps
            const y = useTransform(scrollYProgress, [0, 1], [0, typeof window !== 'undefined' && window.innerWidth < 1024 ? 0 : 100 * (feature.parallaxSpeed || 0.1)]);
            
            return (
              <motion.div
                key={i}
                style={{ y }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={cn(
                  "glass rounded-[32px] p-8 group relative overflow-hidden flex flex-col justify-end min-h-[350px] md:min-h-[300px]",
                  feature.className
                )}
              >
                {feature.image && (
                  <motion.img 
                    style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.15]) }}
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/40 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div 
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(34, 211, 238, 0)", "0 0 20px rgba(34, 211, 238, 0.4)", "0 0 0px rgba(34, 211, 238, 0)"],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:glow-cyan group-hover:border-cyan-glow/50 transition-all duration-500"
                  >
                    <feature.icon className="w-7 h-7 text-cyan-glow group-hover:scale-110 transition-transform duration-500" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold mb-3 tracking-tight group-hover:text-cyan-glow transition-colors max-w-[200px]">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[250px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
