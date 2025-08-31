import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code, Heart, ExternalLink, MessageCircle, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Tech Hustler's</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering developers and innovators to build the future through collaborative hackathons and community-driven events.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Register
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                asChild
              >
                <a href="#discord">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Discord
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Event Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#schedule" className="hover:text-foreground transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-foreground transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#judges" className="hover:text-foreground transition-colors">
                  Judges
                </a>
              </li>
              <li>
                <a href="#discord" className="hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-3">Policies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/guidelines" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Code of Conduct
                </Link>
              </li>
              <li>
                <a 
                  href="https://mlh.io/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  MLH Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://mlh.io/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  MLH Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Tech Hustler's Community. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-red-500" /> for the developer community
          </div>
        </div>

        {/* MLH Badge */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            This event is organized in partnership with{" "}
            <a 
              href="https://mlh.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Major League Hacking
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;