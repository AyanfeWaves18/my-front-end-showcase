const AboutSection = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm John, a passionate front-end developer based in San
              Francisco. I enjoy creating things that live on the internet,
              whether that be websites, applications, or anything in between.
            </p>
            <p>
              My interest in web development started back in 2015 when I decided
              to try editing custom Tumblr themes — turns out hacking together a
              custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a
              start-up, a huge corporation, and a student-led design studio. My
              main focus these days is building accessible, inclusive products
              and digital experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="aspect-square bg-secondary flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
