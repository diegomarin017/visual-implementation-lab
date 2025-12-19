import HeroSection from "@/components/cv/HeroSection";
import ValueProposition from "@/components/cv/ValueProposition";
import ObjectiveSection from "@/components/cv/ObjectiveSection";
import ExperienceTimeline from "@/components/cv/ExperienceTimeline";
import WorkflowSection from "@/components/cv/WorkflowSection";
import SkillsSection from "@/components/cv/SkillsSection";
import ContactSection from "@/components/cv/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <ObjectiveSection />
      <ExperienceTimeline />
      <WorkflowSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
