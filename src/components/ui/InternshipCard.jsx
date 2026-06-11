import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteInternship } from '../../features/internships/internshipsSlice'
import StatusBadge from './StatusBadge'

export default function InternshipCard({ internship }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    if (window.confirm(`Delete ${internship.company} application?`)) {
      dispatch(deleteInternship(internship.id))
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col gap-3">

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
          {internship.company}
        </h3>
        <StatusBadge status={internship.status} />
      </div>

      <p className="text-indigo-600 font-medium text-sm sm:text-base">
        {internship.jobTitle}
      </p>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500">
        <span>📍 {internship.location}</span>
        <span>📅 {internship.appliedDate}</span>
      </div>

      {internship.notes && (
        <p className="text-sm text-gray-500 italic line-clamp-2">
          📝 {internship.notes}
        </p>
      )}

      <div className="flex gap-2 mt-auto pt-2">
        <button
          onClick={() => navigate(`/internships/edit/${internship.id}`)}
          className="flex-1 bg-indigo-50 text-indigo-600 font-semibold py-2 rounded-lg hover:bg-indigo-100 transition text-sm"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-50 text-red-500 font-semibold py-2 rounded-lg hover:bg-red-100 transition text-sm"
        >
          🗑️ Delete
        </button>
      </div>

    </div>
  )
}