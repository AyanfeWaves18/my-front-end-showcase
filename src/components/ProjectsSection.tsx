import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and payment integration. Built with React, Redux, and Stripe API for seamless transactions.",
    technologies: ["React", "Redux", "Node.js", "Stripe", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces. Features include task assignments and progress tracking.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "📋",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that displays current conditions and forecasts. Includes location search, saved locations, and dynamic backgrounds based on weather conditions.",
    technologies: ["React", "Tailwind CSS", "Weather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "🌤️",
  },
];

const otherProjects = [
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers and designers.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    title: "Chrome Extension",
    description: "A productivity Chrome extension for managing bookmarks.",
    technologies: ["JavaScript", "Chrome API"],
    github: "https://github.com",
  },
  {
    title: "CLI Tool",
    description: "A command-line tool for scaffolding React projects.",
    technologies: ["Node.js", "Commander.js"],
    github: "https://github.com",
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
            <div
              key={project.title}
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
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <span className="text-6xl">{project.image}</span>
                    </div>
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
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
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-center text-xl font-semibold text-foreground mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
