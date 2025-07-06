import Navigation from "@/components/Navigation";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p>This Privacy Policy explains how semperMade collects and uses information when you interact with our website or services.</p>
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We may collect your name, email address, and any other information you choose to provide when contacting us or subscribing to our services.</p>
        <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
        <p>Your information is used to provide and improve our services, respond to inquiries, and communicate with you about your subscription.</p>
        <h2 className="text-2xl font-semibold">3. Sharing of Information</h2>
        <p>We do not sell your personal data. Information may be shared with trusted service providers solely to operate our business and only as necessary.</p>
        <h2 className="text-2xl font-semibold">4. Security</h2>
        <p>We take reasonable measures to protect your information, but no method of transmission over the Internet is completely secure.</p>
        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p>You may request access to or deletion of your personal data by contacting us. We will comply with applicable laws.</p>
        <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Continued use of the service after changes means you accept the updated policy.</p>
        <h2 className="text-2xl font-semibold">7. Contact</h2>
        <p>If you have questions about this Privacy Policy, please email support@sempermade.com.</p>
      </div>
    </section>
  </div>
);

export default Privacy;
