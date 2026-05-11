import { motion } from "motion/react";
import { Star, ArrowRight, Play } from "lucide-react";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-landscape-of-mountains-and-lakes-v2-4214-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-radial-at-t from-midnight/40 via-midnight/70 to-midnight" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-midnight/20 to-midnight" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-80 lg:pt-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">AI-Powered Itineraries Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[88px] leading-[0.9] lg:leading-[0.85] font-black uppercase tracking-tighter mb-8">
              Explore The World<br className="hidden md:block" />
              <span className="text-gradient-gold">Beyond Limits</span>
            </h1>
            
            <p className="text-base md:text-lg font-light text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Ultra-premium journeys curated by AI and refined by world-class travel connoisseurs. Your odyssey starts here.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button className="luxury-button-primary group w-full sm:w-auto justify-center">
                Explore Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="luxury-button-outline w-full sm:w-auto">
                Plan My Trip
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 text-white/80 justify-center lg:justify-start border-t border-white/5 lg:border-t-0">
              <div>
                <p className="text-xl md:text-2xl font-bold tracking-tight">12K+</p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Luxury Travelers</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold tracking-tight">4.9</p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Global Rating</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold tracking-tight">24/7</p>
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">VIP Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Booking Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:block"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-glow/10 blur-[100px] rounded-full animate-pulse lg:opacity-100 opacity-50" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold/5 blur-[120px] rounded-full animate-pulse lg:opacity-100 opacity-50" />
            <div className="max-w-md mx-auto">
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll Down</span>
        <div className="w-[1px] h-10 bg-white/50" />
      </motion.div>
    </section>
  );
}
