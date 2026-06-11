import { useSelector } from 'react-redux'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = {
  Applied: '#6366f1',
  Screening: '#3b82f6',
  Interview: '#f59e0b',
  Offer: '#22c55e',
  Rejected: '#ef4444',
}

export default function StatusPieChart() {
  const { internships } = useSelector((state) => state.internships)

  const data = Object.keys(COLORS).map((status) => ({
    name: status,
    value: internships.filter((i) => i.status === status).length,
  })).filter((d) => d.value > 0)

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        📊 Applications by Status
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={COLORS[entry.name]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}