'use client'

import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

export default function TimeSavings() {
  const [sessionCount, setSessionCount] = useState(5)
  const [sessionDuration, setSessionDuration] = useState(2)
  const [sessionType, setSessionType] = useState('training')
  const [timeSaved, setTimeSaved] = useState(0)

  useEffect(() => {
    // Assuming Swyyp saves 30 minutes per session and 15 minutes per hour of session
    const sessionSavings = sessionCount * 30
    const durationSavings = sessionDuration * sessionCount * 15
    const totalSaved = Math.max(sessionSavings + durationSavings, 0) // Prevent negative values
    setTimeSaved(totalSaved)
  }, [sessionCount, sessionDuration])

  const data = [
    { name: 'Manual', time: sessionDuration * sessionCount * 60 },
    { name: 'With Swyyp', time: Math.max(sessionDuration * sessionCount * 60 - timeSaved, 0) },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How Much Time Can Swyyp Save You?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <label htmlFor="sessionCount" className="block mb-2 text-lg font-medium">Number of sessions per week:</label>
              <input
                type="number"
                id="sessionCount"
                value={sessionCount}
                onChange={(e) => setSessionCount(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="sessionDuration" className="block mb-2 text-lg font-medium">Average session duration (hours):</label>
              <input
                type="number"
                id="sessionDuration"
                value={sessionDuration}
                onChange={(e) => setSessionDuration(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="sessionType" className="block mb-2 text-lg font-medium">Type of session:</label>
              <select
                id="sessionType"
                value={sessionType}
                onChange={(e) => setSessionType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="training">Training</option>
                <option value="teaching">Teaching</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <motion.div
              className="bg-emerald-600 text-white p-6 rounded-xl text-center"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              <p className="text-2xl font-bold mb-2">Swyyp saves you</p>
              <p className="text-4xl font-bold">{timeSaved} minutes</p>
              <p className="text-xl">every week!</p>
            </motion.div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="time" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

