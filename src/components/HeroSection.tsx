import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Code2, Lightbulb, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background SVG Illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Icons */}
        <Code2 className="absolute top-20 left-10 h-8 w-8 text-primary/20 animate-pulse" />
        <Lightbulb className="absolute top-32 right-16 h-6 w-6 text-accent/20 animate-bounce" />
        <Zap className="absolute bottom-40 left-20 h-10 w-10 text-secondary/20 animate-pulse" />
        <Code2 className="absolute bottom-20 right-12 h-7 w-7 text-warning/20 animate-bounce" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-10 w-20 h-20 border-2 border-primary/10 rounded-full animate-spin [animation-duration:20s]" />
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-accent/5 rotate-45 animate-pulse" />
        <div className="absolute top-40 left-1/3 w-12 h-12 border-2 border-secondary/10 rotate-12 animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            September 13-19, 2024 • 1 Week Challenge
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Tech Hustler's
            <span className="block text-primary">
              Hackathon 1.0
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join developers, designers, and innovators from around the world in a week-long coding challenge. 
            Build the next big thing and compete for amazing prizes!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Expert Judges</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              asChild
            >
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Register Now
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg"
              asChild
            >
              <a 
                href="#discord" 
                className="inline-flex items-center gap-2"
              >
                <Users className="h-5 w-5" />
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;