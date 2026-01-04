import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-semibold tracking-tight"
          >
            <span className="text-primary">Ayanfe</span>
            <span className="text-foreground">oluwa</span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="/Ayanfeoluwa_Alalade_Resume.pdf" target="_blank" download>
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-lg p-4 border border-border">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">0{index + 1}.</span> {link.name}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-fit" asChild>
              <a href="/Ayanfeoluwa_Alalade_Resume.pdf" target="_blank" download>
                Resume
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
