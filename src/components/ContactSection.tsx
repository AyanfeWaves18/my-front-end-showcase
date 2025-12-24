import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/AyanfeWaves18", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ayanfeoluwa-alalade-34b759362/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ayanfeoluwaalalade2000@gmail.com", label: "Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-16">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
