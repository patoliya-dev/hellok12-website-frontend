"use client"
import React from "react";
import Icon from "../ui/Icon";

interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

const TrustSignals: React.FC = () => {
  const trustItems: TrustItem[] = [
    {
      icon: "Shield",
      title: "Secure Payments",
      description: "SSL encrypted transactions with trusted payment processors",
    },
    {
      icon: "Award",
      title: "Certified Teachers",
      description: "All educators verified with background checks and credentials",
    },
    {
      icon: "Lock",
      title: "Privacy Protected",
      description: "COPPA compliant platform with strict data protection policies",
    },
    {
      icon: "Users",
      title: "50,000+ Students",
      description: "Trusted by families and schools across the United States",
    },
  ];

  return (
    <div className="bg-muted/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-8">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
            Trusted by Educators & Families
          </h3>
          <p className="text-sm text-muted-foreground">
            Your security and satisfaction are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon} size={20} className="text-accent" />
              </div>
              <h4 className="font-medium text-sm text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
