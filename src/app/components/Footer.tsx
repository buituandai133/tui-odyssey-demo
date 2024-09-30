import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-teal-500 dark:text-teal-400">
              <Link href="/"><Image src={'/images/logo.png'} height={40} width={91} alt='logo' className="mx-auto md:mx-0" /></Link>
            </h3>
            <p>Discover Your Smile</p>
            <p>Experience Unforgettable Holidays with TUI</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500 dark:text-teal-400">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Home</Link></li>
              <li><Link href="/tours" className="hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Tours</Link></li>
              <li><Link href="/about" className="hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-teal-500 dark:hover:text-teal-400 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500 dark:text-teal-400">Stay Updated</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-teal-500 dark:text-teal-400">Follow Us</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition duration-300"><Facebook /></a>
              <a href="https://twitter.com/TUIGroup" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition duration-300"><Twitter /></a>
              <a href="https://www.instagram.com/tuiuk" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition duration-300"><Instagram /></a>
              <a href="https://www.youtube.com/@TUIGroupCorporate" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition duration-300"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 TUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}