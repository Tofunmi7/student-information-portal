import { DashboardLayout } from '@/app/components/DashboardLayout';
import { StatCard } from '@/app/components/StatCard';
import { Award, BookOpen, Bell, Calendar, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { currentStudent, registeredCourses, announcements } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const navigate = useNavigate();
  const recentAnnouncements = announcements.slice(0, 3);

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">
          Welcome back, {currentStudent.firstName}!
        </h1>
        <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
          Here's what's happening with your studies
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
        <StatCard
          icon={Award}
          label="Current GPA"
          value={currentStudent.gpa.toFixed(2)}
          bgColor="var(--color-success)"
        />
        <StatCard
          icon={BookOpen}
          label="Registered Courses"
          value={registeredCourses.length}
          bgColor="var(--color-primary)"
        />
        <StatCard
          icon={Calendar}
          label="Current Semester"
          value={currentStudent.semester}
          bgColor="var(--color-secondary)"
        />
        <StatCard
          icon={Bell}
          label="Notifications"
          value={announcements.length}
          bgColor="var(--color-error)"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} />
              Current Courses
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {registeredCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-3 sm:p-4 rounded-lg border"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-medium truncate">{course.name}</h4>
                      <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {course.code} • {course.instructor}
                      </p>
                    </div>
                    <span
                      className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                      style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        opacity: 0.9
                      }}
                    >
                      {course.credits} Credits
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    {course.schedule.map((sch, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <Calendar size={12} />
                        {sch.day} {sch.time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Announcements */}
        <div>
          <div
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <Bell size={20} style={{ color: 'var(--color-primary)' }} />
              Recent Announcements
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {recentAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="pb-3 sm:pb-4 border-b last:border-b-0 last:pb-0"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{
                        backgroundColor:
                          announcement.category === 'alert'
                            ? 'var(--color-error)'
                            : announcement.category === 'event'
                            ? 'var(--color-secondary)'
                            : 'var(--color-info)'
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs sm:text-sm line-clamp-2">{announcement.title}</h5>
                      <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {new Date(announcement.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/announcements')}
              className="w-full mt-3 sm:mt-4 py-2 rounded-lg border transition-colors hover:bg-gray-50 text-sm flex items-center justify-center gap-2"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)'
              }}
            >
              View All Announcements
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
