import { DashboardLayout } from '@/app/components/DashboardLayout';
import { announcements } from '@/data/mockData';
import { Bell, AlertCircle, Calendar, Info } from 'lucide-react';

export function AnnouncementsPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'alert':
        return AlertCircle;
      case 'event':
        return Calendar;
      case 'academic':
        return Bell;
      default:
        return Info;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'alert':
        return 'var(--color-error)';
      case 'event':
        return 'var(--color-secondary)';
      case 'academic':
        return 'var(--color-primary)';
      default:
        return 'var(--color-info)';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <DashboardLayout>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl mb-2">Announcements & Notices</h1>
        <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
          Stay updated with important information
        </p>
      </div>

      {/* Category Filter */}
      <div
        className="p-3 sm:p-4 rounded-xl mb-4 sm:mb-6"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button
            className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-colors"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white'
            }}
          >
            All ({announcements.length})
          </button>
          <button
            className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition-colors hover:bg-gray-50"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)'
            }}
          >
            Academic ({announcements.filter((a) => a.category === 'academic').length})
          </button>
          <button
            className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition-colors hover:bg-gray-50"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)'
            }}
          >
            Events ({announcements.filter((a) => a.category === 'event').length})
          </button>
          <button
            className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm border transition-colors hover:bg-gray-50"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-secondary)'
            }}
          >
            Alerts ({announcements.filter((a) => a.category === 'alert').length})
          </button>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-3 sm:space-y-4">
        {announcements.map((announcement) => {
          const Icon = getCategoryIcon(announcement.category);
          const categoryColor = getCategoryColor(announcement.category);

          return (
            <div
              key={announcement.id}
              className="p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: categoryColor, opacity: 0.1 }}
                  >
                    <Icon size={18} style={{ color: categoryColor, opacity: 1 }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base mb-1 line-clamp-2">{announcement.title}</h4>
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                      <span
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          backgroundColor: categoryColor,
                          color: 'white',
                          opacity: 0.9
                        }}
                      >
                        {getCategoryLabel(announcement.category)}
                      </span>
                      <span style={{ color: 'var(--color-text-tertiary)' }}>•</span>
                      <span className="truncate" style={{ color: 'var(--color-text-secondary)' }}>
                        {announcement.author}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-shrink-0"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <Calendar size={14} />
                  {new Date(announcement.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {announcement.content}
              </p>

              {/* Actions */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t flex gap-2 sm:gap-3" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  className="text-xs sm:text-sm hover:underline"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Read More
                </button>
                <button
                  className="text-xs sm:text-sm hover:underline"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Mark as Read
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="mt-4 sm:mt-6 text-center">
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition-colors hover:bg-gray-50 text-xs sm:text-sm"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-secondary)'
          }}
        >
          Load More Announcements
        </button>
      </div>
    </DashboardLayout>
  );
}
