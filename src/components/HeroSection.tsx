import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-50 animate-float"
          style={{ animationDuration: "12s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Bokeh accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          AI Automation Agency
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          We Build
          <br />
          <span className="text-gradient-primary">Intelligent</span>
          <br />
          Systems
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Custom AI solutions that transform how your business operates. From automation to intelligence — engineered for scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a href="#contact" className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-base hover:brightness-110 transition-all glow-green">
            Start Your Project
          </a>
          <a href="#process" className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-base hover:bg-muted/30 transition-all">
            See How It Works
          </a>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
