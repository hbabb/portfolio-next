import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TronBorderProps {
  children: ReactNode;
  className?: string;
}

export function TronBorder({ children, className = "" }: TronBorderProps) {
  return (
    <div
    className={`${className ?? ""} border-2 border-tron-dark rounded-lg p-4 overflow-hidden`}
>
      <motion.div
        className="w-3 h-3 bg-tron-glow rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: ["0%", "100%", "100%", "0%", "0%"],
          y: ["0%", "0%", "100%", "100%", "0%"],
        }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {children}
    </div>
  );
}
