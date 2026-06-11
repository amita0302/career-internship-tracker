import StatsGrid from './StatsGrid'
import StatusPieChart from './StatusPieChart'
import ApplicationsBarChart from './ApplicationsBarChart'

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">
          Welcome back! Here's your internship journey overview.
        </p>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusPieChart />
        <ApplicationsBarChart />
      </div>
    </div>
  )
}