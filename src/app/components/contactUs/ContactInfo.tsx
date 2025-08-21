import React from 'react';
import Icon from '../ui/Icon';

interface ContactDetail {
  icon: string;
  title: string;
  content: string;
  description?: string;
}

const ContactInfo: React.FC = () => {
  const contactDetails: ContactDetail[] = [
    {
      icon: 'Phone',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm EST',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'support@hellok12.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      content: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM EST',
    },
    {
      icon: 'MapPin',
      title: 'Office Address',
      content: 'Seattle, WA 98103' // '123 Learning Street, Suite 456',
      // description: 'New York, NY 10001, USA',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Information Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Contact Information
        </h3>

        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="bg-card rounded-lg border border-border p-4 hover:shadow-soft transition-smooth"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <Icon name={detail.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">
                  {detail.title}
                </h4>
                <p className="text-foreground font-medium mb-1">
                  {detail.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {detail.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ContactInfo;
