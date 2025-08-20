"use client"
import { useRouter } from "next/navigation"
import Button from "../ui/Button"
import AppImage from "../ui/AppImage"

const HeroSection = () => {
  const router = useRouter()

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
              Connecting kids with language teachers
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                global opportunities
              </span> */}
            </h1>

            <p className="text-xl sm:text-2xl text-text-secondary mb-8 leading-relaxed">
              Explore 200+ languages for your child to discover
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop&crop=center"
                alt="Children learning languages with colorful books and global elements"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl shadow-educational-xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-educational-lg animate-bounce">
              <span className="text-white text-2xl">🌍</span>
            </div>

            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-educational-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-white text-2xl">📚</span>
            </div>

            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center shadow-educational animate-pulse">
              <span className="text-white text-lg">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
