import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-200 transition-all duration-300"
    >
      {image?.imgix_url && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="text-4xl mb-3">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {shortDesc && <p className="text-gray-600 line-clamp-3">{shortDesc}</p>}
      </div>
    </Link>
  )
}