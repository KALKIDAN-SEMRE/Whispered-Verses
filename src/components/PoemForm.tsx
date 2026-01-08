import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Feather, Send } from "lucide-react";

interface PoemFormProps {
  onPoemSubmitted: () => void;
}

const PoemForm = ({ onPoemSubmitted }: PoemFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Please write your poem",
        description: "The poem content cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("poems").insert({
        title: title.trim() || null,
        content: content.trim(),
      });

      if (error) throw error;

      toast({
        title: "Your poem has been shared",
        description: "Thank you for contributing to our sanctuary.",
      });

      setTitle("");
      setContent("");
      onPoemSubmitted();
    } catch (error) {
      console.error("Error submitting poem:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <Feather className="w-8 h-8 text-primary mx-auto mb-4 animate-quill-float" />
        <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          Share Your Words
        </h2>
        <p className="text-muted-foreground font-body animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Write anonymously. Express freely.
        </p>
      </div>

      <div className="space-y-4">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <Input
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-background border-input font-body text-lg placeholder:text-muted-foreground/60 focus-literary h-12 transition-all duration-300 hover:border-primary/50 focus:border-primary"
            maxLength={200}
          />
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <Textarea
            placeholder="Write your poem here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="bg-background border-input font-body text-lg placeholder:text-muted-foreground/60 focus-literary min-h-[200px] resize-y leading-relaxed transition-all duration-300 hover:border-primary/50 focus:border-primary"
            maxLength={5000}
          />
        </div>
      </div>

      <div className="flex justify-end animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
        <Button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className="group font-body text-base px-6 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="animate-gentle-pulse">Sharing...</span>
          ) : (
            <>
              Share Poem
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default PoemForm;
