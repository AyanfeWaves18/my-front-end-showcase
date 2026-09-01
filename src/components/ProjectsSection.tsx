import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const featuredProjects = [
  {
    title: "Teal & Gold Mini Store",
    description:
      "A Mini E-Commerce web application featuring product browsing, shopping cart functionality, and a clean user interface for an elegant shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://teal-and-gold-mini-store.vercel.app/",
    image: "/projects/teal-gold.jpg",
  },
  {
    title: "Nike Rebrand",
    description:
      "A rebranded website concept for Nike, showcasing modern design principles and creative web development with a fresh take on the iconic brand.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://nike-rebrand-lemon.vercel.app/",
    image: "/projects/nike-rebrand.jpg",
  },
  {
    title: "Ayanfeoluwa Alalade — Portfolio Landing Page",
    description:
      "A dual-purpose landing page with a split-screen design that introduces both the creative and technical sides of my work, serving as a navigation hub to each discipline.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://ayanfeoluwa-alalade.vercel.app/",
    image: "/projects/ayanfeoluwa-alalade.jpg",
  },
  {
    title: "Ayanfe Dev — Developer Portfolio",
    description:
      "A dark-themed developer portfolio with an animated hero intro, numbered navigation, and sections for about, skills, projects, and contact.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://ayanfe-dev.vercel.app/",
    image: "/projects/ayanfe-dev.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading mb-12">Featured Projects</h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <div
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="relative group">
                  <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} landing page`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mb-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
