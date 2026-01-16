import { currentStudent } from '@/data/mockData';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className="h-14 sm:h-16 px-3 sm:px-4 md:px-6 flex items-center justify-between border-b w-full"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      {/* Page Title - Hidden on mobile to make room for menu button */}
      <div className="hidden md:block">
        <h1 className="text-base sm:text-lg md:text-xl" style={{ color: 'var(--color-text-primary)' }}>
          Bells University Portal
        </h1>
      </div>

      {/* User Info */}
      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--color-surface-hover)',
              color: 'var(--color-text-primary)'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
        
        <div className="text-right hidden sm:block">
          <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-primary)' }}>
            {currentStudent.firstName} {currentStudent.lastName}
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            {currentStudent.studentId}
          </p>
        </div>
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          {currentStudent.avatar}
        </div>
      </div>
    </header>
  );
}
