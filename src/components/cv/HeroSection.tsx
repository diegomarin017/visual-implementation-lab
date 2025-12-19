import { Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float delay-300" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEBhUkIRkWvIg/profile-displayphoto-shrink_400_400/B4DZk.uuwTHsAg-/0/1757694062251?e=1767830400&v=beta&t=dCY0C5XOs0NV1P9GEKiShIXBIL-MYHENPEZhwT6DEJ4"
              alt="Diego Marín Falcón"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/50 shadow-lg"
            />
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 opacity-0 animate-fade-in-up">
          Diego Marín Falcón
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-fade-in-up delay-100">
          Especialista en
        </p>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold gradient-text mb-8 opacity-0 animate-fade-in-up delay-200">
          Implementación de IA
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-300">
          Análisis de Procesos · Desbloqueo de Proyectos · Ahorro de Tiempo
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-0 animate-fade-in-up delay-400">
          <a 
            href="mailto:diegomarinfalcon@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">diegomarinfalcon@gmail.com</span>
          </a>
          
          <a 
            href="tel:+34668633533" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+34 668 633 533</span>
          </a>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">20 años</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-500">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
