"use client"
import React from "react";
import Icon from "../ui/Icon";

interface Badge {
  text: string;
  className?: string;
}

interface PricingCardProps {
  title: string;
  features?: string[];
  isPopular?: boolean;
  badge?: Badge | null;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  features = [],
  isPopular = false,
  badge = null,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-card border border-border rounded-lg p-6 transition-micro hover:shadow-elevation-2 ${isPopular ? "border-primary shadow-elevation-1" : ""
        } ${className}`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Custom Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${badge?.className}`}
          >
            {badge?.text}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-heading font-bold text-xl text-primary mb-2">
          {title}
        </h3>
      </div>

      {/* Features List */}
      <div className="space-y-3 mb-6">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon
              name="Check"
              size={16}
              className="text-accent flex-shrink-0 mt-0.5"
            />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
