// ...existing code...
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-card border-t border-border relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-in-down" className="mb-12">
          <h2 className="text-4xl font-bold text-center">About Me</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Highlight card (replaces profile image) */}
          <ScrollReveal animation="fade-in-left">
            <div className="p-6 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl border border-border shadow-sm">
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-md px-3 py-1 bg-foreground/10 text-foreground text-sm font-semibold">Nanotechnology Engineering • UWaterloo</div>
                <h3 className="text-2xl font-bold">Edlan So</h3>
                <p className="text-sm text-muted-foreground">
                  2B Nanotechnology Engineering student with experience in materials science, electrochemistry, and lab research. Interested in clean energy, advanced materials, and digital healthcare workflows.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">Materials Science</span>
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">Lab Research</span>
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">Software / AI</span>
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">IT</span>
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">Data Analysis</span>
                  <span className="text-xs px-2 py-1 bg-background/60 rounded-full border border-border">Electrical Engineering</span>
                </div>

                <div className="mt-4 w-full">
                  <div className="text-xs text-muted-foreground">Currently</div>
                  <div className="text-sm font-medium">CPOE Project Assistant — Oak Valley Health</div>
                </div>

                <div className="mt-6 flex gap-3">
  <a
    href="#contact"
    className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-border text-sm text-muted-foreground hover:bg-background transition"
  >
    Contact
  </a>
</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal animation="fade-in-right">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on applying experimental science and data analysis to real-world problems — from optimizing surface treatments and catalyst prep to extracting insights using Python and Excel. I have hands-on lab experience with microplastic filtration, UV-Vis spectroscopy, particle counting, and adsorption isotherm modelling.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My work in healthcare IT has strengthened my communication and problem-solving skills while working with cross-functional teams to deliver high-impact systems and smooth digital workflows.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground">Work Terms Experience</div>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-foreground">~10</div>
                  <div className="text-sm text-muted-foreground">Programming Languages</div>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Lab Equipment</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
// ...existing code...