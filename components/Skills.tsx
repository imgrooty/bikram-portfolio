'use client'

import { useInView } from 'react-intersection-observer'
import { Code, Shield, Server, Database, Braces, Terminal, Globe, Brain } from 'lucide-react'

const skills = [
  { name: 'TypeScript', icon: Braces, level: 'Advanced' },
  { name: 'Python', icon: Code, level: 'Intermediate' },
  { name: 'HTML/CSS', icon: Globe, level: 'Advanced' },
  { name: 'Cybersecurity', icon: Shield, level: 'Learning' },
  { name: 'AI/ML', icon: Brain, level: 'Intermediate' },
  { name: 'Backend Development', icon: Server, level: 'Learning' },
  { name: 'Databases', icon: Database, level: 'Intermediate' },
  { name: 'Linux', icon: Terminal, level: 'Intermediate' },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`flex flex-col items-center p-6 bg-gray-700 rounded-lg transition-all duration-500 hover:bg-gray-600 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <skill.icon className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
              <span className="text-sm text-cyan-400">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

