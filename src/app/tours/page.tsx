'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Star, Clock } from 'lucide-react'
import paris from '@/static/paris.jpg'
import tokyo from '@/static/tokyo.jpg'
import newyork from '@/static/newyork.jpg'
import bali from '@/static/bali-tour.jpg'
import africa from '@/static/africa.jpg'
import rome from '@/static/Rome.jpg'
import greek from '@/static/greek.jpg'
import bangkok from '@/static/bangkok.jpg'
import machu from '@/static/machu.jpg'
import dubai from '@/static/dubai.jpg'
import northlight from '@/static/northlight.jpg'
import australia from '@/static/australia.jpg'
import incatrail from '@/static/incatrail.jpg'
import maldiveshopping from '@/static/maldiveshopping.jpg'
import moroccan from '@/static/moroccan.jpg'

interface TourCardProps {
  title: string;
  image: StaticImageData;
  price: number;
  originalPrice?: number; // Added to store the original price before promotion
  rating: number;
  description: string;
  link: string;
}

const TourCard = ({ title, image, price, originalPrice, rating, description, link }: TourCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
    <div className="relative">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover transition duration-500 ease-in-out hover:scale-105" />
    </div>
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-col justify-between items-start">
        {originalPrice && <span className="text-gray-600 dark:text-gray-300 text-sm line-through mb-1">${originalPrice}</span>}
        <span className="text-teal-500 dark:text-teal-400 font-bold text-xl">${price}</span>
        <div className="flex items-center mt-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600 dark:text-gray-300">{rating}</span>
        </div>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2 overflow-hidden">{description}</p>
    </div>
  </div>
)

type TimeDiff = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer = ({ endTime }: { endTime: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft(): TimeDiff {
    const difference = +new Date(endTime) - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft()
      if (Object.keys(newTimeLeft).length > 0) {
        setTimeLeft(newTimeLeft)
      }
    }, 1000)

    return () => clearTimeout(timer)
  })

  if (!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 text-sm bg-red-500 text-white">
        <Clock className="w-4 h-4" />
        <span className="font-semibold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
    </div>
  )
}

export default function Tours() {
  const bestSellers: TourCardProps[] = [
    { title: "Paris Getaway", image: paris, price: 1299, rating: 4.8, link: "#", description: "Experience the City of Light with a romantic getaway to Paris." },
    { title: "Tokyo Adventure", image: tokyo, price: 1599, rating: 4.9, link: "#", description: "Discover the vibrant culture and cutting-edge technology of Tokyo." },
    { title: "New York City Tour", image: newyork, price: 999, rating: 4.7, link: "#", description: "Explore the iconic landmarks and bustling streets of the Big Apple." },
    { title: "Bali Paradise", image: bali, price: 1099, rating: 4.8, link: "#", description: "Relax on the stunning beaches and immerse in the tranquil atmosphere of Bali." },
    { title: "African Safari", image: africa, price: 2499, rating: 4.9, link: "#", description: "Embark on a thrilling adventure through the wild savannas of Africa." },
  ]

  const flashSales = [
    { title: "Rome in a Week", image: rome, price: 899, originalPrice: 999, rating: 4.6, link: "#", endTime: "2024-12-01T23:59:59", description: "Explore the Eternal City's iconic landmarks and indulge in delicious Italian cuisine." },
    { title: "Greek Islands Cruise", image: greek, price: 1399, originalPrice: 1599, rating: 4.7, link: "#", endTime: "2024-12-02T23:59:59", description: "Sail through the crystal-clear waters of the Aegean Sea and discover the charm of Greece's islands." },
    { title: "Bangkok Foodie Tour", image: bangkok, price: 699, originalPrice: 799, rating: 4.5, link: "#", endTime: "2024-12-03T23:59:59", description: "Taste the flavors of Thailand on a culinary journey through Bangkok's bustling streets." },
    { title: "Machu Picchu Trek", image: machu, price: 1799, originalPrice: 1999, rating: 4.8, link: "#", endTime: "2024-12-04T23:59:59", description: "Hike the Inca Trail to the mystical city of Machu Picchu, a true wonder of the ancient world." },
    { title: "Dubai Luxury Experience", image: dubai, price: 2199, originalPrice: 2399, rating: 4.7, link: "#", endTime: "2024-12-05T23:59:59", description: "Live like royalty in Dubai, with luxurious accommodations and exclusive experiences." },
  ]

  const upcomingTours = [
    { title: "Northern Lights Adventure", image: northlight, price: 2299, rating: 4.9, link: "#", description: "Witness the breathtaking spectacle of the Northern Lights in the Arctic wilderness." },
    { title: "Australian Outback Journey", image: australia, price: 2599, rating: 4.8, link: "#", description: "Embark on a rugged adventure through the Australian Outback, exploring its unique landscapes and wildlife." },
    { title: "Inca Trail Expedition", image: incatrail, price: 1899, rating: 4.7, link: "#", description: "Follow in the footsteps of the Incas on a challenging trek to Machu Picchu, Peru." },
    { title: "Maldives Island Hopping", image: maldiveshopping, price: 2799, rating: 4.9, link: "#", description: "Relax on pristine beaches and snorkel in crystal-clear waters on a tropical island-hopping adventure." },
    { title: "Moroccan Desert Safari", image: moroccan, price: 1599, rating: 4.6, link: "#", description: "Explore the vibrant souks and majestic dunes of Morocco on a thrilling desert safari." },
  ]

  const customerFeedback = [
    { name: "John D.", comment: "The Paris Getaway was absolutely magical! Every detail was perfectly planned.", rating: 5 },
    { name: "Sarah M.", comment: "I never thought I'd enjoy a city tour so much. New York was amazing!", rating: 5 },
    { name: "Mike R.", comment: "The African Safari exceeded all my expectations. Truly a once-in-a-lifetime experience.", rating: 5 },
    { name: "Emily L.", comment: "Bali was like a dream. I can't wait to book my next trip with TUI Odyssey!", rating: 4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400">
            Our Tours
          </h1>
          
          {/* Best Sellers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Best Sellers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestSellers.map((tour, index) => (
                <TourCard key={index} {...tour} />
              ))}
            </div>
          </div>

          {/* Flash Sales Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Flash Sales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flashSales.map((tour, index) => (
                <div key={index} className="relative">
                  <TourCard {...tour} />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
                    <CountdownTimer endTime={tour.endTime} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tours Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Upcoming Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingTours.map((tour, index) => (
                <TourCard key={index} {...tour} />
              ))}
            </div>
          </div>

          {/* Customer Feedback Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customerFeedback.map((feedback, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {feedback.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">{feedback.name}</h3>
                      <div className="flex">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}