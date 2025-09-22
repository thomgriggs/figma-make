import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowUpRight, Calendar, Users, Archive } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getFeaturedProjects, getClientProjects } from "./data/projects";

export function Projects() {
  // Get real projects from archive data
  const featuredProjects = getFeaturedProjects();
  const clientProjects = getClientProjects();
  
  // Show first 2 featured projects and 4 recent client projects
  const displayFeaturedProjects = featuredProjects.slice(0, 2);
  const displayClientProjects = clientProjects.slice(0, 4);

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm text-muted-foreground mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Selected <span className="text-primary italic">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A curated selection from 258+ hospitality websites, showcasing hand-coded craftsmanship, 
            custom interactions, and pixel-perfect Figma-to-code translation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {displayFeaturedProjects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border">
                  <ImageWithFallback
                    src={project.image || ''}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-foreground">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Featured Project</span>
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.urlPath && project.urlPath !== '#' && (
                    <Button asChild className="group">
                      <a href={project.urlPath} target="_blank" rel="noopener noreferrer">
                        Live Project
                        <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                  <Link to={`/project/${project.id}`}>
                    <Button variant="outline" className="group">
                      View Case Study
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Client Projects Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Recent Client Work</h3>
            <p className="text-muted-foreground">Latest projects from my hospitality development portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {displayClientProjects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image || ''}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-2 py-1">
                    <span className="text-xs font-medium text-foreground">{project.category}</span>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {project.urlPath && project.urlPath !== '#' && (
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.urlPath} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Visit Live Site
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 space-y-6">
          <div className="bg-gradient-to-r from-muted/30 to-accent/30 rounded-2xl p-8">
            <p className="text-muted-foreground mb-6">
              This is just a sample of my work—view my complete project archive with 258+ hospitality websites 
              or get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/archive">
                <Button size="lg" variant="outline" className="group">
                  <Archive className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Complete Archive
                </Button>
              </Link>
              <Button size="lg" asChild>
                <a href="#contact">
                  Get In Touch
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}