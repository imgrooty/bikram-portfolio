'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setIsVisible(true)
    setYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row justify-between items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Bikram Sharma</h2>
            <p className="text-gray-400">BSc CSIT Student & Web Developer</p>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-cyan-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/imgrooty" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors duration-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/bikram-sharma-196528200" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors duration-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-cyan-500 transition-colors duration-300">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © {year} Bikram Sharma. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  )
}

