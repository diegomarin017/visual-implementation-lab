import { XCircle, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Profile Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-muted-foreground/30 overflow-hidden bg-muted">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEBhUkIRkWvIg/profile-displayphoto-shrink_400_400/B4DZk.uuwTHsAg-/0/1757694062251?e=1767830400&v=beta&t=dCY0C5XOs0NV1P9GEKiShIXBIL-MYHENPEZhwT6DEJ4"
                alt="Diego Marín Falcón"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            No necesitas más código.
            <br />
            Necesitas <span className="text-primary">mejores procesos.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ayudo a empresas sin departamento de IA a analizar su caos interno,
            detectar ineficiencias y aplicar soluciones tecnológicas prácticas para
            desbloquear proyectos.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          {/* Situación Actual */}
          <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-5 h-5 text-destructive" />
              <h3 className="font-display font-semibold text-destructive">Situación Actual</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>Tareas repetitivas que queman al equipo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>Procesos manuales sin documentar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>"Queremos usar IA pero no sabemos cómo".</span>
              </li>
            </ul>
          </div>

          {/* Mi Aportación */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h3 className="font-display font-semibold text-primary">Mi Aportación</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Análisis y detección de cuellos de botella.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Implementación de IA de bajo coste y alto impacto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ejecución inmediata y desbloqueo operativo.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
