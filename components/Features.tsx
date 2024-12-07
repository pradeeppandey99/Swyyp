'use client'

import { motion } from 'framer-motion'
import { Clock, Smartphone, Workflow } from 'lucide-react'

const features = [
  {
    title: "Save Time with AI",
    description: "Automate session planning, quizzes, polls, and more with AI-driven tools.",
    icon: Clock,
  },
  {
    title: "Engage Seamlessly",
    description: "Use swipe-based interactions and dynamic elements to keep your audience captivated.",
    icon: Smartphone,
  },
  {
    title: "Simplify Your Workflow",
    description: "Manage everything—from agenda planning to team activities—in one place.",
    icon: Workflow,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Swyyp?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

