import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of fixed navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About Semper", id: "hero" },
    { label: "Problems", id: "problems" },
    { label: "Services", id: "solution" },
    { label: "Pricing", id: "pricing" },
    { label: "Why Us", id: "why-choose" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 neo-card bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div 
            className="cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-2xl font-bold text-primary">SemperMade</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="neo-primary" 
              size="sm"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden neo-card mt-2 p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="neo-primary" 
              className="w-full mt-4"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;