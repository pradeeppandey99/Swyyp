import Link from 'next/link'
import { PlayCircle, FileText } from 'lucide-react'

export default function AlternativeCTA() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Not Ready to Sign Up? Explore More
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <Link
            href="/demo-video"
            className="flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg shadow-md hover:bg-emerald-50 transition-colors"
          >
            <PlayCircle className="w-6 h-6 mr-2" />
            Watch a Quick Demo
          </Link>
          <Link
            href="/engagement-guide"
            className="flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg shadow-md hover:bg-emerald-50 transition-colors"
          >
            <FileText className="w-6 h-6 mr-2" />
            Download Our Free Guide on Session Engagement Tools
          </Link>
        </div>
      </div>
    </section>
  )
}

