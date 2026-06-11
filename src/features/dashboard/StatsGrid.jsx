import { useSelector } from 'react-redux'
import StatsCard from '../../components/ui/StatsCard'

export default function StatsGrid() {
  const { internships } = useSelector((state) => state.internships)

  const stats = {
    total: internships.length,
    inProgress: internships.filter((i) =>
      ['Applied', 'Screening', 'Interview'].includes(i.status)
    ).length,
    interviews: internships.filter((i) => i.status === 'Interview').length,
    offers: internships.filter((i) => i.status === 'Offer').length,
    rejected: internships.filter((i) => i.status === 'Rejected').length,
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      <StatsCard
        title="Total Applications"
        count={stats.total}
        icon="📋"
        color="border-indigo-500"
      />
      <StatsCard
        title="In Progress"
        count={stats.inProgress}
        icon="🔄"
        color="border-blue-500"
      />
      <StatsCard
        title="Interviews"
        count={stats.interviews}
        icon="🎯"
        color="border-yellow-500"
      />
      <StatsCard
        title="Offers"
        count={stats.offers}
        icon="🎉"
        color="border-green-500"
      />
      <StatsCard
        title="Rejected"
        count={stats.rejected}
        icon="❌"
        color="border-red-500"
      />
    </div>
  )
}