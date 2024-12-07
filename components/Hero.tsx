'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const features = ['AI Session Planner', 'Swipe-Based Polls', 'Real-Time Analytics']

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div 
              className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Transform How You Engage and Save Time with AI
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-100">
                Revolutionize session planning and interaction with our intuitive, AI-powered tool.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left space-y-4"
            >
              <Link
                href="/demo"
                className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg
                         shadow-lg shadow-emerald-900/20
                         transition-all duration-300 transform
                         hover:bg-emerald-50 hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600
                         w-full sm:w-auto"
              >
                See How It Works
              </Link>
              <Link
                href="/signup"
                className="inline-block text-white border border-white px-6 py-3 rounded-xl font-medium text-base
                           hover:bg-white hover:text-emerald-600 transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600
                           w-full sm:w-auto mt-4 sm:mt-0 sm:ml-4"
              >
                Start Saving Time Today
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full max-w-2xl lg:max-w-none mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl 
                           flex items-center justify-center p-8"
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                    {features[currentFeature]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

