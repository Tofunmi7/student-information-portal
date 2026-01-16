import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { ResultsPage } from './pages/ResultsPage';
import { CoursesPage } from './pages/CoursesPage';
import { TimetablePage } from './pages/TimetablePage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
