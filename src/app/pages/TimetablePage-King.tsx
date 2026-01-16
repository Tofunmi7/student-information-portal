import { DashboardLayout } from '@/app/components/DashboardLayout';
import { registeredCourses } from '@/data/mockData';
import { Calendar as CalendarIcon, Clock, Users, CalendarDays } from 'lucide-react';

export function TimetablePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00'
  ];

  // Create a timetable grid
  const timetable = days.map((day) => {
    return timeSlots.map((slot) => {
      const course = registeredCourses.find((c) =>
        c.schedule.some((s) => s.day === day && s.time.includes(slot.split(' - ')[0]))
      );
      return {
        day,
        slot,
        course: course
          ? {
              ...course,
              schedule: course.schedule.find(
                (s) => s.day === day && s.time.includes(slot.split(' - ')[0])
              )
            }
          : null
      };
    });
  });

  return (
    <DashboardLayout>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Weekly Timetable</h1>
        <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
          Your class schedule for Fall 2025
        </p>
      </div>

      {/* Legend */}
      <div
        className="p-3 sm:p-4 rounded-xl mb-4 sm:mb-6"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded"
              style={{ backgroundColor: 'var(--color-primary)', opacity: 0.9 }}
            />
            <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Scheduled Class
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded border"
              style={{ borderColor: 'var(--color-border)' }}
            />
            <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Free Time
            </span>
          </div>
        </div>
      </div>

      {/* Mobile View - List */}
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {days.map((day) => {
          const dayClasses = registeredCourses.filter((course) =>
            course.schedule.some((s) => s.day === day)
          );

          return (
            <div
              key={day}
              className="p-4 rounded-xl shadow-sm"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <h4 className="mb-3 flex items-center gap-2 text-sm sm:text-base">
                <CalendarIcon size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                {day}
              </h4>

              {dayClasses.length === 0 ? (
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  No classes scheduled
                </p>
              ) : (
                <div className="space-y-2 sm:space-y-3">
                  {dayClasses.map((course) => {
                    const scheduleForDay = course.schedule.find((s) => s.day === day);
                    return scheduleForDay ? (
                      <div
                        key={course.id}
                        className="p-3 rounded-lg text-xs sm:text-sm"
                        style={{ backgroundColor: 'var(--color-primary)', opacity: 0.9 }}
                      >
                        <h5 className="text-white font-medium mb-1">{course.code}</h5>
                        <p className="text-white opacity-90 mb-2 line-clamp-2">{course.name}</p>
                        <div className="flex flex-wrap gap-2 text-white opacity-80 text-xs">
                          <span>{scheduleForDay.time}</span>
                          <span>•</span>
                          <span>{scheduleForDay.venue}</span>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden lg:block overflow-x-auto">
        <div
          className="rounded-xl shadow-sm overflow-hidden"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-background)' }}>
                <th
                  className="p-2 sm:p-3 text-left border-r text-xs sm:text-sm"
                  style={{
                    color: 'var(--color-text-secondary)',
                    borderColor: 'var(--color-border)',
                    width: '100px'
                  }}
                >
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="p-2 sm:p-3 text-center border-r last:border-r-0 text-xs sm:text-sm"
                    style={{
                      color: 'var(--color-text-secondary)',
                      borderColor: 'var(--color-border)'
                    }}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, slotIdx) => (
                <tr
                  key={slot}
                  className="border-t"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <td
                    className="p-2 sm:p-3 text-xs sm:text-sm border-r"
                    style={{
                      color: 'var(--color-text-secondary)',
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-background)'
                    }}
                  >
                    {slot}
                  </td>
                  {days.map((day) => {
                    const cell = timetable
                      .find((d) => d[0].day === day)
                      ?.find((c) => c.slot === slot);
                    const course = cell?.course;

                    return (
                      <td
                        key={day}
                        className="p-1 sm:p-2 border-r last:border-r-0 align-top"
                        style={{ borderColor: 'var(--color-border)' }}
                      >
                        {course && course.schedule ? (
                          <div
                            className="p-2 sm:p-3 rounded-lg h-full text-xs sm:text-sm"
                            style={{ backgroundColor: 'var(--color-primary)', opacity: 0.9 }}
                          >
                            <h6 className="text-white font-medium mb-0.5 sm:mb-1">{course.code}</h6>
                            <p className="text-white opacity-90 mb-1 sm:mb-2 line-clamp-2">
                              {course.name}
                            </p>
                            <p className="text-white opacity-80 text-xs">
                              {course.schedule.venue}
                            </p>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div
        className="mt-4 sm:mt-6 p-4 rounded-xl"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">Weekly Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <CalendarDays size={20} style={{ color: 'var(--color-primary)', marginTop: '0.125rem' }} className="flex-shrink-0" />
            <div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Total Classes per Week</p>
              <p className="text-lg sm:text-xl mt-1" style={{ color: 'var(--color-primary)' }}>
                {registeredCourses.reduce((sum, c) => sum + c.schedule.length, 0)} Sessions
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={20} style={{ color: 'var(--color-primary)', marginTop: '0.125rem' }} className="flex-shrink-0" />
            <div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Contact Hours</p>
              <p className="text-lg sm:text-xl mt-1" style={{ color: 'var(--color-primary)' }}>
                {registeredCourses.reduce((sum, c) => sum + c.schedule.length * 1.5, 0)} Hours
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users size={20} style={{ color: 'var(--color-success)', marginTop: '0.125rem' }} className="flex-shrink-0" />
            <div>
              <p style={{ color: 'var(--color-text-secondary)' }}>Free Days</p>
              <p className="text-lg sm:text-xl mt-1" style={{ color: 'var(--color-success)' }}>
                {days.filter(
                  (day) => !registeredCourses.some((c) => c.schedule.some((s) => s.day === day))
                ).length}{' '}
                Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
