import { useEffect, useRef, useState } from "react";

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Only calculate parallax when element is in view
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrolled = window.scrollY;
          const elementScrolled = scrolled - (ref.current.offsetTop - windowHeight);
          setOffset(elementScrolled * speed);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

