import { Link } from "react-router-dom";

const Refund = () => {
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
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Digital Products - No Refunds</h2>
          <p className="mb-4">
            SimpleInviteMaker.in provides digital products and services. Due to the nature of digital downloads and 
            instant access to our invitation maker tools, <strong>all sales are final and non-refundable</strong>.
          </p>
          <p className="mb-4">
            Once you have purchased access to our premium features or downloaded any digital content, we cannot offer 
            refunds or exchanges. This policy is in place because:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Digital products cannot be "returned" once accessed</li>
            <li>You receive immediate access to all features upon purchase</li>
            <li>All features and capabilities are clearly described before purchase</li>
            <li>Free trials or limited versions are available for testing before buying</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
          <p className="mb-4">
            While we maintain a strict no-refund policy, we may consider refund requests in the following exceptional circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Duplicate charges:</strong> If you were accidentally charged multiple times for the same purchase</li>
            <li><strong>Technical issues:</strong> If our service was completely inaccessible due to technical problems on our end 
            for an extended period after your purchase</li>
            <li><strong>Unauthorized charges:</strong> If your payment information was used without your authorization 
            (subject to verification and investigation)</li>
          </ul>
          <p className="mb-4">
            These exceptions are evaluated on a case-by-case basis and are at the sole discretion of SimpleInviteMaker.in management.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Before You Purchase</h2>
          <p className="mb-4">
            We encourage you to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Try our free version or trial period to ensure our service meets your needs</li>
            <li>Review all feature descriptions and pricing information carefully</li>
            <li>Contact our support team if you have any questions before purchasing</li>
            <li>Check system requirements and compatibility</li>
            <li>Read user reviews and testimonials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subscription Cancellations</h2>
          <p className="mb-4">
            If you have a recurring subscription:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You can cancel your subscription at any time to prevent future charges</li>
            <li>Cancellation will take effect at the end of your current billing period</li>
            <li>No refunds will be provided for the current billing period</li>
            <li>You will retain access to premium features until the end of your paid period</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
          <p className="mb-4">
            Instead of refunds, we are committed to providing excellent technical support. If you're experiencing issues:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact our support team at support@simpleinvitemaker.in</li>
            <li>We will work with you to resolve technical problems</li>
            <li>Our team typically responds within 24-48 hours</li>
            <li>We provide comprehensive documentation and tutorials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Disputes</h2>
          <p className="mb-4">
            If you wish to dispute a charge:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">Contact us first at billing@simpleinvitemaker.in with your order details</li>
            <li className="mb-2">Provide clear explanation of the issue</li>
            <li className="mb-2">Allow us 5-7 business days to investigate and respond</li>
            <li className="mb-2">We will work in good faith to resolve any legitimate billing concerns</li>
          </ol>
          <p className="mb-4">
            Please note that chargebacks initiated without first contacting us may result in suspension of your account 
            and legal action to recover costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Modifications</h2>
          <p className="mb-4">
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or discontinue features with notice to users</li>
            <li>Update pricing for future billing periods (existing subscriptions honored at original price)</li>
            <li>Make improvements or changes to our service</li>
          </ul>
          <p className="mb-4">
            In the event of significant service changes that materially affect your purchase, we will provide appropriate 
            notice and options.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have questions about our refund policy or need to request an exception review, please contact us:
          </p>
          <p className="mb-2">Email: billing@simpleinvitemaker.in</p>
          <p className="mb-2">Support: support@simpleinvitemaker.in</p>
          <p className="mb-4">
            Please include your order number, email address, and detailed description of your concern.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
          <p className="mb-4">
            This refund policy may be updated from time to time. Any changes will be posted on this page with an updated 
            revision date. Continued use of our services after changes constitutes acceptance of the updated policy.
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

export default Refund;