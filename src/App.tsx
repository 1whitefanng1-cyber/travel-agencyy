/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import BentoFeatures from "./components/BentoFeatures";
import StorySection from "./components/StorySection";
import Packages from "./components/Packages";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import SocialSection from "./components/SocialSection";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-midnight">
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-glow z-[100] origin-left"
        style={{ scaleX: scaleX as any }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          <Destinations />
          <BentoFeatures />
          <StorySection />
          <Packages />
          <TestimonialsCarousel />
          <SocialSection />
        </div>
      </main>

      {/* Scrolling Sidebar Indicator Mockup */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 items-center z-[80]">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-1 bg-white/20 rounded-full"></div>
        ))}
      </div>

      <Footer />
      
      <ChatBot />

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#071120] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#0a1a30] rounded-full blur-[130px] opacity-40" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
