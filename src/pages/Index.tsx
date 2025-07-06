import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CircleDollarSign, Users, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="neo-card p-16 mb-12">
            <Badge className="mb-6 neo-raised px-4 py-2 bg-primary/10 text-primary font-semibold">
              Unlimited Development • Fixed Monthly Price
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Stop Worrying About
              <span className="block text-primary">Bugs & Broken Code</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              SemperMade provides unlimited bug fixes, CI/CD setup, and test coverage improvement for one flat monthly fee. 
              Pause anytime. No contracts. No surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="neo-accent" size="xl" className="px-8 sm:px-12">
                Get Started Today
              </Button>
              <Button variant="neo" size="xl" className="px-8 sm:px-12">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Development Problems That Keep You Up at Night
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🐛</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Endless Bug Reports</h3>
              <p className="text-muted-foreground">
                Your users find bugs faster than your team can fix them. Each fix introduces new problems.
              </p>
            </Card>
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">No Test Coverage</h3>
              <p className="text-muted-foreground">
                Every deployment is a gamble. You're afraid to make changes because you don't know what will break.
              </p>
            </Card>
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Unpredictable Costs</h3>
              <p className="text-muted-foreground">
                Hiring developers is expensive and slow. Freelancers are hit-or-miss. Agencies charge by the hour.
              </p>
            </Card>
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Production Fires</h3>
              <p className="text-muted-foreground">
                Critical issues arise at the worst times. You're constantly putting out fires instead of building features.
              </p>
            </Card>
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🐌</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Slow Development</h3>
              <p className="text-muted-foreground">
                Without proper CI/CD, every release is manual and time-consuming. Simple changes take weeks to deploy.
              </p>
            </Card>
            <Card className="neo-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Debt</h3>
              <p className="text-muted-foreground">
                Your codebase is fragile and hard to maintain. Adding new features becomes increasingly difficult and risky.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Dedicated Development Team
              <span className="block text-primary">For One Fixed Price</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SemperMade works like a monthly subscription to Netflix, but for software development. 
              Get unlimited bug fixes, testing, and CI/CD improvements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Subscribe & Connect Your Repo</h4>
                    <p className="text-muted-foreground">Choose your plan and connect your GitHub/GitLab repository. We'll audit your code coverage immediately and get your existing code to at least 80% test coverage if it's not already there. We'll also configure GitHub Actions per PR to maintain quality standards before making major changes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Submit Unlimited Requests</h4>
                    <p className="text-muted-foreground">Add unlimited bug reports, feature requests, and CI/CD needs to your dedicated project board. We handle each request one at a time to ensure quality and focus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Get Results Fast</h4>
                    <p className="text-muted-foreground">We work on one request at a time with full attention and deliver bug fixes, tests, and improvements within 2-5 days. Rush delivery (1-3 days) available for priority requests. All with proper testing and CI/CD.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="neo-card p-8">
              <h4 className="text-2xl font-bold mb-6 text-center">What You Get</h4>
              <div className="space-y-4">
                {[
                  "Unlimited bug fixes & improvements",
                  "Test coverage increased to 80%+",
                  "Complete CI/CD pipeline setup",
                  "1-3 day turnaround on most tasks",
                  "Dedicated Slack channel support",
                  "Pause or cancel anytime"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your needs. Upgrade, downgrade, or pause anytime. 
              No setup fees, no hourly rates, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Plan */}
            <Card className="neo-card relative overflow-hidden">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">Essential</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $3,995<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">Perfect for startups with stable apps</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Unlimited bug fixes (standard complexity)",
                    "Basic testing support",
                    "Basic CI/CD pipeline setup",
                    "Email support",
                    "2-5 day turnaround"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="neo" className="w-full mt-8" size="lg">
                  Start Essential Plan
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="neo-card relative overflow-hidden border-2 border-primary/20">
              <div className="neo-raised absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-2xl font-bold mb-2">Professional</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $5,995<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For growing companies with complex apps</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Everything in Essential",
                    "Advanced testing suite setup",
                    "Multi-environment CI/CD",
                    "Weekly developer pairing sessions",
                    "Slack channel support",
                    "1-3 day turnaround"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="neo-primary" className="w-full mt-8" size="lg">
                  Start Professional Plan
                </Button>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="neo-card relative overflow-hidden">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">Elite</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $7,995<span className="text-lg font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For mission-critical applications</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Everything in Professional",
                    "Priority turnaround (same day)",
                    "80-100% test coverage strategy",
                    "DevOps/Cloud engineering support",
                    "Dedicated on-call developer",
                    "Custom integrations"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="neo-accent" className="w-full mt-8" size="lg">
                  Start Elite Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              All plans include unlimited revisions, pause anytime, and no setup fees.
            </p>
            <Button variant="outline" size="lg" className="px-6 sm:px-8">
              Compare All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose SemperMade?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <CircleDollarSign className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictable Costs</h3>
              <p className="text-muted-foreground">
                No hourly rates or surprise bills. One flat monthly fee covers everything.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Senior developers with 10+ years experience in testing, CI/CD, and bug fixing.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                Every fix includes proper testing. We won't deploy code that reduces your test coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Most bug fixes and improvements delivered within 2-5 days, not weeks.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your code never leaves your repository. We work through secure pull requests only.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Solution</h3>
              <p className="text-muted-foreground">
                From startups to enterprise, our processes scale with your growing needs.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Focused Approach</h3>
              <p className="text-muted-foreground">
                We handle one request at a time to ensure quality and focused attention on each task.
              </p>
            </div>
            <div className="text-center">
              <div className="neo-card w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Plans</h3>
              <p className="text-muted-foreground">
                Pause, cancel, or upgrade your subscription anytime. No long-term contracts required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="neo-card p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Stop Worrying About Bugs?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hundreds of companies who've made their applications bulletproof with SemperMade. 
              Start your subscription today and get your first bug fix within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="neo-accent" size="xl" className="px-8 sm:px-12">
                Start Your Subscription
              </Button>
              <Button variant="neo" size="xl" className="px-8 sm:px-12">
                Book a Demo Call
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">SemperMade</h3>
            <p className="text-muted-foreground">Unlimited development services for a flat monthly fee</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 SemperMade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;