import { motion } from "motion/react";
import { Plane, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight pt-24 pb-12 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-cyan-glow/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="space-y-8">
            <a href="/" className="flex items-center gap-2">
              <Plane className="w-8 h-8 text-cyan-glow" />
              <span className="text-2xl font-display font-bold tracking-tighter">
                NOMAD<span className="text-cyan-glow">NEST</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting ultra-premium journeys for the discerning traveler. Explore the world beyond limits with NomadNest.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-glow hover:text-midnight hover:border-cyan-glow transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Destinations", "Travel Packages", "Why Us", "Reviews", "Our Story"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-cyan-glow transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Contact Us", "Privacy Policy", "Terms of Service", "Travel Insurance", "Sitemap"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-cyan-glow transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-white/50 text-xs mb-6 font-medium">Subscribe to receive exclusive travel updates.</p>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs focus:outline-none focus:border-cyan-glow/50"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-xs hover:brightness-110">
                Join
              </button>
            </div>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/50">
                <MapPin className="w-4 h-4 text-cyan-glow" />
                <span>Luxury Lane, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Phone className="w-4 h-4 text-cyan-glow" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
          <p>© 2026 NomadNest Travels. All Rights Reserved.</p>
          <p>Designed for the future of travel.</p>
        </div>
      </div>
    </footer>
  );
}
