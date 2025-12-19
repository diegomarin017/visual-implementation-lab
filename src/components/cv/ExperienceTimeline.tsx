import { useState } from "react";
import { ChevronDown, Trophy, Users, Briefcase, Brain, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  period?: string;
  highlights: string[];
  achievements?: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: "robotics",
    icon: Trophy,
    title: "Competiciones de Robótica",
    subtitle: "FLL & WRO",
    highlights: [
      "Desarrollo de soluciones robóticas aplicadas a problemas reales",
      "Trabajo en equipos de 3-4 personas por proyecto",
      "Premios regionales y nacionales en FLL",
      "Campeón de España en dos ocasiones (WRO)",
      "Competición internacional en Tallin (Estonia) y Hungría",
    ],
    achievements: [
      { label: "Campeonatos España", value: "2x" },
      { label: "Internacionales", value: "2" },
    ],
  },
  {
    id: "leinn",
    icon: Users,
    title: "LEINN",
    subtitle: "Liderazgo, Innovación y Emprendimiento",
    period: "2 años",
    highlights: [
      "Desarrollo de proyectos reales en equipo (3-4 personas)",
      "Organización de 4 eventos deportivos de pádel",
      "Creación de una agencia de IA orientada a soluciones prácticas",
      "Gestión integral de un bar: sala, cocina, barra y proveedores",
      "Rol de gestión, no solo operativo",
    ],
    achievements: [
      { label: "Eventos organizados", value: "4" },
      { label: "Último evento", value: "+100" },
    ],
  },
  {
    id: "telepizza",
    icon: Briefcase,
    title: "Repartidor",
    subtitle: "Telepizza",
    highlights: [
      "Trabajo en entornos de alta presión",
      "Gestión de tiempos y rutas",
      "Cumplimiento de objetivos diarios",
      "Responsabilidad operativa directa",
    ],
  },
  {
    id: "ia",
    icon: Brain,
    title: "Inteligencia Artificial",
    subtitle: "Uso Práctico (en curso)",
    highlights: [
      "Formación continua en IA aplicada a productividad",
      "Análisis y documentación de procesos",
      "Automatización de tareas repetitivas",
      "Apoyo a toma de decisiones y ejecución",
      "Enfoque no técnico: aplicación práctica sin código",
    ],
  },
];

const ExperienceTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>("robotics");

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Experiencia y Proyectos
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-16">
                {/* Timeline dot */}
                <div className={cn(
                  "absolute left-4 w-5 h-5 rounded-full border-2 transition-all duration-300",
                  expandedId === exp.id 
                    ? "bg-primary border-primary glow-effect" 
                    : "bg-background border-primary/50"
                )} />

                {/* Card */}
                <div 
                  className={cn(
                    "card-glass rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                    expandedId === exp.id && "glow-effect"
                  )}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  {/* Header */}
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                        expandedId === exp.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}>
                        <exp.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {exp.subtitle && <span>{exp.subtitle}</span>}
                          {exp.period && (
                            <>
                              <span>·</span>
                              <span className="text-primary">{exp.period}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      expandedId === exp.id && "rotate-180"
                    )} />
                  </div>

                  {/* Expanded content */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    expandedId === exp.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="px-5 pb-5 pt-0">
                      {/* Achievements */}
                      {exp.achievements && (
                        <div className="flex gap-4 mb-4">
                          {exp.achievements.map((ach) => (
                            <div key={ach.label} className="flex-1 p-3 rounded-lg bg-secondary/50 text-center">
                              <div className="stat-number text-2xl">{ach.value}</div>
                              <div className="text-xs text-muted-foreground mt-1">{ach.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
