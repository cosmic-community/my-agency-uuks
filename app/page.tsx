import Link from 'next/link'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredServices = services.slice(0, 3)
  const featuredTeam = team.slice(0, 4)
  const featuredCaseStudies = caseStudies.slice(0, 2)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />

      {featuredServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="What we do"
              title="Services We Offer"
              subtitle="From strategy to execution, we deliver creative solutions that move the needle."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            {services.length > 3 && (
              <div className="text-center mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
                >
                  View all services →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {featuredCaseStudies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our work"
              title="Featured Case Studies"
              subtitle="Real projects, real results. See how we've helped our clients succeed."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
            {caseStudies.length > 2 && (
              <div className="text-center mt-12">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
                >
                  View all case studies →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {featuredTeam.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="The people"
              title="Meet Our Team"
              subtitle="A talented group of designers, developers, and strategists."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {featuredTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
            {team.length > 4 && (
              <div className="text-center mt-12">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
                >
                  Meet the full team →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {featuredTestimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-brand-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Kind words"
              title="What Clients Say"
              subtitle="We're proud of the relationships we build and the work we deliver."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's create something amazing together. Get in touch today.
          </p>
          <a
            href="mailto:hello@myagency.com"
            className="inline-flex bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}