import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[] | string;
  links?: { label: string; href: string }[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "CPOE Project Assistant",
    company: "Oak Valley Health - Markham Stouffville Hospital",
    period: "September 2025 - Present",
    description: [
      "Support the Meditech CPOE/Web Ambulatory system by assisting staff, documenting issues, troubleshooting, and helping deployment through training, documentation, and system implementation.",
      "Customize and maintained Acorn CPOE website components using HTML, CSS, and JavaScript, ensuring accurate information display and improved usability.",
      "Create process flowcharts and technical diagrams in Microsoft Visio to support documentation and communication across teams.",
    ],
  },
  {
    id: 2,
    title: "Lab Research Assistant - Microplastic Filtration",
    company: "University of Waterloo - Quantum Nano Cenre",
    period: "January 2025 - April 2025",
    description: [
      "Conducted literature review to support experimental design on microplastic (MP) filtration methods and membrane performance.",
      "Prepared wood fiber filters by optimizing surfactant (eg. SDBS, CTAB, Urea), blend, and crosslinker compositions (eg. PEI); created fully dispersed MP solutions using homogenization techniques.",
      "Collected and analyzed data on filtration efficiency using particle counters and UV-Vis spectroscopy; applied adsorption isotherm models using Python.",
      "Collaborated on related emulsion studies using probe sonicator, particle size analyzer, and rheometer.",
      "Presented project background and methodology to faculty and researchers.",
    ],
    links: [
      { label: "Presenation Slide", href: "https://docs.google.com/presentation/d/1pJKXPQDxpKcRVyE-2a58qPy65BP8XiU-jIH_KcX_Kc0/edit?slide=id.p1#slide=id.p1" },
      { label: "Images", href: "/Edlan-So-Portfolio/images/Lab.png" },
    ]
  },
  {
    id: 3,
    title: "School Office Assistant",
    company: "Baptist Lui Ming Choi Secondary School",
    period: "June 2024 - August 2024",
    description: [
      "Managed the entry and organization of student records for both current and incoming students, ensuring data accuracy and confidentiality within the school's internal system.",
      "Coordinated and prepared documentation for the Year-End Ceremony, contributing to the successful execution of the event using Microsoft Excel and Word for scheduling and report creation.",
      "Assisted students through the appeals process for the Hong Kong Diploma of Secondary Education (HKDSE) examinations, providing clear communication and administrative support throughout.",
    ],
  },
  {
    id: 4,
    title: "Medical Research Assistant",
    company: "University of Waterloo - Remote",
    period: "May 2024 - August 2024",
    description: [
      "Successfully completed the AZ-900 (Microsoft Azure Fundamentals) certification, demonstrating foundational knowledge of cloud concepts, Azure services, and Azure privacy, and pricing models.",
      "Passed the AI-900 (Azure AI Fundamentals) exam, showcasing understanding of artificial intelligence and machine learning concepts.",
      "Actively contributed to a Medical Research Assistant project, focusing on assessing the effectiveness of medical technologies, quantifiable impacts and ethical considerations, applying NLP and LLM.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-background relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-in-down" className="mb-12">
          <h2 className="text-4xl font-bold text-center">Work Experience</h2>
        </ScrollReveal>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} animation="fade-in-up" delay={index * 100}>
              <div className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-accent to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-border">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base text-foreground font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {Array.isArray(exp.description) ? (
                          exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-accent">•</span>
                              {item}
                            </li>
                          ))
                        ) : (
                          <li className="text-sm text-muted-foreground">{exp.description}</li>
                        )}
                      </ul>
                      {exp.links && exp.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1 text-sm rounded-md border border-border bg-background hover:bg-accent/5 transition"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

