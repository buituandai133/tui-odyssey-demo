import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400">
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-600 dark:text-gray-300">support@odyssey.tui.com</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Office Locations</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-teal-500 dark:text-teal-400 mb-2">New York Office</h3>
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-teal-500 dark:text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        123 Travel Street, Suite 400<br />
                        New York, NY 10001
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-500 dark:text-teal-400 mb-2">Los Angeles Office</h3>
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-teal-500 dark:text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        456 Adventure Avenue, Floor 7<br />
                        Los Angeles, CA 90001
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white" required></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* New Full-width CTA Section */}
      <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'url(/images/dive.jpeg)', filter: 'brightness(120%)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center text-white z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime with our exclusive Odyssey packages.
          </p>
          <Link href="/" className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition duration-300">
            Explore TUI Odyssey
          </Link>
        </div>
      </section>
    </div>
  )
}