import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailPageProps {
  projectId?: string;
}

export function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: detailsRef, isVisible: detailsVisible } = useScrollAnimation();
  const { elementRef: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  // Mock project data - in a real app, you'd fetch this based on projectId
  const project = {
    id: "luxury-resort",
    title: "Luxury Mountain Resort",
    subtitle: "Bespoke hospitality website with booking integration",
    description: "A comprehensive digital experience for a luxury mountain resort featuring custom booking flows, interactive room galleries, and seamless content management integration.",
    longDescription: "This project showcased my expertise in translating high-end design concepts into pixel-perfect web experiences. Working closely with the resort's brand team, I hand-coded a sophisticated website that captures the essence of mountain luxury while maintaining optimal performance and accessibility standards.",
    year: "2023",
    client: "Alpine Luxury Resorts",
    team: ["Front-End Development", "Design Implementation", "CMS Integration"],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "SASS", "Figma"],
    features: [
      "Custom booking flow integration",
      "Interactive 360° room tours", 
      "Multi-language content support",
      "Performance optimized images",
      "ADA compliant accessibility",
      "Custom CMS implementation"
    ],
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600"
    ],
    liveUrl: "https://example-resort.com",
    codeUrl: null, // Private client work
    status: "Live"
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={heroRef as any}
            className={`transition-all duration-1000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Back Navigation */}
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>

            {/* Project Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {project.year} • {project.client}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {project.liveUrl && (
                  <Button size="lg" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Live Site
                  </Button>
                )}
                {project.codeUrl && (
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className={`skill-ombre-${Math.min((index % 5) + 1, 5)} transition-all duration-300 hover:scale-105`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-muted/30 to-muted/60 aspect-video">
              <ImageWithFallback
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={detailsRef as any}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Main Content */}
            <div 
              className={`lg:col-span-2 transition-all duration-1000 ${
                detailsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl mb-6 tracking-tight">
                    Project <span className="text-primary italic">Overview</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-4">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div 
                        key={index}
                        className={`skill-ombre-${Math.min((index % 5) + 1, 5)} rounded-lg px-4 py-3 text-sm transition-all duration-500 hover:scale-105 hover:shadow-sm`}
                        style={{
                          transitionDelay: detailsVisible ? `${index * 100}ms` : '0ms'
                        }}
                      >
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div 
              className={`space-y-6 transition-all duration-1000 ${
                detailsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: detailsVisible ? '200ms' : '0ms' }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Year</span>
                      </div>
                      <p className="font-medium">{project.year}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                        <Users className="w-4 h-4" />
                        <span>My Role</span>
                      </div>
                      <div className="space-y-1">
                        {project.team.map((role, index) => (
                          <Badge key={index} variant="outline" className="mr-1 mb-1">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Status</div>
                      <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={galleryRef as any}
            className={`transition-all duration-1000 ${
              galleryVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl mb-12 text-center tracking-tight">
              Project <span className="text-primary italic">Gallery</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div 
                  key={index}
                  className={`relative rounded-2xl overflow-hidden aspect-video bg-muted/30 transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                    galleryVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: galleryVisible ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-muted/30 to-accent/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl mb-4 tracking-tight">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let's discuss how I can help bring your next project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link to="/#projects">
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}