import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <Link to="/" className="text-xl font-bold text-primary">SimpleInviteMaker</Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using SimpleInviteMaker.in, you accept and agree to be bound by the terms and 
            provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily use SimpleInviteMaker.in for personal, non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on SimpleInviteMaker.in</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
          <p className="mb-4">
            Users are responsible for the content they create using our invitation maker. You retain all rights to your content. 
            By creating invitations on our platform, you grant us a license to store, display, and process your content solely 
            for the purpose of providing our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Prohibited Uses</h2>
          <p className="mb-4">You may not use SimpleInviteMaker.in:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
          <p className="mb-4">
            We strive to provide uninterrupted service but cannot guarantee that our platform will always be available. 
            We may suspend or terminate services for maintenance or other reasons without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
          <p className="mb-4">
            The materials on SimpleInviteMaker.in are provided on an 'as is' basis. SimpleInviteMaker makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
            of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitations</h2>
          <p className="mb-4">
            In no event shall SimpleInviteMaker or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
            use the materials on SimpleInviteMaker.in.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Revisions</h2>
          <p className="mb-4">
            The materials appearing on SimpleInviteMaker.in could include technical, typographical, or photographic errors. 
            We may make changes to these terms at any time without notice. By continuing to use the platform after changes 
            are posted, you accept the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of India and you 
            irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, please contact us at support@simpleinvitemaker.in
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SimpleInviteMaker.in. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;