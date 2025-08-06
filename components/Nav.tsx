'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Code2Icon } from 'lucide-react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/70 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Code2Icon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Logosus
                </span>
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="mr-2 text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link href={'/signin'}>Sign In</Link>
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
            >
              <Link href={'/signup'}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}