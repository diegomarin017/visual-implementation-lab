const skillGroups = [
  {
    title: "Implementación IA",
    skills: ["Análisis de procesos", "Detección de ineficiencias", "Automatización práctica", "Herramientas de IA", "Sin código"],
  },
  {
    title: "Gestión y Liderazgo",
    skills: ["Coordinación de equipos", "Gestión de proyectos", "Toma de decisiones", "Organización de eventos", "Responsabilidad operativa"],
  },
  {
    title: "Mentalidad",
    skills: ["Orientación a resultados", "Pensamiento estructurado", "Aprendizaje rápido", "Autonomía", "Trabajo bajo presión"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Competencias
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Lo que aporto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.title} className="text-center md:text-left">
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ animationDelay: `${(groupIndex * 5 + skillIndex) * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
