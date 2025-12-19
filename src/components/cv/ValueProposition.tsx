import { Target, Zap, TrendingUp, Puzzle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Detecto ineficiencias",
    description: "Analizo procesos para encontrar cuellos de botella y tareas que consumen tiempo innecesario.",
  },
  {
    icon: Puzzle,
    title: "Desbloqueo proyectos",
    description: "Transformo proyectos parados en acciones concretas usando herramientas de IA.",
  },
  {
    icon: Zap,
    title: "Ahorro tiempo real",
    description: "Implemento soluciones prácticas que liberan horas de trabajo repetitivo.",
  },
  {
    icon: TrendingUp,
    title: "Sin código, con resultados",
    description: "Aplicación práctica de IA sin necesidad de desarrollo técnico complejo.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mi propuesta de valor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            ¿Qué puedo hacer por tu empresa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ideal para empresas sin departamento de IA que quieren empezar a aplicarla de forma práctica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="value-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
