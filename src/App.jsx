import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/layout/ProtectedRoute'
import Layout from './components/layout/Layout'
import LoginPage from './features/auth/LoginPage'
import DashboardPage from './features/dashboard/DashboardPage'
import InternshipListPage from './features/internships/InternshipListPage'
import AddInternshipPage from './features/internships/AddInternshipPage'
import EditInternshipPage from './features/internships/EditInternshipPage'
import JobsAPIPage from './features/internships/JobsAPIPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/internships" element={<InternshipListPage />} />
            <Route path="/internships/add" element={<AddInternshipPage />} />
            <Route path="/internships/edit/:id" element={<EditInternshipPage />} />
            <Route path="/jobs" element={<JobsAPIPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  )
}
