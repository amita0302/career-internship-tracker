import { useSelector } from 'react-redux'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function ApplicationsBarChart() {
  const { internships } = useSelector((state) => state.internships)

  const monthMap = {}

  internships.forEach((i) => {
    const month = new Date(i.appliedDate).toLocaleString('default', {
      month: 'short',
    })
    monthMap[month] = (monthMap[month] || 0) + 1
  })

  const data = Object.entries(monthMap).map(([month, count]) => ({
    month,
    count,
  }))

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        📅 Applications per Month
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}