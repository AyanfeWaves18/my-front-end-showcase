import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <p
          className="font-mono text-primary mb-5 opacity-0 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Hi, my name is
        </p>
        
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Ayanfeoluwa Alalade.
        </h1>
        
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          I build things for the web.
        </h2>
        
        <p
          className="text-muted-foreground max-w-xl text-lg mb-12 leading-relaxed opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          I'm a frontend developer who believes code is a creative medium. I transform complex problems into intuitive, delightful interfaces. When I'm not wrestling with CSS or JavaScript, I'm probably taking some photographs or doing some image editing while listening to music.
        </p>
        
        <div
          className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          <Button variant="glow" size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1200ms" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-mono text-xs">scroll down</span>
          <ArrowDown size={20} className="animate-float" />
        </a>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
