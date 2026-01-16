import { DashboardLayout } from '@/app/components/DashboardLayout';
import { registeredCourses, availableCourses } from '@/data/mockData';
import { BookOpen, User, MapPin, Clock, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function CoursesPage() {
  const [activeTab, setActiveTab] = useState<'registered' | 'available'>('registered');
  const [registered, setRegistered] = useState(registeredCourses);
  const [available, setAvailable] = useState(availableCourses);

  const handleRegister = (courseId: string) => {
    const course = available.find((c) => c.id === courseId);
    if (course) {
      setRegistered([...registered, { ...course, status: 'registered' as const }]);
      setAvailable(available.filter((c) => c.id !== courseId));
    }
  };

  const handleDrop = (courseId: string) => {
    const course = registered.find((c) => c.id === courseId);
    if (course) {
      setAvailable([...available, { ...course, status: 'available' as const }]);
      setRegistered(registered.filter((c) => c.id !== courseId));
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Course Registration</h1>
        <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
          Manage your course enrollments
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab('registered')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
            activeTab === 'registered' ? 'text-white' : ''
          }`}
          style={
            activeTab === 'registered'
              ? { backgroundColor: 'var(--color-primary)' }
              : {
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)'
                }
          }
        >
          Registered ({registered.length})
        </button>
        <button
          onClick={() => setActiveTab('available')}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors whitespace-nowrap text-xs sm:text-sm ${
            activeTab === 'available' ? 'text-white' : ''
          }`}
          style={
            activeTab === 'available'
              ? { backgroundColor: 'var(--color-primary)' }
              : {
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)'
                }
          }
        >
          Available ({available.length})
        </button>
      </div>

      {/* Registered Courses */}
      {activeTab === 'registered' && (
        <div className="space-y-3 sm:space-y-4">
          {registered.length === 0 ? (
            <div
              className="p-6 sm:p-8 rounded-xl text-center"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                No courses registered yet
              </p>
            </div>
          ) : (
            registered.map((course) => (
              <div
                key={course.id}
                className="p-4 sm:p-6 rounded-xl shadow-sm"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-lg font-medium truncate">{course.name}</h3>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                          {course.code}
                        </p>
                      </div>
                      <span
                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start whitespace-nowrap"
                        style={{
                          backgroundColor: 'var(--color-success)',
                          color: 'white',
                          opacity: 0.9
                        }}
                      >
                        Registered
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 min-w-0">
                        <User size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                        <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                          {course.instructor}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                        <span style={{ color: 'var(--color-text-secondary)' }}>
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      {course.schedule.map((sch, idx) => (
                        <div
                          key={idx}
                          className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm p-2 rounded-lg"
                          style={{ backgroundColor: 'var(--color-background)' }}
                        >
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <Clock size={14} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                            <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                              {sch.day}
                            </span>
                          </div>
                          <span style={{ color: 'var(--color-text-secondary)' }}>{sch.time}</span>
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <MapPin size={14} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                            <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                              {sch.venue}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDrop(course.id)}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors hover:bg-red-50 self-start lg:self-auto text-xs sm:text-sm"
                    style={{ color: 'var(--color-error)', border: '1px solid var(--color-error)' }}
                  >
                    <Trash2 size={16} />
                    <span>Drop</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Available Courses */}
      {activeTab === 'available' && (
        <div className="space-y-3 sm:space-y-4">
          {available.length === 0 ? (
            <div
              className="p-6 sm:p-8 rounded-xl text-center"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                No available courses at the moment
              </p>
            </div>
          ) : (
            available.map((course) => (
              <div
                key={course.id}
                className="p-4 sm:p-6 rounded-xl shadow-sm"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-lg font-medium truncate">{course.name}</h3>
                        <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                          {course.code}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-start whitespace-nowrap text-xs sm:text-sm">
                        <span
                          className="px-2 sm:px-3 py-1 rounded-full"
                          style={{
                            backgroundColor:
                              (course.enrolled || 0) / (course.capacity || 1) > 0.8
                                ? 'var(--color-error)'
                                : 'var(--color-success)',
                            color: 'white',
                            opacity: 0.9
                          }}
                        >
                          {course.enrolled}/{course.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 min-w-0">
                        <User size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                        <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                          {course.instructor}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                        <span style={{ color: 'var(--color-text-secondary)' }}>
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      {course.schedule.map((sch, idx) => (
                        <div
                          key={idx}
                          className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm p-2 rounded-lg"
                          style={{ backgroundColor: 'var(--color-background)' }}
                        >
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <Clock size={14} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                            <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                              {sch.day}
                            </span>
                          </div>
                          <span style={{ color: 'var(--color-text-secondary)' }}>{sch.time}</span>
                          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                            <MapPin size={14} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
                            <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                              {sch.venue}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleRegister(course.id)}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-white hover:opacity-90 self-start lg:self-auto text-xs sm:text-sm"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    disabled={(course.enrolled || 0) >= (course.capacity || 0)}
                  >
                    <Plus size={16} />
                    <span>Register</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </DashboardLayout>
  );
}
