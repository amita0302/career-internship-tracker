import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? 'text-white underline underline-offset-4'
        : 'text-indigo-200 hover:text-white'
    }`

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          🎓 InternTracker
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
          <NavLink to="/internships" className={navLinkClass}>Internships</NavLink>
          <NavLink to="/internships/add" className={navLinkClass}>+ Add New</NavLink>
          <NavLink to="/jobs" className={navLinkClass}>🌐 Jobs API</NavLink>
        </div>

        {/* Desktop User + Logout */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-indigo-100">👋 Hello, {user?.name}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-indigo-50 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/internships" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Internships
          </NavLink>
          <NavLink to="/internships/add" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            + Add New
          </NavLink>
          <NavLink to="/jobs" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            🌐 Jobs API
          </NavLink>
          <hr className="border-indigo-500" />
          <span className="text-sm text-indigo-100">👋 Hello, {user?.name}</span>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-indigo-50 transition w-fit"
          >
            Logout
          </button>
        </div>
      )}

    </nav>
  )
}