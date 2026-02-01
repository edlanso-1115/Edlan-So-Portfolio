import ScrollReveal from "@/components/ScrollReveal";
import { Tag } from "lucide-react";

type Course = {
  code: string;
  title: string;
  term?: string;
  description?: string;
  tags?: string[];
};

const courses: Course[] = [
  {
    code: "NE 113",
    title: "Introduction to Computational Methods",
    term: "Winter 2024",
    description: "Numerical methods: Taylor-series summations, roots of equations, roots of polynomials, direct and indirect solution methods for systems of linear, and nonlinear algebraic equations, integration.",
    tags: ["Matlab", "Python"],
  },
  {
    code: "NE 140",
    title: "Linear Circuits",
    term: "Winter 2024",
    description: "Nodal, mesh analysis, transient and steady-state response of circuits, and frequency response, capacitance and inductance, AC and DC circuits, phasors, and complex impedance.",
    tags: ["Ciruits", "Electronics"],
  },
  {
    code: "NE 241",
    title: "Electromagnetism",
    term: "Fall 2024",
    description: "Coulomb's law, Gauss's law, Coulomb's law, electric field and electric flux, Gauss's law, magnetic field and flux, Ampere's law, induction, Lenz' law, Faraday's law, Maxwell's equations, electromagnetic fields and waves.",
    tags: ["Electronics", "Fields & Waves"],
  },
  {
    code: "NE 242",
    title: "Semiconductors Physics and Devices",
    term: "Summer 2025",
    description: "Electronic band structure, charge carriers, doping, carrier transport, pn-junctions, metal-oxide-semiconductor capacitors, and diodes.",
    tags: ["Semiconductor", "Electronics"],
  },
  {
    code: "NE 225",
    title: "Structures and Properties of Nanomaterials",
    term: "Summer 2025",
    description: "Electronic orbitals in atoms, molecules and the solid state. Structures and properties of covalent and ionic solid nanoparticles including their catalytic, electrochemical, electrical, optical and magnetic properties.",
    tags: ["Chemistry", "Quantum"],
  },
  {
    code: "NE 226",
    title: "Characterization of Nanomaterials",
    term: "Summer 2025",
    description: "Materials structure analysis. Materials composition and chemical bonding analysis. In-situ analysis and monitoring of fabrication process parameters. Materials properties characterization.",
    tags: ["Spectroscopy", "Materials"],
  },
  
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 px-4 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal animation="fade-in-down" className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Selected Courses</h2>
          <p className="text-sm text-muted-foreground/90 text-center mt-2">
            Relevant coursework highlighting skills and domain knowledge.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((c) => (
            <ScrollReveal key={c.code} animation="fade-in-up">
              <div className="p-4 rounded-lg border border-border bg-background shadow-sm h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-foreground font-medium">{c.code}</div>
                    <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                    {c.term && (
                      <div className="text-xs text-muted-foreground mt-1">{c.term}</div>
                    )}
                  </div>
                  <div className="text-muted-foreground/80">
                    <Tag size={18} />
                  </div>
                </div>

                {c.description && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                )}

                {c.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}