import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, Headphones, Hash } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="py-20" id="discord">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent mb-4">
              <MessageCircle className="h-4 w-4" />
              Community Hub
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Join Our
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                Discord Community
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with fellow hackers, get real-time support, and stay updated throughout the event
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our Discord server to team up with other participants, get help from mentors, 
                receive important announcements, and be part of the Tech Hustler community!
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow px-8 py-3 text-lg"
                asChild
              >
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Join Discord Server
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Team Formation</h4>
                <p className="text-sm text-muted-foreground">
                  Find teammates and form your dream team
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Headphones className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Mentor Support</h4>
                <p className="text-sm text-muted-foreground">
                  Get help from experienced developers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Hash className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Topic Channels</h4>
                <p className="text-sm text-muted-foreground">
                  Dedicated channels for each theme
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-warning mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Live Updates</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time announcements and updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Community Stats */}
          <div className="text-center mt-12">
            <div className="bg-muted/50 rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div>
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div>
                  <div className="text-2xl font-bold text-accent">Active</div>
                  <div className="text-sm text-muted-foreground">Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;