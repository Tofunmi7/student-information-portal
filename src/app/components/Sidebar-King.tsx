import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  User, 
  BookOpen, 
  Award, 
  Calendar, 
  Bell, 
  LogOut,
  Menu,
  X 
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/profile', icon: User, label: 'Profile' },
  { to: '/courses', icon: BookOpen, label: 'Courses' },
  { to: '/results', icon: Award, label: 'Results' },
  { to: '/timetable', icon: Calendar, label: 'Timetable' },
  { to: '/announcements', icon: Bell, label: 'Announcements' }
];

export function Sidebar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-3 left-3 z-50 p-2 rounded-lg shadow-md"
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen z-40 transition-transform duration-300
          w-60 sm:w-64 md:w-64 lg:static lg:w-64
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 overflow-y-auto
        `}
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-4 sm:p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="text-lg sm:text-xl" style={{ color: 'var(--color-primary)' }}>
              Bells University Portal
            </h2>
            <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              Student Information System
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 sm:p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base
                      ${isActive 
                        ? 'text-white' 
                        : 'hover:bg-gray-50'}
                    `}
                    style={({ isActive }) => isActive ? {
                      backgroundColor: 'var(--color-primary)',
                      color: 'white'
                    } : {
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    <item.icon size={20} className="flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-3 sm:p-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2 sm:py-3 rounded-lg transition-colors hover:bg-red-50 text-sm sm:text-base"
              style={{ color: 'var(--color-error)' }}
            >
              <LogOut size={20} className="flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
