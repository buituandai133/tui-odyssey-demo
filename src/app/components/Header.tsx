'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Globe, Menu, X, Home, Package, Users, Mail } from 'lucide-react'
import logo from '@/static/logo.png'
import Image from 'next/image'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState('en')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  if (!mounted) {
    return null
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-teal-500/30 dark:bg-teal-800/30 backdrop-blur-md shadow-md' 
          : 'bg-teal-400 dark:bg-teal-700'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <Link href="/" className="text-2xl font-bold">
          <Image src={logo} height={40} alt='logo' />
        </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Home</Link></li>
              <li><Link href="/tours" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Tours</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          {/* Theme and Language Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 flex items-center"
            >
              <Globe size={20} className="mr-1 text-gray-600 dark:text-gray-300" />
              <span className="text-sm text-gray-600 dark:text-gray-300">{language === 'en' ? 'EN' : 'DE'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <div className='text-right'>
              <button
                className="mb-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav>
              <ul className="space-y-4">
                <li><Link href="/" className="flex items-center justify-center gap-4 space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300" onClick={toggleMenu}><Home size={20} />Home</Link></li>
                <li><Link href="/tours" className="flex items-center justify-center gap-4 space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300" onClick={toggleMenu}><Package size={20} />Tours</Link></li>
                <li><Link href="/about" className="flex items-center justify-center gap-4 space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300" onClick={toggleMenu}><Users size={20} />About Us</Link></li>
                <li><Link href="/contact" className="flex items-center justify-center gap-4 space-x-2 p-2 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300" onClick={toggleMenu}><Mail size={20} />Contact</Link></li>
              </ul>
            </nav>
            <hr className="my-4 border-t border-gray-200 w-full" />
            <div className="flex flex-col items-center space-y-4 mt-8">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-600" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 flex items-center"
              >
                <Globe size={20} className="mr-1 text-gray-600 dark:text-gray-300" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{language === 'en' ? 'EN' : 'DE'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}