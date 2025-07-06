import Navigation from "@/components/Navigation";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <p>By accessing or using the semperMade website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        <h2 className="text-2xl font-semibold">1. Services</h2>
        <p>semperMade offers subscription based development services including unlimited bug fixes, CI/CD setup and improvements, and test coverage enhancement. Services are delivered through your connected repositories via pull requests.</p>
        <h2 className="text-2xl font-semibold">2. Subscriptions & Payments</h2>
        <p>All plans are billed monthly for a flat fee as listed on our pricing page. You may pause or cancel your subscription at any time, and service will continue until the end of your current billing period.</p>
        <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
        <p>You agree not to use our services for any unlawful or abusive purpose. We reserve the right to refuse work that violates these terms.</p>
        <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
        <p>All code we contribute remains your property. We may display your name or logo as a customer unless you request otherwise.</p>
        <h2 className="text-2xl font-semibold">5. Disclaimer</h2>
        <p>While we strive to deliver high quality work, our services are provided "as is" without warranties of any kind. semperMade is not liable for any indirect or consequential damages.</p>
        <h2 className="text-2xl font-semibold">6. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the service after changes constitutes acceptance of the new Terms.</p>
        <h2 className="text-2xl font-semibold">7. Contact</h2>
        <p>For questions about these Terms, please contact us at support@sempermade.com.</p>
      </div>
    </section>
  </div>
);

export default Terms;
