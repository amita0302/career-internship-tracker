export default function StatsCard({ title, count, icon, color }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4 border-l-4 ${color}`}>
      <div className="text-3xl sm:text-4xl">{icon}</div>
      <div>
        <p className="text-xs sm:text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl sm:text-3xl font-bold text-gray-800">{count}</p>
      </div>
    </div>
  )
}