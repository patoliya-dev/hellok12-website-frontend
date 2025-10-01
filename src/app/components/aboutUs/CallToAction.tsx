"use client";

import React from "react";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

const CallToAction: React.FC = () => {
  const handleNavigation = (path: string, role?: string, userType?: string) => {
    window.location.href = `${path}${role ? '|' + role : ''}${userType ? '|' + userType : ''}`;
  };

  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-educational-gradient rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/2 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <Icon name="Rocket" size={40} color="white" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {"Ready to Start Your Language Learning Journey?"}
            </h2>

            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-white/90">
              {"Join thousands of successful learners who have transformed their lives through language education. Whether you're a complete beginner or looking to perfect your skills, we're here to support you every step of the way."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleNavigation("https://dev-app.hellok12.com/login#signup")}
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90 cursor-pointer"
              >
                Start Learning Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigation("/landing-how-it-works")}
                iconName="Play"
                iconPosition="left"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                See How It Works
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-white" />
                <span className="text-sm text-white/90">Free consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-white" />
                <span className="text-sm text-white/90">Flexible scheduling</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Check" size={16} className="text-white" />
                <span className="text-sm text-white/90">
                  Money-back guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* For Students */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col justify-between">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="BookOpen" size={32} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Students
              </h3>

              <p className="text-muted-foreground mb-6">
                {"Discover qualified teachers, book personalized sessions, and achieve your language goals with our comprehensive learning platform."}
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Choose from 50+ languages",
                  "Flexible online and in-person options",
                  "Progress tracking and certificates",
                  "24/7 customer support",
                  "Curriculum-aligned games to practice language skills learned in class"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

            </div>
            <Button
              variant="default"
              fullWidth
              onClick={() => handleNavigation("https://dev-app.hellok12.com/login#signup", "student/parent", "student")}
              iconName="UserPlus"
              className="self-end cursor-pointer"
              iconPosition="left"
            >
              Sign Up as Student
            </Button>
          </div>

          {/* For Teachers */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col justify-between">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="GraduationCap" size={32} className="text-purple" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Teachers
              </h3>

              <p className="text-muted-foreground mb-6">
                {"Share your expertise, connect with eager learners worldwide, and build a thriving online teaching business with our teacher-friendly platform."}
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Set your own rates and schedule",
                  "Access to global student network",
                  "Comprehensive teaching tools",
                  "Secure payment processing",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

            </div>
            <Button
              variant="default"
              fullWidth
              onClick={() => handleNavigation("https://dev-app.hellok12.com/login#signup", "teacher")}
              iconName="UserCheck"
              className="self-end cursor-pointer"
              iconPosition="left"
            >
              Become a Teacher
            </Button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Need Help Getting Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is here to help you every step of the way. Get
            answers to your questions and personalized guidance to make the most
            of your LinguaConnect experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => handleNavigation("/contact-us")}
              iconName="MessageSquare"
              iconPosition="left"
              className="cursor-pointer"
            >
              Contact Support
            </Button>
            {/* <Button
              variant="ghost"
              onClick={() => handleNavigation("/faq")}
              iconName="HelpCircle"
              iconPosition="left"
            >
              View FAQ
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
