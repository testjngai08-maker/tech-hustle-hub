import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Zap, Palette, Lightbulb } from "lucide-react";

const ThemesSection = () => {
  const themes = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Agent Apps",
      description: "Build intelligent applications that leverage AI agents to automate tasks, provide insights, or enhance user experiences.",
      examples: ["Personal AI assistants", "Automated workflow tools", "Smart recommendation engines"],
      color: "border-primary/20 bg-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Discord Bots",
      description: "Create innovative Discord bots that bring new functionality, entertainment, or utility to server communities.",
      examples: ["Moderation bots", "Game integration bots", "Community management tools"],
      color: "border-accent/20 bg-accent/5",
      iconColor: "text-accent"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Tech Hustler's Branding",
      description: "Design the visual identity for Tech Hustler's community - websites, logos, banners, and brand assets.",
      examples: ["Logo design", "Website mockups", "Social media banners"],
      color: "border-secondary/20 bg-secondary/5",
      iconColor: "text-secondary"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Open Category",
      description: "Bring your wildest ideas to life! Any innovative project that showcases your creativity and technical skills.",
      examples: ["Web applications", "Mobile apps", "Developer tools"],
      color: "border-warning/20 bg-warning/5",
      iconColor: "text-warning"
    }
  ];

  return (
    <section className="py-20" id="themes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Lightbulb className="h-4 w-4" />
            Problem Statements
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Four Exciting
            <span className="block text-primary">
              Challenge Themes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your battlefield and create something amazing within these exciting categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <Card 
              key={index} 
              className={`${theme.color} transition-all duration-300 hover:shadow-card hover:scale-105`}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`${theme.iconColor}`}>
                    {theme.icon}
                  </div>
                  <CardTitle className="text-xl">
                    {theme.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {theme.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground">Example Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {theme.examples.map((example, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="text-xs"
                      >
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary p-6 rounded-lg text-primary-foreground max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Ready to Start Building?</h3>
            <p className="text-primary-foreground/90">
              Detailed problem statements and starter resources will be provided upon registration. 
              Get ready to push the boundaries of what's possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;