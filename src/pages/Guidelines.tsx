import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hackathon
            </Button>
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Community Guidelines
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-8">
            Tech Hustler's Hackathon follows the Major League Hacking (MLH) Community Guidelines to ensure a safe, inclusive, and productive environment for all participants.
          </p>

          <div className="bg-card rounded-lg p-6 shadow-card mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">MLH Community Guidelines</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, or technology choices.
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Expected Behavior</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Be respectful and inclusive in all interactions</li>
              <li>• Use welcoming and inclusive language</li>
              <li>• Respect differing viewpoints and experiences</li>
              <li>• Give and gracefully accept constructive feedback</li>
              <li>• Focus on what's best for the community</li>
              <li>• Show empathy towards other community members</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Unacceptable Behavior</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Harassment, discrimination, or intimidation of any kind</li>
              <li>• Offensive comments related to personal characteristics</li>
              <li>• Inappropriate physical contact or unwelcome attention</li>
              <li>• Disruptive behavior during events or activities</li>
              <li>• Publishing others' private information without consent</li>
              <li>• Any conduct that could reasonably be considered inappropriate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Reporting</h3>
            <p className="text-muted-foreground mb-4">
              If you experience or witness unacceptable behavior, please report it immediately to the hackathon organizers or MLH staff. All reports will be handled confidentially and with care.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm font-medium">
                For immediate assistance during the event, contact our organizers through Discord or email.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-4">Learn More</h3>
            <p className="text-muted-foreground">
              For complete details, please review the official{" "}
              <a 
                href="https://mlh.io/community-guidelines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MLH Community Guidelines
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Guidelines;