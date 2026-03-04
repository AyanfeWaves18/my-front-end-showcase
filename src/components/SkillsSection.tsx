import { Code2, Palette, Terminal, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "HTML & Structure",
    description:
      "Building semantic, accessible markup that forms the foundation of every great web experience.",
    technologies: ["HTML5", "Semantic Elements", "Accessibility", "SEO"],
  },
  {
    icon: Palette,
    title: "CSS & Styling",
    description:
      "Crafting beautiful, responsive designs with modern CSS techniques and frameworks.",
    technologies: ["CSS3", "Flexbox", "Grid", "Animations"],
  },
  {
    icon: Terminal,
    title: "JavaScript",
    description:
      "Writing clean, efficient JavaScript to create dynamic and interactive user experiences.",
    technologies: ["ES6+", "DOM Manipulation", "APIs", "Async/Await"],
  },
  {
    icon: Zap,
    title: "React & Modern Tools (Exploring)",
    description:
      "Currently expanding my skill set by exploring component-based development with React and TypeScript.",
    technologies: ["React", "TypeScript", "Git"],
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
