'use client'

import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {[
              { 
                icon: Linkedin, 
                title: 'LinkedIn',
                text: 'Connect with me on LinkedIn',
                href: 'https://linkedin.com/in/bikram-sharma-196528200',
                username: 'bikram-sharma-196528200'
              },
              { 
                icon: Github, 
                title: 'GitHub',
                text: 'Check out my code repositories',
                href: 'https://github.com/imgrooty',
                username: 'imgrooty'
              },
              { 
                icon: Mail, 
                title: 'Email',
                text: 'Send me an email',
                href: 'mailto:your.email@example.com',
                username: 'your.email@example.com'
              },
            ].map((item, index) => (
              <a 
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 rounded-full mr-4">
                  <item.icon className="h-6 w-6 text-cyan-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

