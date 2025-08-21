"use client";

import React from "react";
import Icon from "../../components/ui/Icon";
import Image from "next/image";

// Define TypeScript type for mission points
interface MissionPoint {
  icon: string;
  title: string;
  description: string;
  image: string; // For future use, e.g., imported images
}

const MissionSection: React.FC = () => {
  // Mission points array
  const missionPoints: MissionPoint[] = [
    {
      icon: "Target",
      title: "Our Mission",
      description:
        "To create a global community where language learning is accessible, personalized, and transformative for every child, regardless of their background or location.",
      image: "mission", // can be replaced with imported image
    },
    {
      icon: "Eye",
      title: "Our Vision",
      description:
        "A world where language barriers dissolve, cultures connect, and every child has the opportunity to become a global citizen.",
      image: "vision",
    },
    {
      icon: "Heart",
      title: "Our Values",
      description:
        "Excellence in education, cultural respect, learn through play, and an unwavering commitment to success drive everything we do.",
      image: "values",
    },
  ];

  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Compass" size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {"HelloK12 was born from a simple belief: learning a new language should be fun, engaging, and accessible for kids around the globe."}
          </p>
        </div>

        {/* Mission Points */}
        <div className="space-y-16 lg:space-y-20">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="w-12 h-12 flex items-center mb-6">
                  <Icon name={point.icon} size={24} className="text-primary" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {point.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6">
                  {point.description}
                </p>

                {/* Conditional content based on icon */}
                {point.icon === "Target" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        10,000+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Lives Transformed
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        150+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Countries Reached
                      </div>
                    </div>
                  </div>
                )}

                {point.icon === "Eye" && (
                  <div className="space-y-3">
                    {[
                      "Breaking down language barriers globally",
                      "Fostering cross-cultural understanding",
                      "Empowering confident communication",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {point.icon === "Heart" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "Award", label: "Excellence" },
                      { icon: "Users", label: "Learn Through Play" },
                      { icon: "Globe", label: "Cultural Respect" },
                      { icon: "TrendingUp", label: "Student Success" },
                    ].map((value, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 bg-muted/20 rounded-lg"
                      >
                        <Icon name={value.icon} size={18} className="text-primary" />
                        <span className="font-medium text-foreground">{value.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Visual Element */}
              <div className={`${(index % 2 === 1 && point.icon != "Eye") ? "lg:col-start-1" : ""}`}>
                <div className="from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-border/50">
                  <div className="space-y-4">
                    {point.icon === "Target" && (
                      <div className="space-y-4">
                        {[
                          { icon: "BookOpen", label: "Personalized Learning", color: "text-primary" },
                          { icon: "Users", label: "Global Community", color: "text-purple" },
                          { icon: "Zap", label: "Instant Results", color: "text-secondary" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 bg-card rounded-2xl shadow-soft border border-border"
                          >
                            <div className="flex items-center space-x-3">
                              <Icon name={item.icon} size={20} className={item.color} />
                              <span className="font-medium text-foreground">{item.label}</span>
                            </div>
                            <Icon name="Check" size={16} className="text-accent" />
                          </div>
                        ))}
                      </div>
                    )}

                    {point.icon === "Eye" && (
                      <div className="relative">
                        <Image
                          src="/assets/images/aboutUs/vision.png"
                          alt="HelloK12 Logo"
                          className="center mx-auto mb-6"
                          width={407}
                          height={285}
                          priority
                        />
                      </div>
                    )}

                    {point.icon === "Heart" && (
                      <div className="text-center">
                        <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
                          <Icon
                            name="Heart"
                            size={40}
                            className="text-primary mx-auto mb-4"
                          />
                          <h4 className="font-semibold text-foreground mb-2">
                            Student-Centered Approach
                          </h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Every decision we make puts our learners first
                          </p>
                          <div className="flex justify-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">98%</div>
                              <div className="text-xs text-muted-foreground">Satisfaction</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">4.9</div>
                              <div className="text-xs text-muted-foreground">Rating</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
