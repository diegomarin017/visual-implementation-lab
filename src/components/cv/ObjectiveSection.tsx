import { ArrowRight, CheckCircle2 } from "lucide-react";

const objectives = [
  "Analizar procesos internos de la empresa",
  "Identificar oportunidades de mejora con IA",
  "Implementar soluciones de alto impacto y baja complejidad",
  "Validar resultados en ahorro de tiempo y eficiencia",
];

const ObjectiveSection = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Objetivo profesional
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Incorporarme a una empresa{" "}
              <span className="gradient-text">sin departamento de IA</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Para analizar procesos internos, identificar oportunidades de mejora e implementar soluciones prácticas con herramientas de inteligencia artificial.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Mi plan de acción
            </h3>
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {index + 1}
                </div>
                <p className="text-foreground">{objective}</p>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
