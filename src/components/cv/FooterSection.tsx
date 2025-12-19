import { useState } from "react";
import { MessageSquare } from "lucide-react";
import ContactModal from "./ContactModal";

const FooterSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            ¿Hablamos de cómo optimizar tu empresa?
          </h2>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Contactar Ahora
          </button>
          
          <p className="mt-12 text-sm text-muted-foreground">
            Diseñado con mentalidad de producto. 2025.
          </p>
        </div>
      </section>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default FooterSection;
