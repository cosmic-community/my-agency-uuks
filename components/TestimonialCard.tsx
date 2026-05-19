import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const clientName = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const clientRole = getMetafieldValue(testimonial.metadata?.client_role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.photo
  const rating = testimonial.metadata?.rating

  const ratingNum = typeof rating === 'number' ? rating : parseInt(getMetafieldValue(rating) || '0', 10)

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {ratingNum > 0 && (
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < ratingNum ? 'text-yellow-400' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}
      {quote && (
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
          "{quote}"
        </blockquote>
      )}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {photo?.imgix_url ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={clientName}
            width={60}
            height={60}
            className="w-14 h-14 rounded-full object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-xl font-bold text-brand-600">
            {clientName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{clientName}</p>
          {(clientRole || company) && (
            <p className="text-sm text-gray-500">
              {clientRole}
              {clientRole && company ? ' · ' : ''}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}