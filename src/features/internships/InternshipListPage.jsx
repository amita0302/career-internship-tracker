import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InternshipCard from '../../components/ui/InternshipCard'

const STATUS_OPTIONS = ['All', 'Applied', 'Screening', 'Interview', 'Offer', 'Rejected']

export default function InternshipListPage() {
  const { internships } = useSelector((state) => state.internships)
  const navigate = useNavigate()

  // Search & Filter state
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  // Filtered results
  const filtered = useMemo(() => {
    return internships.filter((item) => {
      const matchesSearch =
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.jobTitle.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' || item.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [internships, search, statusFilter])

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            My Applications
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {filtered.length} of {internships.length} applications
          </p>
        </div>
        <button
          onClick={() => navigate('/internships/add')}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          + Add New
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 Search by company or job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status === 'All' ? '📋 All Status' : status}
            </option>
          ))}
        </select>

        {/* Clear Button */}
        {(search || statusFilter !== 'All') && (
          <button
            onClick={() => { setSearch(''); setStatusFilter('All') }}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            ✕ Clear
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-lg font-medium">No matching applications</p>
          <p className="text-sm">Try a different search or filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      )}
    </div>
  )
}