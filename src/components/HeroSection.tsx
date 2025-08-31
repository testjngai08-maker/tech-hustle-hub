import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";
import hackathonBanner from "@/assets/hackathon-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hackathonBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm font-medium text-white mb-6">
            <Calendar className="h-4 w-4" />
            September 13-19, 2024 • 1 Week Challenge
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tech Hustler's
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Hackathon 1.0
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join developers, designers, and innovators from around the world in a week-long coding challenge. 
            Build the next big thing and compete for amazing prizes!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-sm opacity-80">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">4</div>
              <div className="text-sm opacity-80">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3</div>
              <div className="text-sm opacity-80">Expert Judges</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-3 text-lg"
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
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg"
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;