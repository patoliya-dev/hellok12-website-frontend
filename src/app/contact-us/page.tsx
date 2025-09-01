import PublicNavigation from "../components/ui/PublicNavigation"
import HeroSection from "../components/contactUs/HeroSection";
import ContactSection from "../components/contactUs/ContactSection";
import FaqSection from "../components/contactUs/FaqSection";
import FooterSection from "../components/ui/FooterSection"
import PageTitle from "../components/PageTitle";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Contact Us"} />
      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Faq Section */}
        <FaqSection />

      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
