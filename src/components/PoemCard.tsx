import { format } from "date-fns";

interface PoemCardProps {
  content: string;
  title?: string | null;
  createdAt: string;
  index: number;
}

const PoemCard = ({ content, title, createdAt, index }: PoemCardProps) => {
  return (
    <article 
      className="poem-card opacity-0 animate-fade-in-up bg-poem border border-poem-border rounded-lg p-8 md:p-12 shadow-poem hover:shadow-poem-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {title && (
        <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
          {title}
        </h2>
      )}
      
      <div className="poem-text text-foreground/90 mb-8">
        {content}
      </div>
      
      <footer className="flex items-center justify-end">
        <time 
          dateTime={createdAt}
          className="text-sm text-muted-foreground font-body italic"
        >
          {format(new Date(createdAt), "MMMM d, yyyy")}
        </time>
      </footer>
    </article>
  );
};

export default PoemCard;
