import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-midnight relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200" 
                alt="Story" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-midnight/20 group-hover:bg-midnight/0 transition-all duration-700" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute -bottom-10 -right-10 glass-dark p-6 rounded-3xl max-w-xs hidden md:block"
            >
              <p className="text-xl font-serif italic text-gold mb-2">“An experience crafted for the soul.”</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-glow/20" />
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Luxe Magazine</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-glow font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              NOT JUST TRIPS. <br />
              <span className="text-gradient-gold italic font-serif font-light">Experiences</span> <br />
              FOR YOUR SOUL.
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10">
              We believe travel is more than just checking items off a list. It's about the quiet moments, the heart-racing adventures, and the deep connections we make with the world around us.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                "Personalized 1-on-1 travel curation",
                "Off-beat paths & hidden treasures",
                "Sustainable and slow travel luxury",
                "Exclusive access to private events"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-cyan-glow/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-glow" />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="luxury-button bg-white text-midnight font-bold flex items-center gap-2 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
