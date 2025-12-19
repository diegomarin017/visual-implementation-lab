import { Search, Eye, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análisis inicial",
    description: "Mapeo de procesos internos actuales",
  },
  {
    icon: Eye,
    number: "02",
    title: "Detección",
    description: "Identifico tareas repetitivas y bloqueos",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Propuesta",
    description: "Soluciones prácticas con herramientas de IA",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementación",
    description: "Puesta en marcha progresiva y guiada",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Validación",
    description: "Medición de ahorro y eficiencia real",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 px-4 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Cómo trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado para implementar IA de forma práctica y medible.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => (
                <div key={step.number} className="relative group">
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 right-0 translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                      <div className="w-2 h-2 border-r-2 border-t-2 border-primary/50 rotate-45" />
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile flow */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-4">
                  <div className="absolute -left-5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex-1 card-glass rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-mono">{step.number}</span>
                        <h3 className="font-display font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
