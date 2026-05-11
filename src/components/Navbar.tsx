import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Why Us", href: "#why-us" },
    { name: "Packages", href: "#packages" },
    { name: "Reviews", href: "#reviews" },
    { name: "Experience", href: "#story" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 flex items-center",
        isScrolled ? "bg-white/5 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-[#F9E29C] rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-xs">NN</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            Nomad<span className="font-light opacity-70">Nest</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] opacity-70 hover:opacity-100 hover:text-white transition-all relative group"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-wider rounded-sm hover:bg-gold transition-all">
            Book Experience
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-xl border-b border-white/10 p-8 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold uppercase tracking-widest text-xs rounded-sm">
              Book Experience
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
