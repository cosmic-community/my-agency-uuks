// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image

  return (
    <article className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="text-brand-600 font-medium hover:text-brand-700 mb-8 inline-block">
          ← Back to services
        </Link>
        <div className="text-center mb-12">
          {icon && <div className="text-6xl mb-4">{icon}</div>}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{name}</h1>
          {shortDesc && <p className="text-xl text-gray-600">{shortDesc}</p>}
        </div>
        {image?.imgix_url && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={name}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {fullDesc && (
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: fullDesc }}
            />
          </div>
        )}
        <div className="mt-16 text-center bg-gradient-to-br from-brand-50 to-pink-50 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in {name}?</h2>
          <p className="text-gray-600 mb-6">Let's talk about how we can help.</p>
          <a
            href="mailto:hello@myagency.com"
            className="inline-flex gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </article>
  )
}