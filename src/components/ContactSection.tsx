import { useState } from "react";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "https://github.com/AyanfeWaves18", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ayanfeoluwa-alalade-34b759362/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:ayanfeoluwaalalade2000@gmail.com", label: "Email" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email is too long" }),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Message cannot be empty" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please fix the form",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: result.data,
      });

      if (error) {
        const details =
          error instanceof FunctionsHttpError ? await error.context.text() : error.message;
        console.error("send-contact-email failed:", details);
        throw new Error("send failed");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll reply as soon as I can.",
      });
      setForm({ name: "", email: "", message: "", website: "" });
    } catch {
      toast({
        title: "Couldn't send your message",
        description:
          "Something went wrong. Please email me directly at ayanfeoluwaalalade2000@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-mono text-primary mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          I'm currently open to new opportunities — frontend gigs, photography
          bookings, or just a friendly hello. Drop a message below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="text-left space-y-5 bg-card/50 border border-border rounded-lg p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">01.</span> Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">02.</span> Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                maxLength={255}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">03.</span> Message
            </Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              rows={5}
              maxLength={1000}
              required
            />
          </div>
          <Button type="submit" variant="glow" size="lg" className="w-full sm:w-auto">
            <Send size={16} /> Send Message
          </Button>
        </form>

        <div className="flex justify-center gap-6 mt-12">
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
