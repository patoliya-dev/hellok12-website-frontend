"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
import Icon from "./Icon"
import { useParams } from "next/navigation"

interface SchoolHeaderProps {
  schoolLogo?: string
  schoolName?: string
}

const SchoolHeader: React.FC<SchoolHeaderProps> = ({ schoolName, schoolLogo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const params = useParams()
  const { schoolSlug } = params || {}

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const handleAuthNavigation = () => {
    window.location.href = `/${schoolSlug || ""}/auth/login`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border shadow-header-bottom">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link href={`/${schoolSlug || ""}`} className="flex items-center space-x-2">
            <Image src={schoolLogo || "/assets/images/schoolLogo/Adrian_High_School.png"} alt={`${schoolName} Logo`} width={50} height={40} priority />
            <span className="text-lg font-semibold text-foreground">{schoolName}</span>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={handleAuthNavigation}>
              Sign In
            </Button>
            <Button variant="default" size="sm" onClick={handleAuthNavigation}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-educational text-text-secondary hover:text-foreground hover:bg-muted transition-educational"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-educational-lg animate-slide-in-from-top">
            <div className="px-4 py-6 space-y-3">
              <Button
                variant="ghost"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleAuthNavigation()
                }}
              >
                Sign In
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleAuthNavigation()
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default SchoolHeader
