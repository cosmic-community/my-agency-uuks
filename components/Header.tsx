import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span className="text-xl font-bold gradient-text">My Agency</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Work
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Team
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-brand-600 transition-colors font-medium">
              Testimonials
            </Link>
          </nav>
          <Link
            href="/services"
            className="hidden md:inline-flex gradient-bg text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}