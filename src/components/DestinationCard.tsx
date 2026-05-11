import { motion } from "motion/react";
import { Star, Clock, ArrowUpRight } from "lucide-react";
import { Destination } from "../types";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[450px] w-full rounded-[32px] overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-linear-to-t from-midnight/90 via-midnight/20 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-4">
          <span className="px-2 py-1 bg-gold text-black text-[9px] font-bold uppercase rounded-sm">Featured Place</span>
        </div>

        <h3 className="text-3xl font-display font-bold mb-1 tracking-tighter">
          {destination.name}
        </h3>
        <p className="text-xs text-white/50 mb-4">{destination.duration} • AI Concierge</p>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">{destination.price}</span>
            <span className="text-[10px] font-light opacity-60 uppercase tracking-widest ml-1">/pp</span>
          </div>
          <motion.div
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
