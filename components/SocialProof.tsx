'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Swyyp made session planning so easy! It saved me hours every week.",
    author: "A Happy Customer",
    role: "Trainer/Instructor"
  },
  {
    quote: "With Swyyp, I created interactive quizzes and polls in minutes.",
    author: "Another Happy Customer",
    role: "Educator"
  },
  {
    quote: "This tool revolutionized how I plan and deliver engaging sessions in less time!",
    author: "Satisfied User",
    role: "Workshop Facilitator"
  }
]

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Are Saying
        </h2>
        <div className="flex justify-center mb-12 space-x-8">
          {['Innovative Learning Solutions', 'Global Training Institute', 'EduTech Pioneers'].map((company) => (
            <div key={company} className="bg-white/10 px-4 py-2 rounded-lg">
              {company}
            </div>
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-8 rounded-xl"
            >
              <p className="text-xl mb-4">"{testimonials[currentTestimonial].quote}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].author} - {testimonials[currentTestimonial].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

