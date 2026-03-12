import { useState, useRef } from "react";

const ComparisonShowcase = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="showcase" className="section-spacing relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Transformation</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Before <span className="text-muted-foreground">&</span> After
          </h2>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-col-resize glass-card-strong glow-blue select-none"
          onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* Before side */}
          <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
            <div className="text-center px-8">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Before</p>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-muted-foreground/60 mb-2">Manual Workflows</h3>
              <p className="text-muted-foreground/50 text-sm max-w-sm">Disconnected tools, repetitive tasks, slow decision-making</p>
            </div>
          </div>

          {/* After side */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <div className="text-center px-8">
              <p className="text-sm tracking-[0.2em] uppercase text-accent mb-3">After</p>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">AI-Powered Automation</h3>
              <p className="text-muted-foreground text-sm max-w-sm">Unified intelligence, autonomous operations, instant insights</p>
            </div>
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary/80 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonShowcase;
