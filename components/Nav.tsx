'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Code2Icon, Menu, X } from 'lucide-react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

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
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Get Started Button */}
            <Button 
              className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
            >
              <Link href={'/signup'}>Get Started</Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                }`} />
                <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`relative ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50' 
            : 'bg-white/98 backdrop-blur-xl'
        } shadow-lg`}>
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          
          <div className="relative px-4 py-6 space-y-2">
            {/* Navigation Links with staggered animation */}
            {[
              { href: '/', label: 'Home', delay: 'delay-75' },
              { href: '/about', label: 'About', delay: 'delay-100' },
              { href: '/blog', label: 'Blog', delay: 'delay-125' },
              { href: '/contact', label: 'Contact', delay: 'delay-150' }
            ].map((item, index) => (
              <div
                key={item.href}
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen 
                    ? `translate-y-0 opacity-100 ${item.delay}` 
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <Link
                  href={item.href}
                  className="group flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>
            ))}
            
            {/* Divider */}
            <div className={`transform transition-all duration-500 ease-out delay-200 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
            
            {/* Get Started Button */}
            <div className={`transform transition-all duration-500 ease-out delay-300 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="px-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg shadow-blue-500/25 rounded-xl py-3 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={'/signup'} className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </nav>
  )
}


