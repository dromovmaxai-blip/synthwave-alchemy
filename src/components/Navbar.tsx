const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/60 backdrop-blur-lg border-b border-border/40">
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        NEXUS<span className="text-primary">.</span>AI
      </span>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a
        href="#contact"
        className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all"
      >
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;
