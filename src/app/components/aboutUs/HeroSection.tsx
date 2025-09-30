"use client";

import React from "react";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <section className="from-primary/5 via-secondary/5 to-accent/5 py-20 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6">
              {"Hello, Hola, Ni Hao, Bonjour, Konnichiwa, Guten Tag!"}
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {"We understand how difficult it can be to find an educational experience that is both fun and effective - that's why we created a platform that’s not just about learning new vocabulary but also about helping children build confidence, discover new cultures, and develop real-world communication skills."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleNavigation("https://dev-app.hellok12.com/login#signup")}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* Diverse learners representation */}
                <div className="space-y-4">
                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Icon name="User" size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Maria</div>
                        <div className="text-xs text-muted-foreground">Spanish Teacher</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-secondary fill-current" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">4.9</span>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Globe" size={16} className="text-purple" />
                      <span className="text-sm font-medium text-foreground">200+ Languages</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Available worldwide</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Icon name="User" size={16} className="text-purple" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">Ahmed</div>
                        <div className="text-xs text-muted-foreground">Arabic Teacher</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-secondary fill-current" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">4.8</span>
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-4 shadow-soft border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Clock" size={16} className="text-secondary" />
                      <span className="text-sm font-medium text-foreground">24/7 Available</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Learn anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default HeroSection;
