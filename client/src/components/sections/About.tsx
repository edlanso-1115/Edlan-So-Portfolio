import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-card border-t border-border relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-in-down" className="mb-12">
          <h2 className="text-4xl font-bold text-center">About Me</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <ScrollReveal animation="fade-in-left">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground">Profile Image</span>
            </div>
          </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="fade-in-right">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless user
              experiences backed by robust server-side logic.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a
              professional career spanning several years. I love solving complex problems and continuously
              learning new technologies to stay ahead in this fast-paced industry.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

