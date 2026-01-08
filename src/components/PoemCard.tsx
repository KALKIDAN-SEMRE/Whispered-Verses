import { useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PoemCardProps {
  content: string;
  title?: string | null;
  createdAt: string;
  index: number;
}

const PoemCard = ({ content, title, createdAt, index }: PoemCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayTitle = title || "Untitled Poem";

  return (
    <>
      <article 
        onClick={() => setIsOpen(true)}
        className="poem-card group opacity-0 animate-fade-in-up bg-poem border border-poem-border rounded-lg p-8 md:p-12 shadow-poem hover:shadow-poem-hover cursor-pointer flex flex-col items-center justify-center h-full min-h-[200px] md:min-h-[250px] transition-all duration-300"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground italic text-center transition-all duration-300 group-hover:text-primary/90 px-4">
          {displayTitle}
        </h2>
        
        <footer className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <time 
            dateTime={createdAt}
            className="text-xs md:text-sm text-muted-foreground font-body italic"
          >
            {format(new Date(createdAt), "MMMM d, yyyy")}
          </time>
        </footer>
      </article>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-poem border-poem-border shadow-poem-hover p-8 md:p-12 rounded-xl">
          <DialogHeader className="text-center mb-8">
            <DialogTitle className="font-display text-3xl md:text-4xl font-medium text-foreground italic mb-3">
              {displayTitle}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground font-body italic">
              {format(new Date(createdAt), "MMMM d, yyyy")}
            </DialogDescription>
          </DialogHeader>
          
          <div className="poem-text text-foreground/90 whitespace-pre-wrap leading-relaxed text-lg md:text-xl">
            {content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PoemCard;
