import { motion } from "motion/react";
import { Plane } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-midnight flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-8"
      >
        <Plane className="w-20 h-20 text-gold" />
      </motion.div>
      
      <div className="relative w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-gold to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <h2 className="text-xl font-display font-black tracking-[0.4em] text-white">NOMADNEST</h2>
        <p className="text-[10px] uppercase tracking-[0.6em] text-gold font-bold">Curating Luxury...</p>
      </motion.div>
    </motion.div>
  );
}
