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
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Verse — Anonymous Poetry Sanctuary</title>
      <meta name="description" content="A peaceful, anonymous space to share and read poetry. Express yourself freely without identity." />
      
      <main className="container max-w-3xl mx-auto px-4 pb-20">
        <Header />

        {/* Submit Section */}
        <section className="bg-card border border-border rounded-xl p-6 md:p-10 mb-16 shadow-poem animate-fade-in-up opacity-0 stagger-2">
          <PoemForm onPoemSubmitted={handlePoemSubmitted} />
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in stagger-3 opacity-0">
          <Separator className="flex-1" />
          <span className="font-display text-lg text-muted-foreground italic">
            Recent Poems
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Poems Feed */}
        <section>
          <PoemFeed refreshTrigger={refreshTrigger} />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border">
        <p className="text-sm text-muted-foreground font-body">
          A quiet space for words that matter.
        </p>
      </footer>
    </div>
  );
};

export default Index;
