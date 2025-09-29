"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation"
import Icon from "./Icon"
import Button from "./Button"

interface NavigationItem {
  label: string
  path: string
  icon: string
}

const PublicNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems: NavigationItem[] = [
    { label: "Home", path: "/", icon: "Home" },
    { label: "Find Teachers", path: "/teacher-search-discovery", icon: "Search" },
    { label: "About Us", path: "/about-us", icon: "Info" },
    { label: "Contact Us", path: "/contact-us", icon: "HelpCircle" },
  ]

  const isActivePath = (path: string): boolean => {
    if (path?.startsWith("#")) return false
    return pathname === path
  }

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false)
  }

  const handleAuthNavigation = (path: string): void => {
    window.location.href = `https://dev-app.hellok12.com/login#${path || ''}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border shadow-header-bottom">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
            <Image
              src="/logo.png" // relative to /public
              alt="HelloK12 Logo"
              width={125}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                href={item?.path}
                className={`rounded-md flex items-center space-x-1 px-3 py-2 rounded-educational text-sm font-medium transition-educational hover:bg-muted ${isActivePath(item?.path) ? "text-primary bg-primary/10" : "text-text-secondary hover:text-foreground"
                  }`}
              >
                {/* <Icon name={item?.icon} size={16} /> */}
                <span>{item?.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={() => {
              handleAuthNavigation('signin')
            }}>
              Sign In
            </Button>
            <Button variant="default" size="sm" onClick={() => {
              handleAuthNavigation('signup')
            }}>
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
            <div className="px-4 py-6 space-y-4">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  href={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-educational text-base font-medium transition-educational hover:bg-muted ${isActivePath(item?.path)
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-foreground"
                    }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => {
                    closeMobileMenu()
                    handleAuthNavigation('signin')
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => {
                    closeMobileMenu()
                    handleAuthNavigation('signup')
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default PublicNavigation
