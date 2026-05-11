import { motion } from "motion/react";
import { Instagram, Send, Heart, MessageCircle } from "lucide-react";

export default function SocialSection() {
  const images = [
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600"
  ];

  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-glow font-bold mb-4 block">Social Proof</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight tracking-tighter mb-8">
              JOIN THE <br />
              <span className="text-gradient-gold">#NOMADNEST</span> <br />
              VIBE
            </h2>
            <p className="text-lg text-white/50 font-light mb-10 max-w-md">
              Follow our journey on social media and see how others are exploring the world through our lens.
            </p>
            <div className="flex gap-6">
              <div className="glass p-4 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-orange-500 to-pink-500 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">150K+</h4>
                  <p className="text-[10px] text-white/40 uppercase font-bold">Followers</p>
                </div>
              </div>
              <div className="glass p-4 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">12K+</h4>
                  <p className="text-[10px] text-white/40 uppercase font-bold">In Community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 2 : -2 }}
                className="aspect-square rounded-[32px] overflow-hidden relative group"
              >
                <img src={img} alt="Social" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                   <div className="flex flex-col items-center gap-1">
                     <Heart className="w-6 h-6 text-white fill-white" />
                     <span className="text-xs font-bold">2.4K</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                     <MessageCircle className="w-6 h-6 text-white fill-white" />
                     <span className="text-xs font-bold">128</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
