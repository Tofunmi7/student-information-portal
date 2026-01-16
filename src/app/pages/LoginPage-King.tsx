import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Moon, Sun, LogIn, KeyRound } from 'lucide-react';
import { useTheme } from 'next-themes';

export function LoginPage() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would validate credentials
    navigate('/dashboard');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-3 sm:p-4 relative"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Theme Toggle Button - Top Right */}
      {mounted && (
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:opacity-80 z-10"
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-border)'
          }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      )}

      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2" style={{ color: 'var(--color-primary)' }}>
            Bells University Portal
          </h1>
          <p className="text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Student Information System
          </p>
        </div>

        {/* Login Card */}
        <div
          className="p-4 sm:p-6 md:p-8 rounded-xl shadow-lg"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>
            Student Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm mb-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  size={20}
                  style={{ color: 'var(--color-text-tertiary)' }}
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="2024/18766"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-surface)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm mb-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  size={20}
                  style={{ color: 'var(--color-text-tertiary)' }}
                />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border outline-none focus:ring-2 transition-all text-sm sm:text-base"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-surface)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span style={{ color: 'var(--color-text-secondary)' }}>
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="hover:underline flex items-center gap-1"
                style={{ color: 'var(--color-primary)' }}
              >
                <KeyRound size={14} />
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 rounded-lg text-white transition-colors hover:opacity-90 text-sm sm:text-base font-medium flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <LogIn size={18} />
              Login
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <p> Visit ICT To Activate Portal</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <p>© 2026 Bells University Of Technology. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
