"use client"
import React, { ReactNode } from "react";
import Icon from "../ui/Icon";

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string; // you can later replace with union type of allowed icons
  iconColor?: string;
  children: ReactNode;
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  description,
  icon,
  iconColor = "text-primary",
  children,
  className = "",
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-8">
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={icon} size={24} className={iconColor} />
            </div>
          </div>
        )}

        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-3">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
        )}

        {description && (
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {children}
      </div>
    </section>
  );
};

export default PricingSection;
