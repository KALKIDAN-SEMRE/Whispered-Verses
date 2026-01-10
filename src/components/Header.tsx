import { Feather, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="text-center py-12 md:py-20 relative overflow-hidden">
      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full hover:bg-accent transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Toggle theme"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
            )
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-3 mb-6 animate-float">
        <Feather className="w-8 h-8 md:w-10 md:h-10 text-primary animate-quill-float" />
      </div>
      
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-4 tracking-tight animate-text-reveal opacity-0">
        Verse
      </h1>
      
      <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed italic animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
        An anonymous sanctuary for poetry.
        <br />
        Share your words. Read in silence.
      </p>

      <div className="mt-8 w-24 h-px bg-border mx-auto animate-scale-in opacity-0" style={{ animationDelay: '0.5s' }} />
    </header>
  );
};

export default Header;
