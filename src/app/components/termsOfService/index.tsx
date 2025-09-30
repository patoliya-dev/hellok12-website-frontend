import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-5xl mx-auto rocket-container">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Terms of Service</h1>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          {`Welcome to HelloK12. By accessing or using our website https://www.hellok12.com/ ("Service"),
          you agree to be bound by these Terms of Service.`}
        </p>

        <h2 className="text-2xl font-semibold mt-8">Use of Service</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms.
          Unauthorized use may result in termination of your access.
        </p>

        <h2 className="text-2xl font-semibold mt-8">User Accounts</h2>
        <p>
          When you create an account, you agree to provide accurate information and maintain account security.
          You are responsible for all activity under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Payment Terms</h2>
        <p>
          Any payments for services are processed securely via third-party payment processors.
          You agree to timely payment of any fees applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Intellectual Property</h2>
        <p>
          All content provided on HelloK12 is our property or licensed to us. Unauthorized use or reproduction is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Limitation of Liability</h2>
        <p>
          We are not liable for damages arising from use of our services except as required by law.
          Usage is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms occasionally. Continued use after changes constitutes acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact Information</h2>
        <p>
          For any questions regarding these Terms, contact support@hellok12.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
