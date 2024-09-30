import Image from 'next/image'
import tuigroup from '@/static/tuigroup.png'
import iso9001 from '@/static/iso-9001.jpg'
import iso14001 from '@/static/iso14001.jpeg'
import travelife from '@/static/travelife.png'
import iata from '@/static/iata.png'

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Mission Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-600 dark:to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Smile</h1>
          <p className="text-xl mb-8">Discover your perfect holiday with TUI, where trusted quality, unique experiences, and sustainable travel meet. Let us bring you unforgettable memories tailored to your every need.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src={tuigroup} alt="Company History" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">A Journey Through Time</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">1923:</span> TUI AG was founded in Germany as a mining company under the name Preussag AG.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">1968:</span> The company began its venture into tourism by acquiring a travel agency, Hummel Reise.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">1997:</span> Preussag's strategic shift was completed by fully focusing on the tourism industry, acquiring multiple travel and tour operators.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">2002:</span> The company rebranded as TUI AG, reflecting its transformation into a global tourism leader.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">2014:</span> TUI Travel PLC, a UK-based subsidiary, merged with its parent company, TUI AG, forming the world's largest leisure, travel, and tourism company.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">2018:</span> TUI continued to expand by investing in cruises, hotels, and sustainable tourism ventures.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">2020:</span> The COVID-19 pandemic hit the tourism sector hard, but TUI successfully recapitalized and recovered.
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2 text-teal-500 dark:text-teal-400">Present:</span> Today, TUI AG continues to lead in travel innovations, sustainability, and digital transformation, serving millions of customers globally.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
                name: 'ISO-9001',
                image: iso9001,
                description: 'ISO 9001 is a globally recognized standard for quality management systems. It ensures that our processes are efficient, effective, and meet customer requirements.'
              }, {
                name: 'ISO-14001',
                image: iso14001,
                description: 'ISO 14001 is an internationally recognized standard for environmental management systems. It ensures that our operations are environmentally responsible and sustainable.'
              }, {
                name: 'Travelife Partner Award',
                image: travelife,
                description: 'The Travelife Partner Award recognizes our commitment to sustainability and responsible tourism practices, ensuring a positive impact on local communities and the environment.'
              }, {
                name: 'IATA',
                image: iata,
                description: 'IATA (International Air Transport Association) certification recognizes our expertise in air travel and our commitment to providing high-quality services to our customers.'
              }].map(({ name, description, image }) => (
              <div key={name} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <div className='h-[100px] flex items-center'>
                  <Image src={image} alt={`Certification ${name}`} width={100} height={100} className="mb-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teal-600 dark:text-teal-400">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}