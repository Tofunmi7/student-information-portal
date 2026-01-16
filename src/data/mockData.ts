export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
  program: string;
  year: number;
  semester: string;
  gpa: number;
  avatar?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  instructor: string;
  schedule: {
    day: string;
    time: string;
    venue: string;
  }[];
  semester: string;
  status?: 'registered' | 'available' | 'dropped';
  capacity?: number;
  enrolled?: number;
}

export interface Grade {
  courseId: string;
  courseCode: string;
  courseName: string;
  credits: number;
  grade: string;
  gradePoint: number;
  semester: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'academic' | 'event' | 'alert' | 'general';
  author: string;
}

// Mock current student
export const currentStudent: Student = {
  id: '1',
  firstName: 'Tofunmi',
  lastName: 'Olumuyiwa',
  email: 'tofunmiolumuyiwa13@gmail.com',
  studentId: '2024/13042',
  program: 'Computer Science',
  year: 2,
  semester: 'First Semester',
  gpa: 4.89,
  avatar: 'TO'
};

// Mock courses data
export const registeredCourses: Course[] = [
  {
    id: '1',
    code: 'CS301',
    name: 'Data Structures and Algorithms',
    credits: 3,
    instructor: 'Dr. Michael Chen',
    schedule: [
      { day: 'Monday', time: '09:00 - 10:30', venue: 'Room A-201' },
      { day: 'Wednesday', time: '09:00 - 10:30', venue: 'Room A-201' }
    ],
    semester: 'First Semester',
    status: 'registered'
  },
  {
    id: '2',
    code: 'CS302',
    name: 'Database Management Systems',
    credits: 3,
    instructor: 'Prof. Emily Rodriguez',
    schedule: [
      { day: 'Tuesday', time: '11:00 - 12:30', venue: 'Lab B-105' },
      { day: 'Thursday', time: '11:00 - 12:30', venue: 'Lab B-105' }
    ],
    semester: 'First Semester',
    status: 'registered'
  },
  {
    id: '3',
    code: 'CS303',
    name: 'Operating Systems',
    credits: 2,
    instructor: 'Dr. Robert Kim',
    schedule: [
      { day: 'Monday', time: '14:00 - 15:30', venue: 'Room C-301' },
      { day: 'Friday', time: '10:00 - 11:30', venue: 'Room C-301' }
    ],
    semester: 'First Semester',
    status: 'registered'
  },
  {
    id: '4',
    code: 'MATH301',
    name: 'Discrete Mathematics',
    credits: 2,
    instructor: 'Dr. Anna Williams',
    schedule: [
      { day: 'Tuesday', time: '09:00 - 10:30', venue: 'Room D-102' },
      { day: 'Thursday', time: '09:00 - 10:30', venue: 'Room D-102' }
    ],
    semester: 'First Semester',
    status: 'registered'
  },
  {
    id: '5',
    code: 'ENG301',
    name: 'Technical Writing',
    credits: 1,
    instructor: 'Prof. James Miller',
    schedule: [
      { day: 'Wednesday', time: '14:00 - 15:30', venue: 'Room E-204' }
    ],
    semester: 'First Semester',
    status: 'registered'
  }
];

export const availableCourses: Course[] = [
  {
    id: '6',
    code: 'CS304',
    name: 'Software Engineering',
    credits: 2,
    instructor: 'Dr. David Brown',
    schedule: [
      { day: 'Monday', time: '11:00 - 12:30', venue: 'Room A-305' },
      { day: 'Wednesday', time: '11:00 - 12:30', venue: 'Room A-305' }
    ],
    semester: 'First Semester',
    status: 'available',
    capacity: 40,
    enrolled: 28
  },
  {
    id: '7',
    code: 'CS305',
    name: 'Computer Networks',
    credits: 4,
    instructor: 'Prof. Lisa Anderson',
    schedule: [
      { day: 'Tuesday', time: '14:00 - 15:30', venue: 'Lab B-203' },
      { day: 'Thursday', time: '14:00 - 15:30', venue: 'Lab B-203' }
    ],
    semester: 'First Semester',
    status: 'available',
    capacity: 35,
    enrolled: 32
  },
  {
    id: '8',
    code: 'CS306',
    name: 'Artificial Intelligence',
    credits: 4,
    instructor: 'Dr. Kevin Zhang',
    schedule: [
      { day: 'Wednesday', time: '16:00 - 17:30', venue: 'Room C-401' },
      { day: 'Friday', time: '14:00 - 15:30', venue: 'Room C-401' }
    ],
    semester: 'First Semester',
    status: 'available',
    capacity: 30,
    enrolled: 25
  }
];

