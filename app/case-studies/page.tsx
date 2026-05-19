import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Case Studies - My Agency',
  description: 'Real projects, real results. Explore our portfolio of work.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our work"
          title="Case Studies"
          subtitle="A selection of projects we're proud to have delivered."
        />
        {caseStudies.length === 0 ? (
          <p className="text-center text-gray-500">No case studies available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}