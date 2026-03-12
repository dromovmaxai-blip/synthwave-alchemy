import { Bot, Database, MessageSquare, Eye, FileCode2, Sparkles } from "lucide-react";

const services = [
  { icon: Bot, title: "Autonomous Agents", desc: "Custom AI agents that handle complex multi-step tasks end-to-end.", span: "col-span-1 md:col-span-2 md:row-span-2" },
  { icon: Database, title: "Data Infrastructure", desc: "Scalable pipelines for real-time data processing and model training.", span: "col-span-1" },
  { icon: MessageSquare, title: "Conversational AI", desc: "Enterprise chatbots with deep domain knowledge.", span: "col-span-1" },
  { icon: Eye, title: "Computer Vision", desc: "Visual inspection, OCR, and scene understanding systems.", span: "col-span-1 md:col-span-2" },
  { icon: FileCode2, title: "API Orchestration", desc: "Intelligent API layers that coordinate across services.", span: "col-span-1" },
  { icon: Sparkles, title: "Generative AI", desc: "Content generation, code synthesis, and creative automation.", span: "col-span-1" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-4">Solutions</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Custom AI <span className="text-gradient-primary">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, span }) => (
            <div key={title} className={`glass-card p-8 flex flex-col justify-end hover:border-primary/20 transition-all duration-500 ${span}`}>
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
