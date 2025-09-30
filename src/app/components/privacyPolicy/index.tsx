import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-5xl mx-auto rocket-container">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">Privacy Policy</h1>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          {`HelloK12 ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website https://www.hellok12.com/ and use our services.`}
        </p>

        <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
        <ul className="list-disc list-inside ml-5 space-y-1">
          <li>Personal Information like name, email address, phone number.</li>
          <li>Usage data related to how you use our services.</li>
          <li>Payment and transaction information (via secure providers).</li>
          <li>Cookies and tracking data for improving your experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
        <p>
          We use your data to provide, maintain, and improve our services, communicate updates, process transactions,
          and for marketing purposes with your consent. We never sell your information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information. However, no method of transmission
          over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You may also withdraw consent where applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We encourage you to review it regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>
          If you have any questions about this policy, please contact us at privacy@hellok12.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
