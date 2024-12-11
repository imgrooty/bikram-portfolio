'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-cyan-500 animate-pulse" />
          <span className="text-xl font-bold">BIKRAM SHARMA</span>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-gray-800 p-4' : 'hidden'}`}>
          {['skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link 
                href={`#${item}`} 
                className="block py-2 px-4 hover:bg-cyan-500 hover:text-white rounded transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

