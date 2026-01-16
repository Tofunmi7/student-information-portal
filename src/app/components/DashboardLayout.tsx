import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full" style={{ backgroundColor: 'var(--color-background)' }}>
      <Sidebar />
      
      <div className="flex-1 flex flex-col w-full">
        <Header />
        
        <main className="flex-1 overflow-y-auto px-3 py-4 sm:p-4 md:p-6 lg:p-8 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
