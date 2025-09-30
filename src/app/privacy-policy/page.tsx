import PublicNavigation from "../components/ui/PublicNavigation"
import FooterSection from "../components/ui/FooterSection"
import PageTitle from "../components/PageTitle";
import PrivacyPolicy from "../components/privacyPolicy";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Contact Us"} />
      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main>
        
        {/* Privacy Policy Section */}
        <PrivacyPolicy />
        
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
