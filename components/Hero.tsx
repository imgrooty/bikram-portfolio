'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden py-20">
      <div className={`container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Bikram Sharma
          </h1>
          <h2 className="text-2xl text-cyan-500 mb-6">BSc CSIT Student | Web Developer | Cybersecurity Enthusiast</h2>
          <p className="max-w-2xl mx-auto md:mx-0 mb-8 text-gray-300">
            An enthusiastic learner of programming and concepts. Have a good knowledge of front-end development and trying for back-end too. 
            Interested in cyber security and artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects <ArrowRight className="ml-2 animate-bounce" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse"></div>
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Profile"
              width={320}
              height={320}
              className="rounded-full object-cover border-4 border-cyan-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

