import Header from "@/components/cv/Header";
import HeroSection from "@/components/cv/HeroSection";
import WorkflowSection from "@/components/cv/WorkflowSection";
import ExperienceTimeline from "@/components/cv/ExperienceTimeline";
import SkillsObjectiveSection from "@/components/cv/SkillsObjectiveSection";
import FooterSection from "@/components/cv/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkflowSection />
      <ExperienceTimeline />
      <SkillsObjectiveSection />
      <FooterSection />
    </main>
  );
};

export default Index;
