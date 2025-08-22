"use client";

import React, { useState } from "react";
import Icon from "../ui/Icon";
import SearchBar from "../ui/SearchBar";

export interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  enableSearch?: boolean;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to common questions about HelloK12",
  enableSearch = true,
}) => {
  const [visibleCount, setVisibleCount] = useState(5); // show 3 initially

  const handleSearch = (term: string): void => {
    console.log(`Searching FAQs for: ${term}`);
    // TODO: Add real search logic here (filter faqs or call API)
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, faqs.length));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Search Bar */}
        {enableSearch && (
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6"
            >
              <h3 className="font-semibold text-foreground mb-3 flex items-start space-x-2">
                <Icon
                  name="HelpCircle"
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span>{faq.question}</span>
              </h3>
              <p className="text-muted-foreground ml-7">{faq.answer}</p>
            </div>
          ))}

          {/* Reveal FAQs one by one */}
          {visibleCount < faqs.length && (
            <div className="text-center">
              <button
                onClick={handleViewMore}
                className="text-primary hover:text-primary/80 transition-educational text-sm cursor-pointer"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
