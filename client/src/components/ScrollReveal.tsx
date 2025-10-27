import { ReactNode, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        transition: isVisible ? "all 0.6s ease-out" : "none",
      }}
    >
      {children}
    </div>
  );
}

