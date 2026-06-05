import profilePhoto from "@/assets/profile-photo.jpg";
import Reveal from "./Reveal";

const AboutSection = () => {
  const coreTechnologies = ["HTML", "CSS", "JavaScript"];
  const learningTechnologies = ["React", "TypeScript"];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-12">About Me</h2>

        <Reveal className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Ayanfeoluwa, a frontend developer and
              freelance photographer based in Nigeria. I enjoy building beautiful,
              functional websites that deliver great user experiences.
            </p>
            <p>
              My journey into tech is rooted in a genuine interest that began in
              the classroom. From my first exposure to coding in secondary school,
              I knew I was drawn to the craft of building things with logic and
              creativity.
            </p>
            <p>
              Beyond the screen, I express my creativity through photography —
              capturing moments with the same attention to detail I bring to every
              line of code. Whether I'm crafting a responsive web application or
              shooting on location, I believe in creating work that tells a story.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {coreTechnologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>

            <p className="mt-4">But expanding my knowledge to learn:</p>

            <ul className="grid grid-cols-2 gap-2 mt-2">
              {learningTechnologies.map((tech) => (
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
                className="aspect-[3/4] w-full object-cover object-top transition-all duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-40 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
