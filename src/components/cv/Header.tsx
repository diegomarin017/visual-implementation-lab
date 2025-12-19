import { useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm">
        <div>
          <h1 className="text-lg font-display font-bold text-foreground">Especialista IA</h1>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">Análisis de Procesos</p>
        </div>
        <button
          onClick={() => setIsContactOpen(true)}
          className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          Contactar
        </button>
      </header>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Header;
