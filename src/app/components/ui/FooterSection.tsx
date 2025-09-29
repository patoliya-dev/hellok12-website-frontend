"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image";
import Icon from "./Icon"

interface FooterLink {
  label: string
  path: string
}

interface FooterSectionType {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  icon: string
  url: string
}

const FooterSection: React.FC = () => {
  const currentYear: number = new Date().getFullYear()

  const footerSections: FooterSectionType[] = [
    {
      title: "Platform",
      links: [
        { label: "Find Teachers", path: "/teacher-search-discovery" },
        { label: "Become a Teacher", path: "https://dev-app.hellok12.com/login#signup" },
        { label: "Pricing", path: "/pricing" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact-us" },
      ],
    },
  ]

  const socialLinks: SocialLink[] = [
    { name: "Facebook", icon: "Facebook", url: "#facebook" },
    { name: "Twitter", icon: "Twitter", url: "#twitter" },
    { name: "Instagram", icon: "Instagram", url: "#instagram" },
    { name: "YouTube", icon: "Youtube", url: "#youtube" },
    { name: "LinkedIn", icon: "Linkedin", url: "#linkedin" },
  ]

  const languages: string[] = [
    "english",
    "spanish",
    "mandarin",
    "japanese",
    "french",
  ]

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/landing-page" className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.png"
                alt="HelloK12 Logo"
                width={161}
                height={52}
                priority
              />
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Connecting children with language teachers worldwide. Discover 200+ languages through engaging, safe, and interactive learning experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-4 lg:mb-6 flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-educational"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>

            {/* Popular Languages */}
            <div className="mt-2 border-t border-gray-800 pt-2">
              <h3 className="font-heading font-semibold text-lg mb-4">Popular Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="flex items-center px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-educational"
                  >
                    <Image
                      src={`/assets/images/flagIcons/${language}.svg`}
                      alt={`${language} flag`}
                      width={18}
                      height={12}
                      priority
                    />
                    <span className="ml-2 capitalize">{language}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links + Newsletter on same row */}
          <div className="lg:col-span-1 flex flex-col lg:flex-col justify-between gap-12">
            {/* Footer Links */}
            <div className="flex flex-col lg:flex-row gap-16">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-heading font-semibold text-lg mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.path}
                          className="text-gray-300 hover:text-white transition-educational text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col gap-4 lg:items-start">
              {/* Text */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 text-sm">
                  Stay up to date with new languages, teachers, and learning resources.
                </p>
              </div>

              {/* Input + Button */}
              <div className="flex flex-row w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                />
                <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-r-lg transition-educational flex items-center justify-center w-auto">
                  <Icon name="Send" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-muted-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} HelloK12. All rights reserved.</span>
            </div>

            <div className="mt-4 lg:mt-0 flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Link href="#privacy" className="hover:text-white transition-educational">
                  Privacy Policy
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Link href="#terms" className="hover:text-white transition-educational">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
