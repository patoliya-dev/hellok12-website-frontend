"use client"
import { useRouter } from "next/navigation"
import Button from "../ui/Button"
import AppImage from "../ui/AppImage"
import TypingText from "../ui/TypingText"

const HeroSection = () => {
  const router = useRouter()
  const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese"];

  const handleFindTeacher = () => {
    router.push("/teacher-search-discovery")
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] md:text-[38px] font-heading font-semibold text-foreground leading-tight">
              <span className="lg:text-left md:text-left sm:text-center">
                <TypingText texts={languages} speed={200} delay={1000} />
                <span className="inline-block sm:block md:inline">Lessons for</span>
              </span>
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] md:text-[38px] font-heading font-semibold text-foreground leading-tight mb-6">
              Kids with Expert Tutors
            </h1>

            <p className="text-3xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Connecting kids with language teachers
            </p>

            <p className="inline-flex bg-primary/10 border-border rounded-full text-primary/80 mb-8 leading-relaxed">
              <span className="lg:text-xl md:text-md sm:text-sm px-4 py-1 leading-relaxed">
                Explore 200+ languages for your child to discover
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={handleFindTeacher}
                iconName="Search"
                iconPosition="left"
                className="text-md p4 shadow-educational-md hover:shadow-educational-lg hover-lift"
              >
                Find a Teacher
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">✓</span>
                </div>
                <span>200+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">✓</span>
                </div>
                <span>Certified Teachers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xs">✓</span>
                </div>
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <AppImage
                src="/assets/images/heroSection/hero-illustration.png"
                alt="Children learning languages with colorful books and global elements"
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
