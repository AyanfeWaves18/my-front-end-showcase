import { Camera } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Placeholder slots — replace `image` with imported asset paths once photos are uploaded.
const photos: { image?: string; caption: string }[] = [
  { caption: "Portrait" },
  { caption: "Event" },
  { caption: "Product" },
  { caption: "Lifestyle" },
  { caption: "Street" },
  { caption: "Editorial" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading mb-4">Photography</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of moments I've captured through the lens — from portraits
          to events and product shoots.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, index) => (
            <div
              key={photo.caption + index}
              className={`group relative aspect-square rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {photo.image ? (
                <img
                  src={photo.image}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-primary/5 text-muted-foreground">
                  <Camera size={32} className="text-primary/60" />
                  <span className="font-mono text-xs uppercase tracking-wider">
                    {photo.caption}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end p-4">
                <span className="font-mono text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
