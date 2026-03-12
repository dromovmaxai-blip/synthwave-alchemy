import { Brain, Shield, Gauge, Workflow, LineChart, Globe } from "lucide-react";

const values = [
  { icon: Brain, title: "Neural Processing", desc: "Advanced AI models tailored to your specific domain and data architecture." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant infrastructure with end-to-end encryption at every layer." },
  { icon: Gauge, title: "Real-Time Speed", desc: "Sub-second inference and decision-making for mission-critical operations." },
  { icon: Workflow, title: "Seamless Integration", desc: "Connect with your existing tech stack — no rip-and-replace required." },
  { icon: LineChart, title: "Predictive Analytics", desc: "Turn historical data into actionable forecasts with continuous model improvement." },
  { icon: Globe, title: "Global Scale", desc: "Infrastructure that scales from prototype to millions of transactions per day." },
];

const ValueGrid = () => {
  return (
    <section className="section-spacing relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Built for <span className="text-gradient-primary">Performance</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-8 rounded-2xl bg-muted/5 hover:bg-muted/15 transition-all duration-500 border border-transparent hover:border-border/30"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
