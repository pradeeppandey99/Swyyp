'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    features: ["Up to 100 responses/month", "Basic analytics", "Email support"],
    color: "bg-gray-100",
    textColor: "text-gray-900"
  },
  {
    name: "Pro",
    description: "For growing teams",
    price: "$29",
    features: ["Unlimited responses", "Advanced analytics", "Priority support", "Custom branding"],
    color: "bg-emerald-100",
    textColor: "text-emerald-900"
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    features: ["Dedicated account manager", "API access", "SSO integration", "Advanced security features"],
    color: "bg-blue-100",
    textColor: "text-blue-900"
  },
]

export default function Pricing() {
  const [currentPlan, setCurrentPlan] = useState(0)

  const nextPlan = () => setCurrentPlan((prev) => (prev + 1) % plans.length)
  const prevPlan = () => setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length)

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Plans That Fit Every Need
        </h2>
        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`${plans[currentPlan].color} rounded-xl p-8 shadow-lg
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className={`${plans[currentPlan].textColor}`}>
                <h3 className="text-2xl font-bold mb-2">{plans[currentPlan].name}</h3>
                <p className="text-lg mb-4 opacity-75">{plans[currentPlan].description}</p>
                <p className="text-4xl font-bold mb-6">{plans[currentPlan].price}<span className="text-lg">/month</span></p>
                <ul className="mb-8 space-y-2">
                  {plans[currentPlan].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold text-white
                                  bg-emerald-500 hover:bg-emerald-600
                                  transition-all duration-300`}>
                  Choose Plan
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={prevPlan}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
                     bg-white rounded-full p-3 shadow-lg
                     hover:bg-gray-50 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button 
            onClick={nextPlan}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
                     bg-white rounded-full p-3 shadow-lg
                     hover:bg-gray-50 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Next plan"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  )
}

