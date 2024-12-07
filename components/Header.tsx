'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

const features: NavItem[] = [
  { label: 'Quiz', href: '#quiz' },
  { label: 'Survey', href: '#survey' },
  { label: 'Live Poll', href: '#live-poll' },
  { label: 'Feedback', href: '#feedback' },
  { label: 'AI Agenda Planner', href: '#ai-agenda-planner' }
]

const resources: NavItem[] = [
  { label: 'Blogs', href: '#blogs' },
  { label: 'Stories', href: '#stories' },
  { label: 'FAQs', href: '#faqs' }
]

export default function Header() {
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<'features' | 'resources' | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleDropdownToggle = (dropdown: 'features' | 'resources') => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    router.push(path)
  }

  const DropdownMenu = ({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) => (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50"
          ref={dropdownRef}
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-base text-gray-700 hover:bg-emerald-50 hover:text-emerald-600
                         transition-colors duration-200"
                onClick={() => {
                  setActiveDropdown(null)
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-emerald-700/95 backdrop-blur-sm' : 'bg-emerald-700'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/placeholder.svg"
                alt="Swyyp Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-white hover:text-emerald-100 transition-colors tracking-tight">
              Swyyp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle('features')}
                className="flex items-center text-white hover:text-emerald-100 transition-colors
                         text-lg font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400
                         focus:ring-offset-2 focus:ring-offset-emerald-700 rounded-md px-3 py-2"
              >
                Features
                <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  activeDropdown === 'features' ? 'rotate-180' : ''
                }`} />
              </button>
              <DropdownMenu items={features} isOpen={activeDropdown === 'features'} />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => handleDropdownToggle('resources')}
                className="flex items-center text-white hover:text-emerald-100 transition-colors
                         text-lg font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400
                         focus:ring-offset-2 focus:ring-offset-emerald-700 rounded-md px-3 py-2"
              >
                Resources
                <ChevronDown className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              <DropdownMenu items={resources} isOpen={activeDropdown === 'resources'} />
            </div>

            <Link
              href="#pricing"
              className="text-white hover:text-emerald-100 transition-colors text-lg font-medium px-3 py-2"
            >
              Pricing
            </Link>

            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => handleNavigation('/login')}
                className="text-white hover:text-emerald-100 transition-colors text-lg font-medium
                         focus:outline-none focus:ring-2 focus:ring-emerald-400
                         focus:ring-offset-2 focus:ring-offset-emerald-700 rounded-md px-4 py-2"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => handleNavigation('/signup')}
                className="bg-white text-emerald-600 hover:bg-emerald-50 transition-colors
                         text-lg font-medium px-6 py-2 rounded-md shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-emerald-400
                         focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-white hover:text-emerald-100
                     focus:outline-none focus:ring-2 focus:ring-emerald-400
                     focus:ring-offset-2 focus:ring-offset-emerald-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-emerald-600/20"
            >
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle('features')}
                    className="flex items-center justify-between w-full text-white hover:text-emerald-100
                             transition-colors text-lg font-medium px-2 py-2"
                  >
                    Features
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === 'features' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === 'features' && (
                    <div className="pl-4 space-y-2">
                      {features.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-emerald-100 hover:text-white transition-colors
                                   text-base py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle('resources')}
                    className="flex items-center justify-between w-full text-white hover:text-emerald-100
                             transition-colors text-lg font-medium px-2 py-2"
                  >
                    Resources
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {activeDropdown === 'resources' && (
                    <div className="pl-4 space-y-2">
                      {resources.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-emerald-100 hover:text-white transition-colors
                                   text-base py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#pricing"
                  className="block text-white hover:text-emerald-100 transition-colors
                           text-lg font-medium px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                <div className="pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={() => handleNavigation('/login')}
                    className="block w-full text-white hover:text-emerald-100 transition-colors
                             text-lg font-medium px-2 py-2 text-left"
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation('/signup')}
                    className="block w-full bg-white text-emerald-600 hover:bg-emerald-50
                             transition-colors text-lg font-medium px-4 py-2 rounded-md"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}