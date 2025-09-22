import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, ExternalLink, MapPin, Users, Briefcase, Star, Filter, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useMemo } from "react";
import { getAllProjects, getFeaturedProjects, getClientProjects, getPersonalProjects, ArchiveProject } from "./data/projects";

export function ArchivePage() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: archiveRef, isVisible: archiveVisible } = useScrollAnimation();

  // Filter state
  const [filters, setFilters] = useState({
    year: 'all',
    category: 'all',
    technology: 'all',
    industry: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(24);

  // Use shared project data
  const archiveProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();
  const allClientProjects = getClientProjects();
  const personalProjects = getPersonalProjects();

  // Filter options derived from data
  const filterOptions = useMemo(() => {
    const years = [...new Set(allClientProjects.map(p => p.year))].sort((a, b) => parseInt(b) - parseInt(a));
    const categories = [...new Set(allClientProjects.map(p => p.category))].sort();
    const technologies = [...new Set(allClientProjects.flatMap(p => p.technologies))].sort();
    const industries = ['Hospitality', 'Boutique Hotels', 'Other'];

    return { years, categories, technologies, industries };
  }, [allClientProjects]);

  // Filtered client projects
  const filteredClientProjects = useMemo(() => {
    return allClientProjects.filter(project => {
      if (filters.year !== 'all' && project.year !== filters.year) return false;
      if (filters.category !== 'all' && project.category !== filters.category) return false;
      if (filters.industry !== 'all' && project.category !== filters.industry) return false;
      if (filters.technology !== 'all' && !project.technologies.includes(filters.technology)) return false;
      return true;
    });
  }, [allClientProjects, filters]);

  const clientProjects = filteredClientProjects;

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "258+" },
    { label: "Live Websites", value: archiveProjects.filter(p => p.status === 'live').length },
    { label: "Industries Served", value: "8+" }
  ];

  // Filter functions
  const updateFilter = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setProjectsToShow(24); // Reset pagination when filtering
  };

  const clearFilters = () => {
    setFilters({
      year: 'all',
      category: 'all',
      technology: 'all',
      industry: 'all'
    });
    setProjectsToShow(24);
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all');

  const FilterDropdown = ({ 
    label, 
    value, 
    options, 
    onChange, 
    type 
  }: { 
    label: string; 
    value: string; 
    options: string[]; 
    onChange: (value: string) => void;
    type: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 min-w-[120px] ${
            value !== 'all' 
              ? 'bg-primary text-primary-foreground border-primary' 
              : 'bg-background border-border hover:bg-muted/50'
          }`}
        >
          <span className="truncate mr-2">
            {value === 'all' ? label : value}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-10 min-w-[200px] animate-fade-in-up">
            <div className="p-2 max-h-64 overflow-y-auto">
              <button
                onClick={() => {
                  onChange('all');
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  value === 'all' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                All {label}
              </button>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    value === option 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {option} {type === 'year' && `(${allClientProjects.filter(p => p.year === option).length})`}
                  {type === 'category' && `(${allClientProjects.filter(p => p.category === option).length})`}
                  {type === 'technology' && `(${allClientProjects.filter(p => p.technologies.includes(option)).length})`}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const ProjectCard = ({ project, index }: { project: ArchiveProject; index: number }) => (
    <Card 
      className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        archiveVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: archiveVisible ? `${index * 100}ms` : '0ms'
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge 
                variant={project.type === 'featured' ? 'default' : 'secondary'}
                className={`${
                  project.type === 'featured' ? 'bg-primary' : 
                  project.type === 'client' ? 'skill-ombre-2' : 'skill-ombre-4'
                } text-xs`}
              >
                {project.type === 'featured' && <Star className="w-3 h-3 mr-1" />}
                {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
              </Badge>
              <Badge 
                variant={project.status === 'live' ? 'default' : 'outline'}
                className={`text-xs ${
                  project.status === 'live' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'border-muted-foreground/30'
                }`}
              >
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
              {project.title}
            </h3>
            
            <div className="text-sm text-muted-foreground mb-2 space-y-1">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-3 h-3" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
          
          {project.image && (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0 ml-4">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="space-y-3">
          <div>
            <div className="text-xs text-muted-foreground mb-2">Technologies</div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className={`skill-ombre-${Math.min((idx % 5) + 1, 5)} text-xs`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {project.type === 'featured' && (
          <div className="mt-4 pt-4 border-t border-border">
            <Link to={`/project/${project.id}`}>
              <Button size="sm" className="w-full group/btn">
                <span>View Case Study</span>
                <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        )}

        {project.urlPath && project.urlPath !== '#' && (
          <div className="mt-4 pt-4 border-t border-border">
            <a href={project.urlPath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full group/btn">
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground mb-6">
            <Star className="w-4 h-4 mr-2 text-primary" />
            Complete Project Archive
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
            A Decade of <span className="text-primary italic">Hospitality</span> Websites
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Browse through 258+ hand-coded hospitality websites spanning 10 years of development. 
            Each project represents careful attention to detail, custom functionality, and pixel-perfect execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {archiveProjects.filter(p => p.status === 'live').length} live websites
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 delay-300 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-2"
                style={{
                  animationDelay: statsVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="text-3xl sm:text-4xl font-semibold text-foreground animate-count-up">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Highlighted work showcasing advanced functionality and design complexity</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Projects Archive */}
      <section 
        ref={archiveRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Client Projects Archive</h2>
                <p className="text-muted-foreground">
                  Complete collection of hospitality websites developed over the past decade
                </p>
              </div>
              
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline" 
                size="lg" 
                className="group"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter Client Projects
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Filters - Only for Client Projects */}
          {showFilters && (
            <div className="mb-8 p-6 bg-background border border-border rounded-xl animate-fade-in-up">
              <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                <div className="flex flex-wrap gap-3">
                  <FilterDropdown
                    label="Year"
                    value={filters.year}
                    options={filterOptions.years}
                    onChange={(value) => updateFilter('year', value)}
                    type="year"
                  />
                  <FilterDropdown
                    label="Category"
                    value={filters.category}
                    options={filterOptions.categories}
                    onChange={(value) => updateFilter('category', value)}
                    type="category"
                  />
                  <FilterDropdown
                    label="Technology"
                    value={filters.technology}
                    options={filterOptions.technologies}
                    onChange={(value) => updateFilter('technology', value)}
                    type="technology"
                  />
                </div>
                
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                )}
              </div>
              
              <div className="text-sm text-muted-foreground">
                Showing {clientProjects.length} of {allClientProjects.length} client projects
                {hasActiveFilters && ' (filtered)'}
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProjects.slice(0, projectsToShow).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Load More */}
          {projectsToShow < clientProjects.length && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setProjectsToShow(prev => Math.min(prev + 24, clientProjects.length))}
              >
                Load More Projects
                <span className="ml-2 text-sm text-muted-foreground">
                  ({clientProjects.length - projectsToShow} remaining)
                </span>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-4">Personal Projects</h2>
              <p className="text-muted-foreground">Experimental work and personal ventures</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">Ready to Start Your Next Project?</h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss how I can bring the same attention to detail and craftsmanship to your hospitality website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="outline">
                Back to Portfolio
              </Button>
            </Link>
            <Button size="lg" asChild>
              <a href="/#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}