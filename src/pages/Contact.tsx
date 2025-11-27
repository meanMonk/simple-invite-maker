import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);

      // GA4 event
      if (window.gtag) {
        window.gtag("event", "contact_form_submission");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <a href="/" className="text-xl font-bold text-primary">SimpleInviteMaker</a>
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </a>
        </nav>
      </header>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have questions about SimpleInviteMaker? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={isSubmitting}
              rows={6}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold">
            Send Message
          </Button>
        </form>

        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-2">
            Email: support@simpleinvitemaker.in
          </p>
          <p className="text-muted-foreground">
            We typically respond within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SimpleInviteMaker.in. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;