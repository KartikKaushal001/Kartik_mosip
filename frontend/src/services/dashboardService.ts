// ---------------------------------------------------------------------------
// Dashboard Service
// Computes dashboard statistics from the live backend data.
// Stats like total students and active students are derived from real records.
// Activity feed and upcoming graduations remain as presentational mock data
// since the backend doesn't serve those yet.
// ---------------------------------------------------------------------------

import { notifications } from "@/data";
import type { DashboardStats, DashboardStat, Notification, UpcomingGraduation } from "@/data/types";
import { API_ENDPOINTS, DEFAULT_HEADERS } from "@/config/api";

interface BackendGraduationDto {
  id: string;
  studentId: string;
  registrationNumber: string;
  degreeTitle: string;
  graduationMonth: number;
  graduationYear: number;
  classification: string;
  certificateStatus: string;
}

export const dashboardService = {
  /** Fetch all dashboard data: compute stats from the real backend, keep mock activity feed. */
  async getDashboard(): Promise<DashboardStats> {
    const stats = await dashboardService.getStatTiles();
    const recentActivity = await dashboardService.getRecentActivity();
    const upcomingGraduations = await dashboardService.getUpcomingGraduations();

    return {
      stats,
      recentActivity,
      upcomingGraduations,
      newlyRegisteredStudentIds: [],
    };
  },

  /** Compute dashboard statistic tiles from real backend data. */
  async getStatTiles(): Promise<DashboardStat[]> {
    try {
      // Fetch all students
      const studentsRes = await fetch(API_ENDPOINTS.students, {
        headers: DEFAULT_HEADERS,
      });
      const students = studentsRes.ok ? await studentsRes.json() : [];

      // Fetch graduation records (ISSUED status to count certificates)
      let graduationRecords: BackendGraduationDto[] = [];
      try {
        const gradRes = await fetch(`${API_ENDPOINTS.graduation}/search?status=ISSUED`, {
          headers: DEFAULT_HEADERS,
        });
        if (gradRes.ok) {
          graduationRecords = await gradRes.json();
        }
      } catch {
        // Graduation search endpoint may not be available — fall back gracefully
      }

      // Fetch pending graduation records
      let pendingRecords: BackendGraduationDto[] = [];
      try {
        const pendingRes = await fetch(`${API_ENDPOINTS.graduation}/search?status=PENDING`, {
          headers: DEFAULT_HEADERS,
        });
        if (pendingRes.ok) {
          pendingRecords = await pendingRes.json();
        }
      } catch {
        // Fall back gracefully
      }

      const totalStudents = students.length;
      const activeStudents = students.filter(
        (s: { status?: string }) => !s.status || s.status === "Active" || s.status === "ACTIVE"
      ).length;

      // Unique course programs
      const courses = new Set(students.map((s: { courseProgram?: string }) => s.courseProgram).filter(Boolean));

      // Students graduating this year — check graduation records
      const currentYear = new Date().getFullYear();
      const graduatingThisYear = students.filter(
        (s: { status?: string }) => s.status === "GRADUATED" || s.status === "Graduated"
      ).length;

      const certificatesIssued = graduationRecords.length;
      const pendingRequests = pendingRecords.length;

      return [
        { id: "total-students", label: "Total Students", value: String(totalStudents), caption: "" },
        { id: "active-students", label: "Active Students", value: String(activeStudents), caption: "" },
        { id: "courses-offered", label: "Courses Offered", value: String(courses.size), caption: "" },
        {
          id: "graduating-this-year",
          label: "Graduating This Year",
          value: String(graduatingThisYear),
          caption: `Expected in ${currentYear}`,
        },
        {
          id: "certificates-issued",
          label: "Certificates Issued",
          value: String(certificatesIssued),
          caption: "All-time total",
        },
        {
          id: "pending-requests",
          label: "Pending Requests",
          value: String(pendingRequests),
          caption: pendingRequests > 0 ? "Requires attention" : "All clear",
        },
      ];
    } catch (error) {
      console.error("Error computing dashboard stats:", error);
      // Return zeros on error rather than crashing
      return [
        { id: "total-students", label: "Total Students", value: "0", caption: "Error loading" },
        { id: "active-students", label: "Active Students", value: "0", caption: "Error loading" },
        { id: "courses-offered", label: "Courses Offered", value: "0", caption: "" },
        { id: "graduating-this-year", label: "Graduating This Year", value: "0", caption: "" },
        { id: "certificates-issued", label: "Certificates Issued", value: "0", caption: "" },
        { id: "pending-requests", label: "Pending Requests", value: "0", caption: "" },
      ];
    }
  },

  /** Fetch recent activity notifications (mock — backend doesn't serve activity feeds). */
  async getRecentActivity(): Promise<Notification[]> {
    return notifications;
  },

  /** Fetch upcoming graduation events (mock — derived from real data in the future). */
  async getUpcomingGraduations(): Promise<UpcomingGraduation[]> {
    // TODO: Replace with real graduation data when backend supports aggregation
    return [
      { id: "grad-may-2026", period: "May 2026", studentsLabel: "TBD", program: "Various Programs" },
      { id: "grad-aug-2026", period: "August 2026", studentsLabel: "TBD", program: "Various Programs" },
      { id: "grad-dec-2026", period: "December 2026", studentsLabel: "TBD", program: "Various Programs" },
    ];
  },

  /** Fetch newly registered student IDs. */
  async getNewlyRegisteredStudentIds(): Promise<string[]> {
    // Could be derived from sorting students by createdAt in the future
    return [];
  },
};
