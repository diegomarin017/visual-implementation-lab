const skills = [
  "Análisis de Procesos",
  "IA No-Code",
  "Resolución de Problemas",
  "Automatización",
  "Liderazgo de Equipos Pequeños",
  "Gestión de Proyectos",
  "Mentalidad de Ejecución",
];

const SkillsObjectiveSection = () => {
  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Competencias Clave */}
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Competencias Clave</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-foreground text-sm hover:border-border transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Objetivo */}
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Objetivo</h2>
            <div className="border-l-2 border-primary/50 pl-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Busco incorporarme a una empresa para analizar procesos internos e implementar soluciones prácticas con inteligencia artificial.
              </p>
              <p className="text-foreground">
                <span className="font-semibold">Mi meta:</span>{" "}
                <span className="text-muted-foreground">
                  Empezar por tareas de alto impacto y baja complejidad para demostrar valor desde la primera semana.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsObjectiveSection;
