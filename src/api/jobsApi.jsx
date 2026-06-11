import axiosInstance from './axiosInstance'

// GET - Fetch posts as job listings
export const fetchJobs = async () => {
  const response = await axiosInstance.get('/posts?limit=10')
  return response.data
}

// POST - Simulate posting a job application
export const postApplication = async (applicationData) => {
  const response = await axiosInstance.post('/posts/add', applicationData)
  return response.data
}