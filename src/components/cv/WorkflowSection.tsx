import { Target, Zap, Cpu, BarChart3 } from "lucide-react";
import { Layers } from "lucide-react";

const steps = [
  {
    icon: Target,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    number: "01",
    title: "Analizar",
    description: "Reviso procesos actuales y detecto tareas repetitivas y bloqueos.",
  },
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/20",
    number: "02",
    title: "Definir",
    description: "Identifico oportunidades concretas donde la IA aporta mejoras reales.",
  },
  {
    icon: Cpu,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    number: "03",
    title: "Implementar",
    description: "Aplico herramientas existentes (LLMs, automatizaciones) para resolver el problema.",
  },
  {
    icon: BarChart3,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
    number: "04",
    title: "Medir",
    description: "Mido el ahorro de tiempo y la mejora en la calidad del trabajo entregado.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-muted-foreground" />
          <h2 className="text-2xl font-display font-bold text-foreground">Mi Sistema Operativo</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-border transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-6`}>
                <step.icon className={`w-6 h-6 ${step.iconColor}`} />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                PASO {step.number}
              </p>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
