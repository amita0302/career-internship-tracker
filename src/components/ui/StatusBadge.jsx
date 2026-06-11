const statusStyles = {
  Applied: 'bg-indigo-100 text-indigo-700',
  Screening: 'bg-blue-100 text-blue-700',
  Interview: 'bg-yellow-100 text-yellow-700',
  Offer: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}