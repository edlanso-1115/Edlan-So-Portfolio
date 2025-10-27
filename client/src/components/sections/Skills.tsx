import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "GitHub Actions"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Leadership", "Project Management", "Mentoring", "Agile"],
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
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Technical Proficiency</h3>
            {[
              { name: "Frontend Development", level: 95 },
              { name: "Backend Development", level: 85 },
              { name: "Database Design", level: 80 },
              { name: "DevOps & Deployment", level: 75 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-card rounded-full h-2 border border-border overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-accent to-accent/60 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Industry Experience</h3>
            {[
              { name: "E-commerce Platforms", level: 90 },
              { name: "SaaS Applications", level: 88 },
              { name: "Mobile Apps", level: 82 },
              { name: "Real-time Applications", level: 78 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-card rounded-full h-2 border border-border overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-accent to-accent/60 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

