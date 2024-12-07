import Image from 'next/image'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          The Challenge: Wasting Hours on Inefficient Tools and Manual Efforts to Create Engaging Sessions
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Outdated methods and tools often fall short in delivering the engagement and time efficiency required for impactful sessions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>Time-consuming manual planning processes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>Lack of engaging, interactive elements</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>Difficulty in gathering real-time feedback</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Inefficient session planning"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

