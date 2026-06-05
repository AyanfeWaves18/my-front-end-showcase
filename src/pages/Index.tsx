import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ayanfeoluwa Alalade | Frontend Developer & Photographer</title>
        <meta
          name="description"
          content="Frontend Developer and freelance photographer based in Nigeria, building intuitive web experiences and capturing stories through the lens."
        />
        <meta
          name="keywords"
          content="frontend developer, web developer, photographer, HTML, CSS, JavaScript, React, Nigeria"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <SkillsSection />
          <ProjectsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
