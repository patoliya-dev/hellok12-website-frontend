import Image from "next/image"
import type React from "react"

const ContactHero: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-10">

          <Image
            src="/assets/images/contactUs/hero-icon.png"
            alt="HelloK12 Logo"
            className="center mx-auto mb-6"
            width={32}
            height={32}
            priority
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">Contact Us</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {"We're here to help you on your language learning journey. Whether you're a teacher looking to join our platform or a student seeking the perfect instructor, we'd love to hear from you."}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
              24h
            </h3>
            <p className="text-sm">
              Response Time
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
              500+
            </h3>
            <p className="text-sm">
              Teachers Supported
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
              98%
            </h3>
            <p className="text-sm">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
