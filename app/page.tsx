import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import MetricsBanner from "@/components/MetricsBanner/MetricsBanner";
import { SkillsTabs } from "@/components/SkillsTabs/SkillsTabs";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import EducationGrid from "@/components/EducationGrid/EducationGrid";
import ContactCTA from "@/components/ContactCTA/ContactCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <Hero />
      <About />
      <MetricsBanner />
      <SkillsTabs />
      <ProjectsGrid />
      <ExperienceSection />
      <EducationGrid />
      <ContactCTA />
      <Footer />
    </main>
  );
}
