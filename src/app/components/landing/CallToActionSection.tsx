"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { FC } from "react";
import Image from "next/image";

const CallToActionSection: FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/authentication-login-register");
  };

  const handleFindTeacher = () => {
    router.push("/teacher-search-discovery");
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/callToActionSection/bg.png"
          alt="Decorative background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Start Your Child&apos;s
            <span className="block text-yellow-300">Language Adventure?</span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of families worldwide who trust HelloK12 for their
            children&apos;s language learning journey. Start with a free trial
            lesson today!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              variant="secondary"
              size="xl"
              onClick={handleGetStarted}
              iconName="Sparkles"
              iconPosition="left"
              className="text-lg px-10 py-5 shadow-educational-xl hover:shadow-educational-xl hover-lift bg-white text-primary hover:bg-gray-50"
            >
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={handleFindTeacher}
              iconName="Search"
              iconPosition="left"
              className="text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary"
            >
              Browse Teachers
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Safe & Secure
              </h3>
              <p className="text-white/80 text-sm">
                Safe, secure learning environment with verified teachers and data privacy protections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Flexible Schedule
              </h3>
              <p className="text-white/80 text-sm">
                Learn at your own pace with flexible timing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Certified Teachers
              </h3>
              <p className="text-white/80 text-sm">
                Learn from qualified native speakers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Gamepad" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Curriculum-aligned games
              </h3>
              <p className="text-white/80 text-sm">
                Reinforce language skills with fun, curriculum-aligned games.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">
                Track Progress
              </h3>
              <p className="text-white/80 text-sm">
                Monitor learning progress with detailed reports
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span className="text-sm">10,000+ Happy Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={20} />
              <span className="text-sm">500+ Certified Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} />
              <span className="text-sm">200+ Languages</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} />
              <span className="text-sm">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
