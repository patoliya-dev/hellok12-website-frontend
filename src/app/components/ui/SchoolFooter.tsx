"use client"

import React from "react"
import Link from "next/link"

const SchoolFooter: React.FC = () => {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
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

export default SchoolFooter
