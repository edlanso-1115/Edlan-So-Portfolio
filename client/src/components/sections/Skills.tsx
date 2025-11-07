import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    category: "Coding & Frameworks",
    skills: ["Python", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "GitHub", "VS Code", "Terminal", "Jupyter Notebook", "Pygame" ],
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["SQL", "MySQL", "MatLab", "Python", "Pandas", "Matplotlib", "Excel (Power Query, Macros)", "Power BI"],
  },
  {
    category: "CAD & Simulation",
    skills: ["SolidWorks", "Blender", "Adobe 3D", "SketchUp", "Canva"],
  },
  {
    category: "Electrical & Electronics",
    skills: ["Circuit Analysis", "Oscillator", "Digital Multimeter", "Function Generator", "Power Supply", "Semiconductor Devices", "Oscilloscope"],
  },
  {
    category: "Chemistry & Materials",
    skills: ["UV-vis", "Probe Sonicator", "Homogenizer", "Particle Size Analyzer", "Particle Counter", "Rheometer", "FTIR Spectroscopy", "Raman Spectroscopy", "Ellipsometry", "SEM", "X-ray Diffraction", "Impact and Tensile Tester", "Differential Scanning Calorimetry", "Thermal Gravimetric Analysis", "Atomic Force Microscopy", "Transmission Electron Microscopy"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Collaboration", "Project Management", "Mutilingual (English, Cantonese, Mandarin)", "Self-learning", "Time Management", "Project Management", "Creativity"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-background relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal animation="fade-in-down" className="mb-12">
          <h2 className="text-4xl font-bold text-center">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => (
            <Card key={category.category} className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-foreground rounded-full text-sm font-medium border border-foreground/20 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

