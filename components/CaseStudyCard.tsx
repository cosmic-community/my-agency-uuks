import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const description = getMetafieldValue(caseStudy.metadata?.description)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {image?.imgix_url && (
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=900&h=675&fit=crop&auto=format,compress`}
            alt={projectTitle}
            width={450}
            height={338}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {clientName && (
          <p className="text-sm text-brand-600 font-semibold uppercase tracking-wide mb-2">
            {clientName}
          </p>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
          {projectTitle}
        </h3>
        {description && <p className="text-gray-600 line-clamp-3">{description}</p>}
      </div>
    </Link>
  )
}