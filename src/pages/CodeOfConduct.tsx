import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CodeOfConduct = () => {
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
          <h1 className="text-3xl font-bold text-primary">
            Code of Conduct
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-8">
            Tech Hustler's Hackathon is governed by the Major League Hacking (MLH) Code of Conduct. All participants, sponsors, organizers, and volunteers are expected to abide by these guidelines.
          </p>

          <div className="bg-card rounded-lg p-6 shadow-card mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Commitment</h2>
            <p className="text-muted-foreground">
              We are dedicated to providing a safe, inclusive, and harassment-free environment for everyone participating in our hackathon, regardless of age, gender, gender identity, gender expression, sexual orientation, disability, physical appearance, race, ethnicity, nationality, religion, or technology choices.
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Scope</h3>
            <p className="text-muted-foreground mb-4">
              This Code of Conduct applies to all hackathon-related activities, including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Online platforms (Discord, submission systems, etc.)</li>
              <li>• All hackathon-related communications</li>
              <li>• Team formation and collaboration</li>
              <li>• Mentorship sessions and workshops</li>
              <li>• Judging and presentation periods</li>
              <li>• Social media interactions related to the event</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Prohibited Behavior</h3>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-destructive-foreground">
                The following behaviors are strictly prohibited:
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Harassment, discrimination, or intimidation in any form</li>
              <li>• Offensive verbal or written comments</li>
              <li>• Inappropriate imagery or behavior</li>
              <li>• Deliberate intimidation, stalking, or following</li>
              <li>• Unwelcome physical contact or attention</li>
              <li>• Disruption of presentations or activities</li>
              <li>• Any form of academic dishonesty or plagiarism</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Enforcement</h3>
            <p className="text-muted-foreground mb-4">
              Participants who violate this Code of Conduct may face consequences including:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Warning from organizers</li>
              <li>• Temporary suspension from activities</li>
              <li>• Disqualification from the hackathon</li>
              <li>• Removal from online platforms</li>
              <li>• Ban from future Tech Hustler events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Reporting Violations</h3>
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium">
                If you experience or witness behavior that violates this Code of Conduct, please report it immediately.
              </p>
            </div>
            <p className="text-muted-foreground mb-4">
              You can report violations through:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Direct message to hackathon organizers on Discord</li>
              <li>• Email to our organization team</li>
              <li>• MLH incident reporting system</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              All reports will be handled confidentially and investigated promptly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-4">Additional Resources</h3>
            <p className="text-muted-foreground mb-4">
              For more detailed information, please refer to the complete{" "}
              <a 
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MLH Code of Conduct
              </a>
              .
            </p>
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <p className="text-sm font-medium text-success-foreground">
                By participating in Tech Hustler's Hackathon 1.0, you agree to abide by this Code of Conduct and help create a welcoming environment for all.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CodeOfConduct;