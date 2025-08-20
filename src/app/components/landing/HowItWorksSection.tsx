import type React from "react"
import Icon from "../ui/Icon"

interface Step {
  id: number
  title: string
  description: string
  icon: string
  color: string
  bgColor: string
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Select A Language",
      description:
        "Choose from 200+ languages available on our platform. From Spanish to Mandarin, we have native speakers ready to teach.",
      icon: "Globe",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "Find A Teacher",
      description:
        "Browse certified teachers, read reviews, and select the perfect match for your child's learning style and schedule.",
      icon: "Search",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "Attend Classes",
      description:
        "Join interactive classes designed for children. Based on your preference, classes can either be online or in-person.",
      icon: "Video",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      title: "Learn Through Play",
      description:
        "Engage with fun, curriculum-aligned games to reinforce language skills learnt in class.",
      icon: "Gamepad2",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "Track Progress",
      description:
        "Monitor your child's learning journey with detailed progress reports, achievements, and milestone celebrations.",
      icon: "TrendingUp",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">How It Works</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {"Getting started with language learning is simple. Follow these five easy steps to begin your child's multilingual journey."}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps?.map((step, index) => (
            <div key={step?.id} className="relative">
              {/* Connection Line (Desktop) */}
              {index < steps?.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
              )}

              {/* Step Card */}
              <div
                className={`relative z-10 ${step?.bgColor} rounded-3xl p-8 text-center transition-educational hover:shadow-educational-lg hover-lift`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                  {step?.id}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step?.color} rounded-2xl flex items-center justify-center shadow-educational`}
                >
                  <Icon name={step?.icon} size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{step?.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-medium">
            <Icon name="Sparkles" size={16} />
            <span>{"Start your child's language journey today!"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
