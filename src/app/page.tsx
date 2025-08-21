import PublicNavigation from "./components/ui/PublicNavigation"
import HeroSection from "./components/landing/HeroSection"
import HowItWorksSection from "./components/landing/HowItWorksSection"
import TestimonialsSection from "./components/landing/TestimonialsSection"
import TeacherProfilesSection from "./components/landing/TeacherProfilesSection"
import CallToActionSection from "./components/landing/CallToActionSection"
import FooterSection from "./components/ui/FooterSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Teacher Profiles Section */}
        <TeacherProfilesSection />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
