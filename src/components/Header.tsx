import { Feather } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-12 md:py-20 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Feather className="w-8 h-8 md:w-10 md:h-10 text-primary" />
      </div>
      
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-4 tracking-tight">
        Verse
      </h1>
      
      <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed italic">
        An anonymous sanctuary for poetry.
        <br />
        Share your words. Read in silence.
      </p>

      <div className="mt-8 w-24 h-px bg-border mx-auto" />
    </header>
  );
};

export default Header;
