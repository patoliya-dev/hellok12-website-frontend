"use client"
import React from "react";
import PublicNavigation from "../components/ui/PublicNavigation";
import Icon from "../components/ui/Icon";
import PricingCard from "../components/pricing/PricingCard";
import TrustSignals from "../components/pricing/TrustSignals";
import FooterSection from "../components/ui/FooterSection";
import Faq from "../components/pricing/FaqSection";
import PageTitle from "../components/PageTitle";

// ---- Types ----
interface Badge {
  text: string;
  className: string;
}

interface Plan {
  title: string;
  features: string[];
  isPopular?: boolean;
  badge?: Badge;
}

const PricingPlans: React.FC = () => {

  // Teacher/School pricing data
  const teacherPlans: Plan[] = [
    {
      title: "Individual Teacher",
      features: [
        "20% commission on all bookings",
        "Teacher profile and scheduling",
        "Payment processing included",
        "Student progress tracking",
        "Student access to games aligned with customizable curriculum",
        "Customer support",
      ],
    },
    {
      title: "School",
      features: [
        "20% commission on all bookings",
        "Multi-teacher management",
        "Advanced scheduling tools",
        "Advanced scheduling tools",
        "Analytics dashboard",
        "Priority support",
        "Custom branding options",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Pricing Plans"} />
      
      <PublicNavigation />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="pt-22 pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {"We only charge a commission for each booking - no hidden fees, no surprises. Just quality learning experiences, every time."}
            </p>

            {/* Trust Signal Header */}
            <div className="hidden lg:block border-b border-border bg-[#EDF2FF] rounded-md">
              <div className="max-w-8xl mx-auto px-8">
                <div className="flex items-center justify-center py-2 space-x-8 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-accent" />
                    <span>Verified Educators</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Lock" size={14} className="text-purple" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={14} className="text-secondary" />
                    <span>4.9/5 Parent Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} className="text-primary" />
                    <span>50,000+ Students Helped</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10">
            <p className="text-sm text-center text-muted-foreground max-w-2xl mx-auto">
              {"Join our platform to connect with students and families while building your tutoring business with our comprehensive tools and support."}
            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">


            {/* {children} */}
            {teacherPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>

        </div>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQ Section */}
        <Faq />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default PricingPlans;
