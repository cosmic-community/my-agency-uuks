import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Testimonials - My Agency',
  description: 'Hear what our clients have to say about working with us.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-20 bg-gradient-to-br from-brand-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Kind words"
          title="Client Testimonials"
          subtitle="We're proud of the relationships we build with our clients."
        />
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">No testimonials available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}