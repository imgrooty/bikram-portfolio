'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'ENTERTAINMENT_APP',
    description: 'A modern entertainment application built with TypeScript',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/imgrooty/ENTERTAINMENT_APP',
    tech: 'TypeScript'
  },
  {
    title: 'Camping Site',
    description: 'A website for camping enthusiasts built with TypeScript',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/imgrooty/camping-site',
    tech: 'TypeScript'
  },
  {
    title: 'BIKRAM',
    description: 'Personal website project built with HTML',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/imgrooty/BIKRAM',
    tech: 'HTML'
  },
  {
    title: 'AI Labs',
    description: 'Collection of artificial intelligence experiments and projects',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/imgrooty/AI_LABS',
    tech: 'Jupyter Notebook'
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Classic Tic-Tac-Toe game implementation',
    image: '/placeholder.svg?height=200&width=300',
    github: 'https://github.com/imgrooty/Tic-Tac-Toe',
    tech: 'Python'
  }
]

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={300} 
                  height={200} 
                  className="w-full transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-block bg-cyan-500/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-white">
                    {project.tech}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="mr-1" /> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

