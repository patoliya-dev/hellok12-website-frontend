import PublicNavigation from "../components/ui/PublicNavigation"
import FooterSection from "../components/ui/FooterSection"
import PageTitle from "../components/PageTitle";
import TermsOfService from "../components/termsOfService";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"Contact Us"} />
      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main>
        
        {/* Terms Of Service Section */}
        <TermsOfService />
        
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
