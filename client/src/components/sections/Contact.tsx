import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "e5so@uwaterloo.ca",
      href: "mailto:e5so@uwaterloo.ca",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (647) 676-7026",
      href: "tel:+16476767026",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "GTA / Markham / Waterloo",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-background text-foreground relative"
    >
      {/* Background elements (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-in-down" className="mb-4">
          <h2 className="text-4xl font-bold text-center text-foreground">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={100}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. Send me a message and I'll
            respond as soon as possible.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="group"
              >
                <Card className="border-border hover:border-accent/50 transition-all h-full bg-card">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Icon className="text-foreground" size={24} />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1 text-foreground">{info.label}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <ScrollReveal animation="scale-in" delay={200}>
          <Card className="border-border max-w-2xl mx-auto bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Send Me a Message</CardTitle>
              <CardDescription className="text-muted-foreground">Fill out the form below and I'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2 bg-accent text-accent-foreground hover:opacity-95"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal animation="fade-in-up" delay={300}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/edlanso-1115"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/edlan-so"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:e5so@uwaterloo.ca"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

