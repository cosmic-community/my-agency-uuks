// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const description = getMetafieldValue(caseStudy.metadata?.description)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const projectUrl = getMetafieldValue(caseStudy.metadata?.project_url)
  const image = caseStudy.metadata?.featured_image
  const gallery = caseStudy.metadata?.gallery
  const services = caseStudy.metadata?.services_used

  return (
    <article className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="text-brand-600 font-medium hover:text-brand-700 mb-8 inline-block">
          ← Back to case studies
        </Link>
        <div className="mb-12">
          {clientName && (
            <p className="text-sm text-brand-600 font-semibold uppercase tracking-wider mb-3">
              {clientName}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">{projectTitle}</h1>
          {description && <p className="text-xl text-gray-600 leading-relaxed">{description}</p>}
        </div>

        {image?.imgix_url && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12">
            <img
              src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={projectTitle}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-8 bg-gray-50 rounded-2xl">
          {clientName && (
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Client</p>
              <p className="text-gray-900 font-semibold">{clientName}</p>
            </div>
          )}
          {services && services.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Services</p>
              <p className="text-gray-900 font-semibold">
                {services.map((s) => s.title).join(', ')}
              </p>
            </div>
          )}
          {projectUrl && (
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Live Project</p>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 font-semibold hover:text-brand-700"
              >
                Visit Site →
              </a>
            </div>
          )}
        </div>

        {results && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Results</h2>
            <div
              className="text-gray-700 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: results }}
            />
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((img, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={`${img.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={`${projectTitle} gallery ${index + 1}`}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}