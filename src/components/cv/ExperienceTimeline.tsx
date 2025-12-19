import { useState } from "react";
import { ChevronDown, ChevronUp, Brain, Users, Cpu, Clock, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
  period: string;
  quote: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "ia",
    icon: Brain,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    title: "Inteligencia Artificial – Uso Práctico",
    subtitle: "Formación & Aplicación Real",
    period: "En curso",
    quote: "Transformando teoría en ahorro de tiempo real.",
    highlights: [
      "Análisis y documentación de procesos para empresas.",
      "Automatización de tareas repetitivas (sin código complejo).",
      "Uso de LLMs para apoyo en toma de decisiones y desbloqueo de proyectos.",
      "Enfoque 100% práctico: 'No programo, implemento'.",
    ],
  },
  {
    id: "leinn",
    icon: Users,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
    title: "LEINN – Liderazgo e Innovación",
    subtitle: "Emprendedor de Proyectos Reales",
    period: "2 Años",
    quote: "Gestión real: De organizar eventos a dirigir un bar.",
    highlights: [
      "Gestión integral de un bar: Responsabilidad operativa (sala/cocina), proveedores y procesos.",
      "Organización de 4 eventos deportivos (Pádel) con crecimiento de 60 a +100 asistentes.",
      "Creación inicial de agencia orientada a soluciones prácticas. Experiencia en ideación y validación de mercado.",
      "Trabajo en equipo (3-4 personas) basado en metodologías ágiles.",
    ],
  },
  {
    id: "robotics",
    icon: Cpu,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    title: "Competiciones de Robótica (FLL & WRO)",
    subtitle: "Competidor Internacional",
    period: "Trayectoria",
    quote: "Resolución lógica de problemas bajo presión extrema.",
    highlights: [
      "World Robot Olympiad: 2x Campeón de España, Finalista internacional en Hungría.",
      "FIRST LEGO League: Premios nacionales, finalista en Estonia.",
      "Diseño de soluciones mecánicas y lógicas para problemas reales.",
      "Coordinación de equipos de alto rendimiento.",
    ],
  },
  {
    id: "tudetic",
    icon: Cpu,
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    title: "Tudetic (Empresa de venta online)",
    subtitle: "IA Aplicada",
    period: "Proyecto",
    quote: "Automatización real con resultados medibles.",
    highlights: [
      "Modificación de imágenes en bloque automáticamente con Python.",
      "Categorización de productos automática con IA.",
    ],
  },
  {
    id: "telepizza",
    icon: Clock,
    iconColor: "text-accent",
    iconBg: "bg-accent/20",
    title: "Telepizza",
    subtitle: "Repartidor / Operativo",
    period: "Experiencia Laboral",
    quote: "Eficiencia operativa y cumplimiento de objetivos.",
    highlights: [
      "Saber aguantar la presión en momentos de alta presión.",
      "Cumplimiento de objetivos diarios y responsabilidad.",
    ],
  },
];

const ExperienceTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>("ia");

  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Briefcase className="w-6 h-6 text-muted-foreground" />
          <h2 className="text-2xl font-display font-bold text-foreground">Experiencia & Proyectos</h2>
        </div>
        <p className="text-muted-foreground mb-10">Haz clic en cada tarjeta para ver el detalle operativo.</p>

        <div className="space-y-3">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <div
                key={exp.id}
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                  isExpanded 
                    ? "bg-primary/5 border-2 border-primary/50" 
                    : "bg-secondary/30 border border-border/50 hover:border-border"
                )}
                onClick={() => setExpandedId(isExpanded ? null : exp.id)}
              >
                {/* Header */}
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${exp.iconBg} flex items-center justify-center`}>
                      <exp.icon className={`w-6 h-6 ${exp.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">{exp.subtitle}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>

                {/* Expanded Content */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-5 pb-5 pt-0">
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-foreground italic mb-4">"{exp.quote}"</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
