import PublicNavigation from "../components/ui/PublicNavigation"
import HeroSection from "../components/aboutUs/HeroSection";
import MissionSection from "../components/aboutUs/MissionSection";
import StatsSection from "../components/aboutUs/StatsSection";
import TestimonialSection from "../components/aboutUs/TestimonialSection";
import TeacherSpotlight from "../components/aboutUs/TeacherSpotlight";
import CallToActionSection from "../components/aboutUs/CallToAction"
import FooterSection from "../components/ui/FooterSection"
import PageTitle from "../components/PageTitle";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page title */}
      <PageTitle title={"About Us"} />

      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <MissionSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* TeacherSpotlight Section */}
        <TeacherSpotlight />

        {/* Call to Action Section */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
