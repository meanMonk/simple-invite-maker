import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (buyingIntent: string) => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        email: email.trim(),
        page: "home",
        buying_intent: buyingIntent,
      });

      if (error) throw error;

      toast.success("Thank you! We'll notify you when we launch.");
      setEmail("");

      // GA4 event
      if (window.gtag) {
        window.gtag("event", "lead_submission", {
          page: "home",
          buying_intent: buyingIntent,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Lead submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <h1 className="text-xl font-bold text-primary">SimpleInviteMaker</h1>
          <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Create Beautiful Online Invitations in Minutes
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The simplest online invitation maker for weddings, birthdays, and every special occasion. No design skills needed.
        </p>

        {/* Lead Capture */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-xl mx-auto shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Notify Me When Live</h2>
          <p className="text-muted-foreground mb-6">
            Be the first to know when we launch. Get early access and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-base"
              disabled={isSubmitting}
            />
            <Button
              onClick={() => handleSubmit("notify")}
              disabled={isSubmitting}
              className="h-12 px-8 text-base font-semibold"
            >
              Notify Me
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            How interested are you?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSubmit("very_interested")}
              disabled={isSubmitting}
            >
              Very Interested
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSubmit("somewhat_interested")}
              disabled={isSubmitting}
            >
              Somewhat Interested
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSubmit("just_browsing")}
              disabled={isSubmitting}
            >
              Just Browsing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why SimpleInviteMaker?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Create and send invitations in under 5 minutes. No complicated tools or training required.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Beautiful Templates</h3>
            <p className="text-muted-foreground">
              Choose from dozens of professionally designed templates for every occasion.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Share Instantly</h3>
            <p className="text-muted-foreground">
              Send via WhatsApp, email, or social media. Your guests receive beautiful digital invites instantly.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-muted/30 py-16">
        <article className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">The Best Online Invitation Maker for Every Occasion</h2>
          
          <p className="text-lg mb-6">
            Looking for a free online invitation maker that's actually simple to use? SimpleInviteMaker.in is your 
            answer. Whether you're planning a wedding, birthday party, baby shower, or corporate event, our digital 
            invitation card maker helps you create stunning invites in minutes.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Perfect for Wedding Invitations Online</h3>
          <p className="mb-6">
            Planning a wedding is stressful enough. Our wedding invitation maker online tool removes the hassle of 
            designing and printing traditional cards. Create elegant digital wedding invitations that match your theme, 
            share them instantly with guests, and track RSVPs—all in one place. Save time, money, and trees with our 
            eco-friendly online wedding invitation maker.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Birthday Invite Generator Made Simple</h3>
          <p className="mb-6">
            From first birthdays to milestone celebrations, our birthday invite generator offers templates for all ages. 
            Create colorful, fun birthday invitation cards online that capture the spirit of your celebration. Customize 
            with photos, change colors, and add party details in seconds. Your guests will love receiving beautiful 
            digital birthday invitations they can save and share.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Free Invitation Card Tool with Professional Results</h3>
          <p className="mb-6">
            Why pay for expensive design software or printing costs? Our free invitation card maker delivers 
            professional-quality results without the professional price tag. Whether you need formal event invitations 
            or casual party invites, SimpleInviteMaker provides all the tools you need to create stunning digital 
            invitation cards.
          </p>

          <h3 className="text-2xl font-semibold mb-4">How Our Digital Invitation Maker Works</h3>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Choose a template from our extensive library of invitation designs</li>
            <li className="mb-2">Customize text, colors, and images to match your event theme</li>
            <li className="mb-2">Preview your invitation on mobile and desktop</li>
            <li className="mb-2">Download or share directly via WhatsApp, email, or social media</li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4">Features That Set Us Apart</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Mobile-optimized: Create invitations on any device</li>
            <li className="mb-2">Instant delivery: No printing or shipping delays</li>
            <li className="mb-2">Eco-friendly: Digital invitations reduce paper waste</li>
            <li className="mb-2">Cost-effective: Save hundreds compared to traditional printing</li>
            <li className="mb-2">Easy sharing: One click to send to all your guests</li>
            <li className="mb-2">RSVP tracking: Know who's coming to your event</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Perfect for Every Event Type</h3>
          <p className="mb-6">
            Our invitation maker online supports all types of events: weddings, engagements, birthdays, anniversaries, 
            baby showers, graduation parties, retirement celebrations, corporate events, holiday parties, and more. 
            Whatever your occasion, we have templates and customization options to match.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Why Digital Invitations Are the Future</h3>
          <p className="mb-6">
            The world is going digital, and invitations are no exception. Digital invitation cards are more convenient 
            for you and your guests. No lost mail, no forgotten RSVPs, no last-minute address changes. Plus, they're 
            better for the environment. Join thousands of event planners who have switched to online invitation makers 
            for their celebrations.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Get Started Today</h3>
          <p className="mb-6">
            Ready to create your first digital invitation? Sign up for early access to SimpleInviteMaker.in and be among 
            the first to experience the easiest online invitation maker in India. Whether you're making wedding invitations 
            online or birthday invites, we've got you covered. Join our waitlist today and receive exclusive launch offers.
          </p>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">SimpleInviteMaker</h3>
              <p className="text-sm text-muted-foreground">
                The simplest way to create beautiful online invitations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="/refund" className="text-sm text-muted-foreground hover:text-foreground">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Keywords</h4>
              <p className="text-xs text-muted-foreground">
                online invitation maker, digital invitation card maker, wedding invitation maker online, 
                birthday invite generator, free invitation card tool
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            © 2025 SimpleInviteMaker.in. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;