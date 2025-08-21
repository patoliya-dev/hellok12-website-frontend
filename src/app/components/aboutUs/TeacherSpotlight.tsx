"use client";

import React from "react";
import Icon from "../ui/Icon";

// TeacherSpotlight Component
const TeacherSpotlight: React.FC = () => {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teacher Selection Process */}
        <div className="rounded-3xl p-8 lg:p-12 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Teacher Selection Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"We maintain the highest standards to ensure every teacher on our platform is qualified, experienced, and passionate about education."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Application Review",
                description:
                  "Comprehensive evaluation of credentials and experience",
                icon: "FileText",
              },
              {
                step: "02",
                title: "Qualification Verification",
                description: "Thorough verification of certificates and degrees",
                icon: "Shield",
              },
              {
                step: "03",
                title: "Teaching Assessment",
                description: "Live demonstration and teaching methodology evaluation",
                icon: "Video",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous training and performance monitoring",
                icon: "Users",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft border border-border"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Icon name={process.icon} size={20} className="text-primary" />
                </div>

                <div className="text-xs font-bold text-secondary mb-2">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSpotlight;
