import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[999] hidden lg:block"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[400px] h-[400px] bg-cyan-glow/5 blur-[80px] rounded-full" />
    </motion.div>
  );
}

// Fixed the typo removeMouseMoveListener -> removeEventListener
