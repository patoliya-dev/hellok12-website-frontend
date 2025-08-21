"use client";

import React, { useState, useEffect, useRef } from "react";
import Icon from "../../components/ui/Icon";

interface Stat {
  icon: string;
  finalValue: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const stats: Stat[] = [
    {
      icon: "Users",
      finalValue: 25000,
      suffix: "+",
      label: "Active Learners",
      description: "Students actively learning on our platform",
      color: "text-primary",
    },
    {
      icon: "GraduationCap",
      finalValue: 1500,
      suffix: "+",
      label: "Qualified Teachers",
      description: "Certified language instructors worldwide",
      color: "text-purple",
    },
    {
      icon: "Globe",
      finalValue: 50,
      suffix: "+",
      label: "Languages Offered",
      description: "From Spanish to Mandarin, Arabic to French",
      color: "text-secondary",
    },
    {
      icon: "Award",
      finalValue: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Students achieve their learning goals",
      color: "text-accent",
    },
    {
      icon: "Clock",
      finalValue: 500000,
      suffix: "+",
      label: "Learning Hours",
      description: "Total hours of language instruction delivered",
      color: "text-primary",
    },
    {
      icon: "MapPin",
      finalValue: 180,
      suffix: "+",
      label: "Countries",
      description: "Students and teachers from around the world",
      color: "text-purple",
    },
  ];

  interface AnimatedCounterProps {
    finalValue: number;
    suffix?: string;
    duration?: number;
  }

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    finalValue,
    suffix = "",
    duration = 2000,
  }) => {
    const [currentValue, setCurrentValue] = useState<number>(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const startValue = 0;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(
          easeOutQuart * (finalValue - startValue) + startValue
        );

        setCurrentValue(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }, [finalValue, duration, isVisible]);

    const formatNumber = (num: number): string => {
      if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "M";
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + "K";
      }
      return num.toString();
    };

    return (
      <span className="text-3xl lg:text-4xl font-bold">
        {formatNumber(currentValue)}
        {suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pb-20 lg:pb-28 pt-4 lg:pt-7 bg-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Icon name="TrendingUp" size={32} className="text-accent" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These achievements represent more than statistics—they&apos;re proof
            of the transformative power of quality language education and the
            strength of our global community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={stat.icon} size={32} className={stat.color} />
                </div>

                <div className={`${stat.color} mb-2`}>
                  <AnimatedCounter
                    finalValue={stat.finalValue}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.label}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Recognition & Achievements
            </h3>
            <p className="text-muted-foreground">
              Our commitment to excellence has been recognized by industry
              leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Award", title: "Best EdTech Platform", year: "2024" },
              { icon: "Star", title: "Top Rated App", year: "2024" },
              { icon: "Trophy", title: "Innovation Award", year: "2023" },
              { icon: "Medal", title: "Excellence in Education", year: "2023" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
