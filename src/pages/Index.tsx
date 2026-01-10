import { useState } from "react";
import Header from "@/components/Header";
import PoemForm from "@/components/PoemForm";
import PoemFeed from "@/components/PoemFeed";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handlePoemSubmitted = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* SEO Meta */}
      <title>Verse — Anonymous Poetry Sanctuary</title>
      <meta name="description" content="A peaceful, anonymous space to share and read poetry. Express yourself freely without identity." />
      
      <main className="container max-w-3xl mx-auto px-4 pb-20">
        <Header />

        {/* Submit Section */}
        <section className="bg-card border border-border rounded-xl p-6 md:p-10 mb-16 shadow-poem animate-slide-in-bottom opacity-0" style={{ animationDelay: '0.2s' }}>
          <PoemForm onPoemSubmitted={handlePoemSubmitted} />
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <Separator className="flex-1 transition-all duration-500 hover:flex-[1.2]" />
          <span className="font-display text-lg text-muted-foreground italic transition-all duration-300 hover:text-primary/80 hover:scale-105">
            Recent Poems
          </span>
          <Separator className="flex-1 transition-all duration-500 hover:flex-[1.2]" />
        </div>

        {/* Poems Feed */}
        <section className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          <PoemFeed refreshTrigger={refreshTrigger} />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
        <p className="text-sm text-muted-foreground font-body transition-colors duration-300 hover:text-foreground/80">
          A quiet space for words that matter.
        </p>
      </footer>
    </div>
  );
};

export default Index;
