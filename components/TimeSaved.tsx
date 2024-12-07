'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type ActivityType = 'surveys' | 'quizzes' | 'livePolls' | 'feedbackForms'

interface ActivityData {
  name: string
  manual: number
  withSwyyp: number
}

const activityTimes = {
  surveys: { manual: 45, withSwyyp: 10 },
  quizzes: { manual: 30, withSwyyp: 5 },
  livePolls: { manual: 15, withSwyyp: 1 },
  feedbackForms: { manual: 20, withSwyyp: 5 }
}

export default function TimeSaved() {
  const [activities, setActivities] = useState({
    surveys: 1,
    quizzes: 1,
    livePolls: 1,
    feedbackForms: 1
  })

  const [timeSaved, setTimeSaved] = useState(0)
  const [chartData, setChartData] = useState<ActivityData[]>([])

  useEffect(() => {
    calculateTimeSaved()
  }, [activities])

  const calculateTimeSaved = () => {
    let totalSaved = 0
    const newChartData: ActivityData[] = []

    Object.entries(activities).forEach(([key, value]) => {
      const activityKey = key as ActivityType
      const manualTime = activityTimes[activityKey].manual * value
      const swyypTime = activityTimes[activityKey].withSwyyp * value
      const saved = manualTime - swyypTime
      totalSaved += saved

      newChartData.push({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        manual: manualTime,
        withSwyyp: swyypTime
      })
    })

    setTimeSaved(totalSaved)
    setChartData(newChartData)
  }

  const handleInputChange = (activity: ActivityType, value: string) => {
    const numValue = parseInt(value)
    if (numValue >= 0 && numValue <= 1000) {
      setActivities(prev => ({ ...prev, [activity]: numValue }))
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-100 to-teal-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Your Time Savings Visualized</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {Object.entries(activities).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-2">
                  Number of {key} per month:
                </label>
                <input
                  type="number"
                  id={key}
                  name={key}
                  min="0"
                  max="1000"
                  value={value}
                  onChange={(e) => handleInputChange(key as ActivityType, e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 py-2 px-3"
                  aria-label={`Number of ${key} per month`}
                />
              </div>
            ))}
          </div>
          <div className="mb-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="manual" name="Manual Time" fill="#6EE7B7" />
                <Bar dataKey="withSwyyp" name="Time with Swyyp" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-500 text-white rounded-lg p-6 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">
              Save {timeSaved} minutes per month
            </h3>
            <p>with Swyyp's AI-powered tools</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

