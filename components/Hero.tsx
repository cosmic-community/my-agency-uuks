import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">Now accepting new projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Creative Solutions for{' '}
            <span className="gradient-text">Bold Brands</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're a full-service creative agency helping ambitious companies design, build, and grow with intention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Services
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:border-brand-600 hover:text-brand-600 transition-colors"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}