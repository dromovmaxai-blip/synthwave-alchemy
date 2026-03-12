const CTAFooter = () => {
  return (
    <section id="contact" className="section-spacing relative">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="container max-w-4xl relative z-10 text-center">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6">Ready?</p>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
          Let's Build Something<br />
          <span className="text-gradient-primary">Extraordinary</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          Every great AI system starts with a conversation. Tell us what you're building.
        </p>
        <a
          href="mailto:hello@nexus.ai"
          className="inline-block px-10 py-5 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all glow-green"
        >
          Get in Touch
        </a>
      </div>

      {/* Footer */}
      <div className="container max-w-6xl mt-32">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground">NEXUS<span className="text-primary">.</span>AI</span>
          <p>© 2026 Nexus AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
