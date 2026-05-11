import { motion } from "motion/react";
import { Check, Star, Clock } from "lucide-react";
import { Package } from "../types";
import { cn } from "../lib/utils";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "glass p-8 rounded-[40px] relative flex flex-col h-full overflow-hidden transition-all duration-500",
        pkg.isPopular ? "border-cyan-glow bg-cyan-glow/5" : "hover:bg-white/5"
      )}
    >
      {pkg.isPopular && (
        <div className="absolute top-0 right-0 py-2 px-6 bg-cyan-glow text-midnight text-[10px] uppercase tracking-widest font-bold rounded-bl-3xl">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-3xl font-display font-bold mb-2 tracking-tight">{pkg.title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gold">
            <Star className="w-3 h-3 fill-gold" />
            <span className="text-xs font-bold">{pkg.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-white/50">
            <Clock className="w-3 h-3" />
            <span className="text-xs font-medium">{pkg.duration}</span>
          </div>
        </div>
      </div>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-bold text-gradient-gold">{pkg.price}</span>
        <span className="text-xs text-white/40 uppercase tracking-widest font-bold">/ Person</span>
      </div>

      <div className="space-y-4 flex-grow mb-10">
        <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">What's Included</p>
        {pkg.inclusions.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-cyan-glow/10 flex items-center justify-center">
              <Check className="w-3 h-3 text-cyan-glow" />
            </div>
            <span className="text-sm text-white/70 font-medium">{item}</span>
          </div>
        ))}
      </div>

      <button className={cn(
        "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300",
        pkg.isPopular 
          ? "bg-cyan-glow text-midnight shadow-[0_0_30px_rgba(0,255,255,0.2)]" 
          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
      )}>
        Explore Package
      </button>
    </motion.div>
  );
}
