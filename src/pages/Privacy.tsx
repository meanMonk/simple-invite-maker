const Privacy = () => {
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

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            At SimpleInviteMaker.in, we collect information that you provide directly to us when using our services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
            <li><strong>Content:</strong> Invitation designs, text, images, and other content you create on our platform</li>
            <li><strong>Usage Information:</strong> How you interact with our services, including pages visited and features used</li>
            <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our invitation maker services</li>
            <li>Process your transactions and send related information</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues and fraudulent activity</li>
            <li>Personalize and improve your experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell your personal information. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
            <li><strong>Service providers:</strong> With vendors who help us operate our platform (hosting, analytics, customer service)</li>
            <li><strong>Legal compliance:</strong> When required by law or to protect rights and safety</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, 
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to collect information about your browsing activities. 
            You can control cookies through your browser settings. We use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> Required for the website to function</li>
            <li><strong>Analytics cookies:</strong> To understand how visitors use our site (Google Analytics)</li>
            <li><strong>Preference cookies:</strong> To remember your settings and preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal requirements)</li>
            <li>Object to processing of your information</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us at privacy@simpleinvitemaker.in
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <p className="mb-4">
            We retain your information for as long as your account is active or as needed to provide services. 
            We will retain and use your information as necessary to comply with legal obligations, resolve disputes, 
            and enforce our agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not directed to children under 13. We do not knowingly collect personal information from 
            children under 13. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and maintained on servers located outside your country. 
            We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
            policy on this page and updating the "Last updated" date. Your continued use of our services after changes 
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-2">Email: privacy@simpleinvitemaker.in</p>
          <p className="mb-2">Address: SimpleInviteMaker.in, India</p>
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

export default Privacy;