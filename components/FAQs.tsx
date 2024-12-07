import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "What makes Swyyp different from other tools?",
    answer: "Swyyp stands out with its intuitive swipe-based interface, AI-powered form creation, and real-time analytics, making survey and quiz creation effortless and engaging."
  },
  {
    question: "How do I create a quiz or survey with Swyyp?",
    answer: "Creating with Swyyp is simple: log in, choose your form type, use our AI assistant or templates to craft questions, customize as needed, and share instantly with a generated link or QR code."
  },
  {
    question: "Can I use Swyyp for live polls during events?",
    answer: "Swyyp's live polling feature is perfect for real-time audience engagement at events, with instant results visualization for dynamic interactions."
  },
  {
    question: "Is there a free version of Swyyp?",
    answer: "Yes, Swyyp offers a free tier with essential features to get you started. Paid plans are available for advanced features and higher usage limits."
  },
  {
    question: "How secure is Swyyp for data collection?",
    answer: "Swyyp prioritizes data security with end-to-end encryption, regular security audits, and compliance with data protection regulations to ensure your information is always safe."
  }
]

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
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

export default FAQs