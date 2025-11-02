import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import AnimatedCard from "@/components/AnimatedCard";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills with a modern design.",
    tags: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
    image: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    link: "#",
    github: "#",
  },
  
  {
    id: 2,
    title: "Python Game Project",
    description: "Modified Tetris game using Pygame with different gamerules, added features and improved graphics.",
    tags: ["Python", "Pygame", "NumPy", "Pandas"],
    image: "bg-gradient-to-br from-green-500/20 to-green-600/20",
    link: "#",
    github: "#",
  },
  
];

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-card border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-down">Featured Projects</h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? "bg-accent text-accent-foreground"
                : "bg-background border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={project.id}
              className={`animate-stagger-${(index % 5) + 1}`}
            >
              <Card className="overflow-hidden border-border hover:border-accent/50 transition-all hover:shadow-lg h-full">
                {/* Project Image */}
                <div className={`h-40 ${project.image} border-b border-border flex items-center justify-center`}>
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-background text-xs rounded border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        View
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

