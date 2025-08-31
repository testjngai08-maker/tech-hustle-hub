import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Globe } from "lucide-react";

const ScheduleSection = () => {
  const scheduleItems = [
    {
      date: "September 13",
      time: "00:00 UTC",
      event: "Hackathon Kicks Off",
      description: "Registration closes, teams form, and the coding begins!",
      color: "text-primary"
    },
    {
      date: "September 14-18",
      time: "All Day",
      event: "Development Period",
      description: "Build your amazing projects with mentorship support",
      color: "text-secondary"
    },
    {
      date: "September 19",
      time: "12:00 UTC",
      event: "Submission Deadline",
      description: "Final submissions must be completed",
      color: "text-warning"
    },
    {
      date: "September 19",
      time: "23:59 UTC",
      event: "Judging & Awards",
      description: "Project presentations and winner announcements",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="schedule">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 text-sm font-medium text-secondary mb-4">
            <Calendar className="h-4 w-4" />
            Event Timeline
          </div>
          <h2 className="text-4xl font-bold mb-4">
            One Week of
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Intensive Coding
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seven days to ideate, build, and ship your next breakthrough project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {scheduleItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className={`text-xl ${item.color}`}>
                          {item.event}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          {item.time}
                        </div>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Duration</h3>
                <p className="text-2xl font-bold text-primary">7 Days</p>
                <p className="text-sm text-muted-foreground">Full week of intensive development</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Timezone</h3>
                <p className="text-2xl font-bold text-accent">UTC</p>
                <p className="text-sm text-muted-foreground">All times are in Coordinated Universal Time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;