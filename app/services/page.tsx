import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Services - My Agency',
  description: 'Explore the full range of services we offer to help your business grow.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Our Services"
          subtitle="A full suite of creative and technical services tailored to your needs."
        />
        {services.length === 0 ? (
          <p className="text-center text-gray-500">No services available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}