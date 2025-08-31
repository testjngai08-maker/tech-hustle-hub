import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award } from "lucide-react";

const JudgesSection = () => {
  const judges = [
    {
      name: "Alex Thompson",
      role: "Senior Full-Stack Developer",
      company: "Tech Giants Inc.",
      expertise: ["React", "Node.js", "AI/ML"],
      bio: "10+ years building scalable web applications and leading development teams at Fortune 500 companies.",
      avatar: "AT"
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Design Director",
      company: "Design Studios Co.",
      expertise: ["Design Systems", "User Research", "Prototyping"],
      bio: "Award-winning designer with expertise in creating intuitive user experiences for both web and mobile platforms.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez", 
      role: "DevOps & Cloud Architect",
      company: "CloudTech Solutions",
      expertise: ["AWS", "Docker", "Kubernetes"],
      bio: "Specialized in cloud infrastructure and deployment strategies, helping startups scale from zero to millions of users.",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="judges">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent mb-4">
            <Award className="h-4 w-4" />
            Expert Panel
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Meet Our
            <span className="block text-secondary">
              Expert Judges
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry professionals who will evaluate your projects and provide valuable feedback
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-card hover:scale-105 bg-card"
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4 shadow-glow">
                  {judge.avatar}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-1">{judge.name}</h3>
                <p className="text-primary font-medium mb-1">{judge.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{judge.company}</p>

                {/* Expertise */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {judge.expertise.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {judge.bio}
                </p>

                {/* Rating indicator */}
                <div className="flex justify-center items-center gap-1 mt-4 text-warning">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold">Industry Experience</h4>
              <p className="text-sm text-muted-foreground">30+ years combined experience</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h4 className="font-semibold">Fair Evaluation</h4>
              <p className="text-sm text-muted-foreground">Comprehensive project assessment</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-warning mx-auto mb-2" />
              <h4 className="font-semibold">Valuable Feedback</h4>
              <p className="text-sm text-muted-foreground">Detailed constructive feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;