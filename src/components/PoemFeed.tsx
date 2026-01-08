import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import PoemCard from "./PoemCard";
import { BookOpen } from "lucide-react";

interface Poem {
  id: string;
  content: string;
  title: string | null;
  created_at: string;
}

interface PoemFeedProps {
  refreshTrigger: number;
}

const PoemFeed = ({ refreshTrigger }: PoemFeedProps) => {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPoems = async () => {
    const { data, error } = await supabase
      .from("poems")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching poems:", error);
    } else {
      setPoems(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPoems();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("poems-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "poems",
        },
        (payload) => {
          setPoems((current) => [payload.new as Poem, ...current]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (refreshTrigger > 0) {
      fetchPoems();
    }
  }, [refreshTrigger]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
        <p className="text-muted-foreground font-body italic">Loading poems...</p>
      </div>
    );
  }

  if (poems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <BookOpen className="w-16 h-16 text-muted-foreground/40 mb-6" />
        <h3 className="font-display text-2xl text-foreground mb-2">No poems yet</h3>
        <p className="text-muted-foreground font-body max-w-md">
          Be the first to share your words. This sanctuary awaits your voice.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
      {poems.map((poem, index) => (
        <PoemCard
          key={poem.id}
          content={poem.content}
          title={poem.title}
          createdAt={poem.created_at}
          index={index}
        />
      ))}
    </div>
  );
};

export default PoemFeed;
