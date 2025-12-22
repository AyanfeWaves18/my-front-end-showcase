import { Code2, Palette, Terminal, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, TypeScript, and modern CSS frameworks.",
    technologies: ["React", "TypeScript", "Next.js", "Vue.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive user interfaces with a focus on user experience and accessibility.",
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Storybook"],
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    description:
      "Proficient with modern development workflows, version control, and testing frameworks.",
    technologies: ["Git", "Webpack", "Vite", "Jest"],
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing web applications for speed, SEO, and core web vitals.",
    technologies: ["Lighthouse", "Web Vitals", "Lazy Loading", "Code Splitting"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
