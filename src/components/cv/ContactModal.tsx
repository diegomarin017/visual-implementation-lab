import { X, User, Calendar, Phone, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md p-0 gap-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-2 border-primary/50 overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEBhUkIRkWvIg/profile-displayphoto-shrink_400_400/B4DZk.uuwTHsAg-/0/1757694062251?e=1767830400&v=beta&t=dCY0C5XOs0NV1P9GEKiShIXBIL-MYHENPEZhwT6DEJ4"
                  alt="Diego Marín Falcón"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-foreground mb-1">Ficha Técnica</h2>
          <p className="text-muted-foreground text-sm mb-8">Información de contacto directa</p>

          {/* Contact Info Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Nombre</p>
                <p className="text-foreground font-medium">Diego Marín Falcón</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Edad</p>
                <p className="text-foreground font-medium">20 años</p>
              </div>
            </div>

            <a 
              href="tel:+34668633533"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Teléfono</p>
                <p className="text-foreground font-medium">+34 668 633 533</p>
              </div>
            </a>

            <a 
              href="mailto:diegomarinfalcon@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Gmail</p>
                <p className="text-foreground font-medium">diegomarinfalcon@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
