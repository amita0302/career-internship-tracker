import { useState, useEffect } from 'react'
import { fetchJobs, postApplication } from '../../api/jobsApi'

export default function JobsAPIPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [postLoading, setPostLoading] = useState(false)
  const [postSuccess, setPostSuccess] = useState(null)
  const [postError, setPostError] = useState(null)

  // GET - Fetch jobs on mount
  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchJobs()
      setJobs(data.posts || [])
    } catch (err) {
      setError('Failed to fetch jobs. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // POST - Simulate posting an application
  const handlePostApplication = async () => {
    setPostLoading(true)
    setPostSuccess(null)
    setPostError(null)
    try {
      const data = await postApplication({
        title: 'Frontend Intern',
        company: 'Demo Company',
        location: 'Remote',
        status: 'Applied',
      })
      setPostSuccess(`Application posted! Job ID: ${data.id}`)
    } catch (err) {
      setPostError('Failed to post application. Please try again.')
    } finally {
      setPostLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Jobs from API</h1>
          <p className="text-gray-500 text-sm mt-1">
            Fetched live from DummyJSON API
          </p>
        </div>
        <button
          onClick={loadJobs}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          🔄 Refresh
        </button>
      </div>

      {/* POST Section */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          POST — Simulate Application
        </h2>
        <button
          onClick={handlePostApplication}
          disabled={postLoading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition disabled:opacity-50"
        >
          {postLoading ? '⏳ Posting...' : '📤 Post Application'}
        </button>
        {postSuccess && (
          <p className="mt-3 text-green-600 text-sm font-medium">
            ✅ {postSuccess}
          </p>
        )}
        {postError && (
          <p className="mt-3 text-red-500 text-sm font-medium">
            ❌ {postError}
          </p>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20 text-indigo-500 font-medium">
          ⏳ Loading jobs...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 mb-4">
          ❌ {error}
          <button
            onClick={loadJobs}
            className="ml-4 text-sm underline hover:no-underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Jobs List */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div
  key={job.id}
  className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2"
>
  <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
  <p className="text-gray-500 text-sm">👤 {job.tags?.join(', ')}</p>
  <p className="text-gray-500 text-sm">👁️ Views: {job.views}</p>
  <p className="text-gray-500 text-sm">❤️ Likes: {job.reactions?.likes}</p>
</div>
          ))}
        </div>
      )}

    </div>
  )
}