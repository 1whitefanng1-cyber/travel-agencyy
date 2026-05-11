import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 right-12 z-[100]"
    >
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-green-500 text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(34,197,94,0.3)]"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        WhatsApp Expert
      </a>
    </motion.div>
  );
}
