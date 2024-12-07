'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const yesNoQuestion = "Do you enjoy interactive learning?"
const mcqQuestion = "How often do you use engagement tools in your sessions?"
const mcqOptions = ["Daily", "Weekly", "Monthly", "Rarely"]

export default function DemoSection() {
  const [yesNoSwipe, setYesNoSwipe] = useState<'left' | 'right' | null>(null)
  const [selectedMCQ, setSelectedMCQ] = useState<number | null>(null)

  const handleYesNoSwipe = (direction: 'left' | 'right') => {
    setYesNoSwipe(direction)
    setTimeout(() => setYesNoSwipe(null), 1000)
  }

  const handleMCQSelect = (index: number) => {
    setSelectedMCQ(index)
    setTimeout(() => setSelectedMCQ(null), 1000)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Experience Swyyp: Simple, Powerful, and Engaging
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Yes/No Question</h3>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 100) handleYesNoSwipe('right')
                else if (offset.x < -100) handleYesNoSwipe('left')
              }}
              animate={{
                x: yesNoSwipe === 'left' ? -100 : yesNoSwipe === 'right' ? 100 : 0,
                opacity: yesNoSwipe ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="text-lg font-medium text-center">{yesNoQuestion}</p>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>Swipe left for No</span>
                <span>Swipe right for Yes</span>
              </div>
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Multiple Choice Question</h3>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-lg font-medium mb-4">{mcqQuestion}</p>
              {mcqOptions.map((option, index) => (
                <motion.div
                  key={option}
                  className="bg-gray-100 p-4 rounded-lg mb-2 cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100) handleMCQSelect(index)
                  }}
                  animate={{
                    x: selectedMCQ === index ? 100 : 0,
                    opacity: selectedMCQ === index ? 0 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {option}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

