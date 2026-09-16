import { useState, useEffect } from "react";
import { instituteService } from "@/services/instituteService";
import { studentPortalService } from "@/services/studentPortalService";
import { authService } from "@/services/authService";
import type { Institute, StudentDashboardData } from "@/data/types";
import imgLogo from "@/imports/EducationalInstitutePortal-1/73da5574736f6a1e3d533885140e2c14827bbc1f.png";
import { Navbar } from "@/app/components/reusable/Navbar";
import { StatsCard } from "@/app/components/reusable/StatsCard";

// ---------------------------------------------------------------------------
// Student Dashboard Page
// Shows welcome banner, quick-action cards, notifications, and stat tiles.
// All data loaded through studentPortalService for backend-readiness.
// ---------------------------------------------------------------------------

// --- Welcome Banner ---

function WelcomeBanner({ name, studentId }: { name: string; studentId: string }) {
  return (
    <div className="bg-gradient-to-r from-[#263961] to-[#3d5c9d] rounded-[12px] px-[32px] py-[24px] flex items-center justify-between">
      <div>
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[28px] text-white leading-[36px]">
          Welcome back, {name}!
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[rgba(255,255,255,0.7)] leading-[24px] mt-[4px]">
          Student ID: {studentId}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="27" stroke="#c5a55a" strokeWidth="2" />
          <path
            d="M28 28C31.3137 28 34 25.3137 34 22C34 18.6863 31.3137 16 28 16C24.6863 16 22 18.6863 22 22C22 25.3137 24.6863 28 28 28Z"
            stroke="#c5a55a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 40C18 35.5817 22.4772 32 28 32C33.5228 32 38 35.5817 38 40"
            stroke="#c5a55a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

// --- Action Cards ---

function ActionCard({
  icon,
  title,
  subtitle,
  boldWord,
  iconBg,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  boldWord?: string;
  iconBg: string;
}) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[20px] flex items-center gap-[16px] cursor-pointer hover:shadow-md transition-shadow" data-name="Button">
      <div
        className="flex items-center justify-center rounded-[10px] size-[48px] shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828] leading-[24px]">
          {title}
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#4a5565] leading-[20px] tracking-[-0.1504px]">
          {boldWord ? (
            <>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">{boldWord}</span>{" "}
              {subtitle.replace(boldWord, "").trim()}
            </>
          ) : (
            subtitle
          )}
        </p>
      </div>
    </div>
  );
}

function CertificateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GradesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 21C4.5 17.6863 7.85786 15 12 15C16.1421 15 19.5 17.6863 19.5 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActionCards() {
  return (
    <div className="grid grid-cols-3 gap-[16px]">
      <ActionCard
        icon={<CertificateIcon />}
        title="Get My Certificate"
        subtitle="View and Download degree certificate."
        boldWord="View and Download"
        iconBg="#3d5092"
      />
      <ActionCard
        icon={<GradesIcon />}
        title="View Grades"
        subtitle="Check your academic records"
        iconBg="#3d5092"
      />
      <ActionCard
        icon={<ProfileIcon />}
        title="My Profile"
        subtitle="View your personal details."
        iconBg="#3d5092"
      />
    </div>
  );
}

// --- Notifications ---

function NotificationItem({
  message,
  timeAgo,
  type,
}: {
  message: string;
  timeAgo: string;
  type: "success" | "info";
}) {
  const bgColor = type === "success" ? "bg-[#ecfdf3]" : "bg-[#eff4ff]";
  const borderColor = type === "success" ? "border-l-[#22c55e]" : "border-l-[#3b82f6]";
  const textColor = type === "success" ? "text-[#166534]" : "text-[#1e40af]";

  return (
    <div className={`${bgColor} ${borderColor} border-l-4 rounded-[8px] px-[20px] py-[14px]`}>
      <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14px] ${textColor} leading-[20px]`}>
        {message}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#6b7280] leading-[18px] mt-[4px]">
        {timeAgo}
      </p>
    </div>
  );
}

function NotificationsSection({ notifications }: { notifications: { id: string; message: string; timeAgo: string; type: "success" | "info" }[] }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[24px]">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z" stroke="#101828" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42113 18.2537 9.16815 18.1079C8.91516 17.9622 8.70484 17.7526 8.55835 17.5" stroke="#101828" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828] leading-[24px]">
          Recent Notifications
        </h2>
      </div>
      <div className="flex flex-col gap-[12px]">
        {notifications.map((n) => (
          <NotificationItem key={n.id} message={n.message} timeAgo={n.timeAgo} type={n.type} />
        ))}
      </div>
    </div>
  );
}

// --- Stat Cards ---

function StatIconCGPA() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatIconCredits() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#3d5092" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#3d5092" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#3d5092" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="#3d5092" strokeWidth="2" />
    </svg>
  );
}

function StatIconCertificates() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2V8H20" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCards({ stats }: { stats: { id: string; label: string; value: string; icon: string }[] }) {
  const iconMap: Record<string, React.ReactNode> = {
    cgpa: <StatIconCGPA />,
    credits: <StatIconCredits />,
    certificates: <StatIconCertificates />,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
      {stats.map((s) => (
        <StatsCard
          key={s.id}
          stat={{ id: s.id, label: s.label, value: s.value, caption: "" }}
          icon={iconMap[s.icon] || <StatIconCGPA />}
          iconBgColor="bg-[#fef3c7]"
        />
      ))}
    </div>
  );
}

// --- Main Page ---

export default function StudentDashboardPage() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [dashboardData, setDashboardData] = useState<StudentDashboardData | null>(null);

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    
    const loggedInId = authService.getLoggedInStudentId();
    if (!loggedInId) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: "student-login" }));
      return;
    }
    
    studentPortalService.getStudentDashboard(loggedInId).then(setDashboardData);
  }, []);

  const student = dashboardData?.student;

  const handleLogout = async () => {
    await authService.logout();
    authService.setLoggedInStudentId(null);
    window.dispatchEvent(new CustomEvent("navigate", { detail: "student-login" }));
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen w-full flex flex-col">
      {institute && (
        <Navbar
          institute={{ ...institute, portalLabel: "Student Portal" }}
          logoSrc={imgLogo}
          onLogout={handleLogout}
        />
      )}

      <div className="w-full flex-1 px-[64px] py-[32px] flex flex-col gap-[24px]">
        {/* Welcome Banner */}
        <WelcomeBanner
          name={student?.fullName || "Student"}
          studentId={student?.studentId || ""}
        />

        {/* Action Cards */}
        <ActionCards />

        {/* Notifications */}
        {dashboardData && (
          <NotificationsSection notifications={dashboardData.notifications} />
        )}

        {/* Stats */}
        {dashboardData && <StatCards stats={dashboardData.stats} />}
      </div>
    </div>
  );
}
