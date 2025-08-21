"use client"
import React from 'react';
import Icon from '../ui/Icon';
import Link from 'next/link';
import SearchBar from './SearchBar';

interface FAQ {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: 'What languages do you offer on the platform?',
      answer:
        "We offer a variety of languages, including Spanish, Mandarin, French, Japanese, and more! We’re continuously expanding our language offerings to meet the needs of our diverse community.",
    },
    {
      question: 'What age groups do you cater to?',
      answer:
        "Our platform is designed for children aged 3–18 years. Whether your child is just starting to learn or looking to refine their skills, we have age-appropriate lessons for all levels.",
    },
    {
      question: 'How are classes structured?',
      answer:
        "Classes are structured to be interactive and engaging, combining structured lessons with playful, hands-on activities. We use a mix of live lessons (either online or in-person), games, and real-world scenarios to help children develop practical language skills.",
    },
    {
      question: 'Are the teachers qualified?',
      answer:
        "Yes! All of our teachers are native speakers or fluent in the target language and hold relevant teaching certifications. They are carefully vetted and trained to ensure they create a fun, supportive, and effective learning environment.",
    },
    {
      question: "Can I track my child's progress?",
      answer:
        "Yes! We provide regular progress updates through detailed reports that highlight your child’s achievements, strengths, and areas for growth. You can also communicate directly with teachers to discuss your child’s progress.",
    },
  ];

  const handleSearch = (term: string): void => {
    console.log(`Searching FAQs for: ${term}`);
    // TODO: Add real search logic
  };

  return (
    <section className="py-16 bg-muted/30">
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to common questions about HelloK12
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
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
          <div className='text-center'>
            <Link
              href={""}
              className="text-primary hover:text-primary/80 transition-educational text-sm"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
