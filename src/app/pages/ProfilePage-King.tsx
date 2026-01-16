import { DashboardLayout } from '@/app/components/DashboardLayout';
import { currentStudent } from '@/data/mockData';
import { Mail, Phone, MapPin, Book, Calendar, Award, Edit, User, Shield, Info, GraduationCap } from 'lucide-react';

export function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl">Student Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Profile Card */}
        <div
          className="p-4 sm:p-6 rounded-xl shadow-sm"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="text-center mb-4 sm:mb-6">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {currentStudent.avatar}
            </div>
            <h3 className="text-base sm:text-lg mb-1">
              {currentStudent.firstName} {currentStudent.lastName}
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {currentStudent.studentId}
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
              <span className="text-xs sm:text-sm break-all" style={{ color: 'var(--color-text-secondary)' }}>
                {currentStudent.email}
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0" />
              <span style={{ color: 'var(--color-text-secondary)' }}>
                +234 810 576 6319
              </span>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <MapPin size={16} style={{ color: 'var(--color-text-tertiary)' }} className="flex-shrink-0 mt-0.5" />
              <span style={{ color: 'var(--color-text-secondary)' }}>
                123 University Ave, City, State
              </span>
            </div>
          </div>

          <button
            className="w-full mt-4 sm:mt-6 py-2 rounded-lg text-white transition-colors hover:opacity-90 text-sm sm:text-base flex items-center justify-center gap-2"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Edit size={18} />
            Edit Profile
          </button>
        </div>

        {/* Academic Information */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Academic Details */}
          <div
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <GraduationCap size={20} style={{ color: 'var(--color-primary)' }} />
              Academic Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Book size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                  <h5 className="text-sm sm:text-base">Program</h5>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {currentStudent.program}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                  <h5 className="text-sm sm:text-base">Year & Semester</h5>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Year {currentStudent.year} - {currentStudent.semester}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                  <h5 className="text-sm sm:text-base">Cumulative GPA</h5>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {currentStudent.gpa.toFixed(2)} / 5.00
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Book size={18} style={{ color: 'var(--color-primary)' }} className="flex-shrink-0" />
                  <h5 className="text-sm sm:text-base">Enrollment Status</h5>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-success)' }}>
                  Undergraduate Student 
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <User size={20} style={{ color: 'var(--color-primary)' }} />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Date of Birth
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  January 15, 2008
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Gender
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Female
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Nationality
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Nigerian
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Emergency Contact
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  +234 912 410 5018
                </p>
              </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div
            className="p-4 sm:p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg flex items-center gap-2">
              <Shield size={20} style={{ color: 'var(--color-primary)' }} />
              Guardian Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Guardian Name
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Michael Johnson
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Relationship
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Father
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Contact Number
                </h6>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  +1 (555) 456-7890
                </p>
              </div>

              <div>
                <h6 className="text-xs sm:text-sm mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Email
                </h6>
                <p className="text-xs sm:text-sm break-all" style={{ color: 'var(--color-text-secondary)' }}>
                  michael.johnson@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
