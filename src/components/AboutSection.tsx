import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "React",
    "TypeScript",
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Ayanfeoluwa, a passionate frontend developer based in
              Nigeria. I enjoy creating things that live on the internet,
              whether that be websites, applications, or anything in between.
            </p>
            <p>
              My journey into tech is rooted in a genuine interest that began in
              the classroom. From my first exposure to coding in secondary school,
              I knew I was drawn to the craft of building things with logic and
              creativity.
            </p>
            <p>
              As a frontend developer, I've honed that early fascination into a
              focused skill set, creating dynamic and responsive web applications.
              I believe in writing purposeful code that makes the web more
              intuitive and accessible.
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
              <img
                src={profilePhoto}
                alt="Ayanfeoluwa Alalade"
                className="aspect-square w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-40 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
