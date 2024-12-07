'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Swyyp saved me hours of quiz creation!",
    author: "Jane D., Educator",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote: "Real-time insights helped me adjust my training sessions on the fly.",
    author: "Mark T., Corporate Trainer",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="w-full bg-[#00897B] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loved by Educators, Trainers, and Coaches
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl w-full max-w-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-xl mb-2">"{testimonials[currentTestimonial].quote}"</p>
                    <p className="font-bold">- {testimonials[currentTestimonial].author}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
                     bg-white/10 backdrop-blur-sm rounded-full p-3
                     hover:bg-white/20 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
                     bg-white/10 backdrop-blur-sm rounded-full p-3
                     hover:bg-white/20 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

