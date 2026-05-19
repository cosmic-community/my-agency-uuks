import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Team - My Agency',
  description: 'Meet the talented team behind My Agency.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The people"
          title="Meet Our Team"
          subtitle="Get to know the talented people who make it all happen."
        />
        {team.length === 0 ? (
          <p className="text-center text-gray-500">No team members available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}