import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Contacto
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
          ¿Hablamos?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Si buscas alguien que aplique IA de forma práctica en tu empresa, estoy listo para empezar.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:diegomarinfalcon@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover-lift"
          >
            <Mail className="w-5 h-5" />
            Escríbeme
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          
          <a
            href="tel:+34668633533"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-secondary border border-border text-foreground font-semibold hover:border-primary/50 transition-all duration-300 hover-lift"
          >
            <Phone className="w-5 h-5 text-primary" />
            +34 668 633 533
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Diego Marín Falcón · 2024 · CV Interactivo
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
