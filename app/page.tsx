import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import DemoSection from '@/components/DemoSection'
import SocialProof from '@/components/SocialProof'
import TimeSavings from '@/components/TimeSavings'
import FAQ from '@/components/FAQ'
import AlternativeCTA from '@/components/AlternativeCTA'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Suspense fallback={<LoadingSpinner />}>
        <DemoSection />
      </Suspense>
      <SocialProof />
      <Suspense fallback={<LoadingSpinner />}>
        <TimeSavings />
      </Suspense>
      <FAQ />
      <AlternativeCTA />
      <Footer />
    </main>
  )
}

