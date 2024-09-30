import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Package, Plane, Percent } from 'lucide-react'
import family from '@/static/family.jpg'
import friend from '@/static/friend.jpg'
import student from '@/static/student.jpg'
import bali from '@/static/bali.jpg'
import tuiCruise from '@/static/tui-cruise.jpg'
import maldives from '@/static/maldives.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400">Experience Unforgettable Adventures</h1>
          <p className="text-xl mb-10 text-white max-w-2xl mx-auto">Discover amazing odyssey for families, friends, and students.</p>
          <Link href="#featured-tours" className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition duration-300 inline-block">
            Explore Odyssey
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400">Our Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Family Adventures', description: 'Create lasting memories with your loved ones.', image: family },
              { title: 'Friend Getaways', description: 'Unforgettable trips with your best buddies.', image: friend },
              { title: 'Student Explorations', description: 'Educational and fun tours for students.', image: student }
            ].map((experience, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image 
                  src={experience.image}
                  alt={experience.title} 
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{experience.title}</h3>
                  <p className="text-gray-200">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400">Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[{
                name: 'Explore Bali',
                description: 'Discover Bali\'s lush landscapes, crystal-clear waters, ancient temples, and warm hospitality.',
                image: bali
              }, {
                name: 'Around the World',
                description: 'Embark on a journey of a lifetime with Mein Schiff cruise, exploring the world\'s most breathtaking destinations in style and comfort.',
                image: tuiCruise
              }, {
                name: 'Maldives Getaway',
                description: 'Escape to a tropical paradise with crystal-clear waters, pristine beaches, and luxurious resorts.',
                image: maldives
              }].map(({name, description, image}, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <Image 
                  src={image} 
                  alt={name} 
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
                  <p className="text-gray-200 mb-4">{description}</p>
                  <Link href="#" className="text-teal-300 font-semibold flex items-center group-hover:text-teal-200 transition duration-300">
                    Experience now <ArrowRight className="ml-2 transition duration-300 group-hover:translate-x-1" size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Users, label: 'Happy Customers', value: '10,000+' },
              { icon: Package, label: 'Packages Sold', value: '500+' },
              { icon: Plane, label: 'Destinations', value: '50+' },
              { icon: Percent, label: 'Satisfaction Rate', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-teal-500 dark:text-teal-400 transition duration-300 group-hover:scale-110" />
                <h3 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}