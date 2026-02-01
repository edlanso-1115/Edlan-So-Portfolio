import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  const { displayedText, isComplete } = useTypewriter({
    text: "Edlan So",
    speed: 80,
    delay: 300,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000 relative z-10">
        {/* Main Heading with Typing Effect */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-semibold inline-block min-h-[1.2em]">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground/95 max-w-2xl mx-auto leading-relaxed">
            Student from University of Waterloo | Nanotechnology Engineering | Passionate In New Techs
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="gap-2 hover:scale-105 transition-transform"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:scale-105 transition-transform"
          >
            View My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <ChevronDown className="mx-auto text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  );
}

