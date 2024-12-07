'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Question {
  type: 'mcq' | 'yesNo'
  question: string
  options?: string[]
}

const demoQuestions: Question[] = [
  {
    type: 'yesNo',
    question: "Do you enjoy outdoor activities?",
  },
  {
    type: 'mcq',
    question: "How often do you exercise?",
    options: ["Daily", "2-3 times a week", "Once a week", "Rarely"]
  },
  {
    type: 'yesNo',
    question: "Would you try virtual fitness classes?",
  },
  {
    type: 'mcq',
    question: "What's your preferred workout time?",
    options: ["Morning", "Afternoon", "Evening", "Night"]
  }
]

export default function Demo() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleDrag = (event: any, info: any) => {
    const swipeThreshold = 100
    if (info.offset.x > swipeThreshold) {
      setSwipeDirection('right')
      handleAnswer(true)
    } else if (info.offset.x < -swipeThreshold) {
      setSwipeDirection('left')
      handleAnswer(false)
    }
  }

  const handleAnswer = (isYes: boolean) => {
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % demoQuestions.length)
      setSwipeDirection(null)
      setSelectedOption(null)
    }, 300)
  }

  const handleOptionSwipe = (index: number, info: any) => {
    const swipeThreshold = 100
    if (info.offset.x > swipeThreshold) {
      setSelectedOption(index)
      setTimeout(() => {
        setCurrentQuestion((prev) => (prev + 1) % demoQuestions.length)
        setSelectedOption(null)
      }, 300)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-100 to-teal-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">See Swyyp in Action</h2>
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: swipeDirection === 'right' ? 100 : -100 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {demoQuestions[currentQuestion].type === 'yesNo' ? (
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDrag}
                  className={`bg-white rounded-xl shadow-lg p-6 cursor-grab active:cursor-grabbing
                    ${swipeDirection === 'right' ? 'bg-green-50' : ''}
                    ${swipeDirection === 'left' ? 'bg-red-50' : ''}`}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">
                    {demoQuestions[currentQuestion].question}
                  </h3>
                  <div className="text-center text-gray-500 mt-4">
                    Swipe left for No, right for Yes
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {demoQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {demoQuestions[currentQuestion].options?.map((option, index) => (
                      <motion.div
                        key={option}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, info) => handleOptionSwipe(index, info)}
                        animate={selectedOption === index ? { x: 200, opacity: 0 } : {}}
                        className="bg-gray-50 rounded-lg border border-gray-200 p-4 cursor-grab active:cursor-grabbing"
                      >
                        {option}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

