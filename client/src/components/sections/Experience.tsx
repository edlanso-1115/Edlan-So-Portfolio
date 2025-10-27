import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Lead development of multiple full-stack applications, mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Designed and implemented microservices architecture",
      "Reduced API response time by 40%",
      "Mentored 5+ junior developers",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing web applications using React and Node.js.",
    achievements: [
      "Built 10+ production applications",
      "Improved code quality with automated testing",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Agency Co.",
    period: "2018 - 2020",
    description: "Created responsive and interactive user interfaces for various web projects.",
    achievements: [
      "Developed responsive designs for 20+ projects",
      "Optimized website performance by 50%",
      "Led frontend team of 3 developers",
    ],
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2017 - 2018",
    description: "Assisted in development of web applications and learned full-stack development practices.",
    achievements: [
      "Built first full-stack application",
      "Contributed to open-source projects",
      "Completed advanced training programs",
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
                          <CardDescription className="text-base text-accent font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-accent">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
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

