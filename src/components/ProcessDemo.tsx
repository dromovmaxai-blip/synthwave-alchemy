import { Play, ArrowRight, Zap, BarChart3 } from "lucide-react";

const ProcessDemo = () => {
  return (
    <section id="process" className="section-spacing relative">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            From Concept to <span className="text-gradient-primary">Deployment</span>
          </h2>
        </div>

        {/* Video Container */}
        <div className="glass-card-strong p-2 mb-16 glow-blue">
          <div className="relative aspect-video rounded-xl bg-muted/30 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <button className="relative z-10 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-all group">
              <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
            </button>
            <p className="absolute bottom-6 text-sm text-muted-foreground">Showcase Demo Video</p>
          </div>
        </div>

        {/* Input / Output Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Input</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your existing workflows, data pipelines, and business logic. We analyze your operations to identify the highest-impact automation opportunities.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Raw business processes", "Unstructured data sources", "Manual decision workflows"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold">Output</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fully deployed AI systems that run autonomously. Real-time dashboards, predictive models, and intelligent automation — ready for production.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Automated decision engines", "Real-time analytics dashboards", "Self-improving AI pipelines"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDemo;
