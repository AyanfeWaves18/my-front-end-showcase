import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ayanfeoluwa Alalade | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer based in Nigeria, building intuitive and responsive web experiences with HTML, CSS, and JavaScript."
        />
        <meta
          name="keywords"
          content="frontend developer, web developer, HTML, CSS, JavaScript, React, Nigeria"
        />
        <meta property="og:title" content="Ayanfeoluwa Alalade | Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Developer based in Nigeria, building intuitive and responsive web experiences with HTML, CSS, and JavaScript."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
