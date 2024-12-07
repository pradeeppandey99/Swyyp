'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How does Swyyp save time?",
    answer: "Swyyp uses AI to automate session planning, quizzes, polls, and more, so you can focus on delivering impactful sessions."
  },
  {
    question: "Can I use Swyyp for online and in-person sessions?",
    answer: "Yes, Swyyp is designed for both online and offline engagement."
  },
  {
    question: "Is Swyyp suitable for all types of trainers?",
    answer: "Absolutely. Whether you're a corporate trainer or an educator, Swyyp simplifies your workflow."
  },
  {
    question: "How does Swyyp handle data privacy and security?",
    answer: "Swyyp prioritizes data protection with end-to-end encryption and complies with global data privacy regulations."
  },
  {
    question: "Can I integrate Swyyp with other tools I use?",
    answer: "Yes, Swyyp offers integrations with popular learning management systems and productivity tools."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

