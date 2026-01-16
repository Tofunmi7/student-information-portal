import { DashboardLayout } from '@/app/components/DashboardLayout';
import { academicRecords } from '@/data/mockData';
import { Award, TrendingUp, GraduationCap, FileText } from 'lucide-react';

export function ResultsPage() {
  // Group records by semester
  const groupedRecords = academicRecords.reduce((acc, record) => {
    if (!acc[record.semester]) {
      acc[record.semester] = [];
    }
    acc[record.semester].push(record);
    return acc;
  }, {} as Record<string, typeof academicRecords>);

  // Calculate semester GPAs
  const semesterGPAs = Object.entries(groupedRecords).map(([semester, records]) => {
    const totalPoints = records.reduce((sum, r) => sum + r.gradePoint * r.credits, 0);
    const totalCredits = records.reduce((sum, r) => sum + r.credits, 0);
    const gpa = totalPoints / totalCredits;
    return { semester, gpa, records };
  });

  // Calculate overall GPA
  const totalPoints = academicRecords.reduce((sum, r) => sum + r.gradePoint * r.credits, 0);
  const totalCredits = academicRecords.reduce((sum, r) => sum + r.credits, 0);
  const overallGPA = totalPoints / totalCredits;

  return (
    <DashboardLayout>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Academic Records</h1>
        <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
          View your grades and academic performance
        </p>
      </div>

      {/* GPA Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-8">
        <div
          className="p-4 sm:p-6 rounded-xl shadow-sm"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Award size={20} style={{ color: 'var(--color-success)' }} className="flex-shrink-0" />
            <h4 className="text-sm sm:text-base">Overall GPA</h4>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: 'var(--color-success)' }}>
            {overallGPA.toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Out of 5.00
          </p>
        </div>

        <div
          className="p-4 sm:p-6 rounded-xl shadow-sm"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <TrendingUp size={20} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
            <h4 className="text-sm sm:text-base">Total Credits</h4>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: 'var(--color-primary)' }}>
            {totalCredits}
          </p>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Credits completed
          </p>
        </div>

        <div
          className="p-4 sm:p-6 rounded-xl shadow-sm"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Award size={20} style={{ color: 'var(--color-secondary)' }} className="flex-shrink-0" />
            <h4 className="text-sm sm:text-base">Academic Standing</h4>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: 'var(--color-secondary)' }}>
            Dean's List
          </p>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            Excellent performance
          </p>
        </div>
      </div>

      {/* Semester Records */}
      <div className="space-y-4 sm:space-y-6">
        {semesterGPAs.reverse().map(({ semester, gpa, records }) => (
          <div
            key={semester}
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
              <h3 className="text-base sm:text-lg flex items-center gap-2">
                <FileText size={18} style={{ color: 'var(--color-primary)' }} />
                {semester}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Semester GPA:
                </span>
                <span
                  className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                  style={{
                    backgroundColor: gpa >= 3.5 ? 'var(--color-success)' : 'var(--color-warning)',
                    color: 'white',
                    opacity: 0.9
                  }}
                >
                  {gpa.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr
                    className="border-b"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <th
                      className="text-left py-2 sm:py-3 px-2 sm:px-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Course Code
                    </th>
                    <th
                      className="text-left py-2 sm:py-3 px-2 sm:px-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Course Name
                    </th>
                    <th
                      className="text-center py-2 sm:py-3 px-2 sm:px-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Credits
                    </th>
                    <th
                      className="text-center py-2 sm:py-3 px-2 sm:px-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Grade
                    </th>
                    <th
                      className="text-center py-2 sm:py-3 px-2 sm:px-4"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Grade Point
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr
                      key={record.courseId}
                      className="border-b last:border-b-0"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <td className="py-2 sm:py-3 px-2 sm:px-4" style={{ color: 'var(--color-text-primary)' }}>
                        {record.courseCode}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4" style={{ color: 'var(--color-text-primary)' }}>
                        {record.courseName}
                      </td>
                      <td
                        className="py-2 sm:py-3 px-2 sm:px-4 text-center"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {record.credits}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                        <span
                          className="px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor:
                              record.gradePoint >= 3.7
                                ? 'var(--color-success)'
                                : record.gradePoint >= 3.0
                                ? 'var(--color-warning)'
                                : 'var(--color-error)',
                            color: 'white',
                            opacity: 0.9
                          }}
                        >
                          {record.grade}
                        </span>
                      </td>
                      <td
                        className="py-2 sm:py-3 px-2 sm:px-4 text-center"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {record.gradePoint.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-2 sm:space-y-3">
              {records.map((record) => (
                <div
                  key={record.courseId}
                  className="p-3 rounded-lg border"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div className="min-w-0">
                      <h5 className="text-xs sm:text-sm font-medium">{record.courseCode}</h5>
                      <p className="text-xs mt-1 truncate" style={{ color: 'var(--color-text-secondary)' }}>
                        {record.courseName}
                      </p>
                    </div>
                    <span
                      className="px-2 py-1 rounded-full text-xs whitespace-nowrap flex-shrink-0"
                      style={{
                        backgroundColor:
                          record.gradePoint >= 3.7
                            ? 'var(--color-success)'
                            : record.gradePoint >= 3.0
                            ? 'var(--color-warning)'
                            : 'var(--color-error)',
                        color: 'white',
                        opacity: 0.9
                      }}
                    >
                      {record.grade}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    <span>{record.credits} Credits</span>
                    <span>{record.gradePoint.toFixed(1)} Points</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