// Mock grades data
export const academicRecords: Grade[] = [
  // Fall 2024
  { courseId: '101', courseCode: 'CS201', courseName: 'Object-Oriented Programming', credits: 4, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024' },
  { courseId: '102', courseCode: 'CS202', courseName: 'Computer Architecture', credits: 3, grade: 'A-', gradePoint: 3.7, semester: 'Fall 2024' },
  { courseId: '103', courseCode: 'MATH201', courseName: 'Linear Algebra', credits: 3, grade: 'B+', gradePoint: 3.3, semester: 'Fall 2024' },
  { courseId: '104', courseCode: 'PHYS201', courseName: 'Physics II', credits: 4, grade: 'B', gradePoint: 3.0, semester: 'Fall 2024' },
  { courseId: '105', courseCode: 'ENG201', courseName: 'Communication Skills', credits: 2, grade: 'A', gradePoint: 4.0, semester: 'Fall 2024' },
  
  // Spring 2025
  { courseId: '106', courseCode: 'CS211', courseName: 'Web Development', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Spring 2025' },
  { courseId: '107', courseCode: 'CS212', courseName: 'Computer Graphics', credits: 4, grade: 'A-', gradePoint: 3.7, semester: 'Spring 2025' },
  { courseId: '108', courseCode: 'MATH211', courseName: 'Probability & Statistics', credits: 3, grade: 'A', gradePoint: 4.0, semester: 'Spring 2025' },
  { courseId: '109', courseCode: 'CS213', courseName: 'Software Design Patterns', credits: 3, grade: 'B+', gradePoint: 3.3, semester: 'Spring 2025' },
  { courseId: '110', courseCode: 'MGT201', courseName: 'Project Management', credits: 2, grade: 'A-', gradePoint: 3.7, semester: 'Spring 2025' }
];

// Mock announcements data
export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Mid-Semester Examination Schedule Released',
    content: 'The mid-semester examination schedule for Fall 2025 has been published. Please check your student portal for individual exam dates and venues. All exams will be conducted between October 15-25, 2025.',
    date: '2025-09-20',
    category: 'academic',
    author: 'Academic Affairs Office'
  },
  {
    id: '2',
    title: 'Course Registration Deadline Extended',
    content: 'Due to technical issues, the course registration deadline has been extended to September 30, 2025. Students who missed the initial deadline can now register for courses.',
    date: '2025-09-18',
    category: 'alert',
    author: 'Registrar Office'
  },
  {
    id: '3',
    title: 'Annual Tech Fest 2025 - Call for Participation',
    content: 'The Department of Computer Science invites all students to participate in the Annual Tech Fest 2025. Events include hackathon, coding competitions, project exhibitions, and tech talks. Registration opens October 1st.',
    date: '2025-09-15',
    category: 'event',
    author: 'CS Department'
  },
  {
    id: '4',
    title: 'Library Hours Extended During Exam Period',
    content: 'The university library will extend its operating hours during the examination period. The library will be open 24/7 from October 10 to November 5, 2025.',
    date: '2025-09-12',
    category: 'general',
    author: 'Library Services'
  },
  {
    id: '5',
    title: 'Guest Lecture on Machine Learning Applications',
    content: 'Join us for a guest lecture by Dr. Sarah Mitchell from MIT on "Real-world Applications of Machine Learning". Date: September 28, 2025, Time: 3:00 PM, Venue: Auditorium Hall.',
    date: '2025-09-10',
    category: 'event',
    author: 'CS Department'
  },
  {
    id: '6',
    title: 'Scholarship Applications Now Open',
    content: 'Applications for merit-based scholarships for the academic year 2025-2026 are now open. Eligible students with a GPA of 3.5 or above can apply through the student portal by October 15, 2025.',
    date: '2025-09-08',
    category: 'general',
    author: 'Financial Aid Office'
  }
];
