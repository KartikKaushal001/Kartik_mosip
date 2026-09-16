import { useState, useEffect } from "react";
import { instituteService } from "@/services/instituteService";
import { studentPortalService } from "@/services/studentPortalService";
import { authService } from "@/services/authService";
import type { Institute, AcademicPerformanceData, SemesterRecord, CourseGrade } from "@/data/types";
import imgLogo from "@/imports/EducationalInstitutePortal-1/73da5574736f6a1e3d533885140e2c14827bbc1f.png";
import { Navbar } from "@/app/components/reusable/Navbar";
import { StatsCard } from "@/app/components/reusable/StatsCard";

// --- Back Link ---

function BackLink() {
  return (
    <div
      className="flex items-center gap-[8px] cursor-pointer"
      data-name="Button"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15.8333 10H4.16667" stroke="#6b7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="#6b7280" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] leading-[20px] tracking-[-0.1504px]">
        Back to Dashboard
      </span>
    </div>
  );
}

// --- Icons ---

function StatIconCGPA() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="#c5a55a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatIconTrend() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#3d5092" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 6H23V12" stroke="#3d5092" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// --- Semester Table ---

function SemesterTable({ record }: { record: SemesterRecord }) {
  return (
    <div className="mb-[40px]">
      <div className="flex items-center justify-between mb-[16px]">
        <div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828] leading-[24px]">
            {record.semesterName}
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#6b7280] leading-[18px]">
            {record.year}
          </p>
        </div>
        <div className="bg-[#eff4ff] text-[#1e40af] font-['Inter:Medium',sans-serif] font-medium text-[14px] px-[12px] py-[4px] rounded-[16px]">
          Semester GPA: {record.semesterGpa.toFixed(1)}
        </div>
      </div>

      <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <th className="px-[24px] py-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Course Code
              </th>
              <th className="px-[24px] py-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-[24px] py-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Credits
              </th>
              <th className="px-[24px] py-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Grade
              </th>
              <th className="px-[24px] py-[12px] font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#6b7280] uppercase tracking-wider">
                Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#e5e7eb]">
            {record.courses.map((course, idx) => (
              <tr key={idx} className="hover:bg-[#f9fafb] transition-colors">
                <td className="px-[24px] py-[16px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#101828] whitespace-nowrap">
                  {course.code}
                </td>
                <td className="px-[24px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#4a5565] whitespace-nowrap">
                  {course.name}
                </td>
                <td className="px-[24px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#4a5565] whitespace-nowrap">
                  {course.credits}
                </td>
                <td className="px-[24px] py-[16px] whitespace-nowrap">
                  <span className={`inline-flex items-center px-[8px] py-[2px] rounded-[12px] text-[12px] font-medium ${
                    course.grade.startsWith('A') ? 'bg-[#d1fae5] text-[#065f46]' :
                    course.grade.startsWith('B') ? 'bg-[#dbeafe] text-[#1e40af]' :
                    course.grade.startsWith('C') ? 'bg-[#fef3c7] text-[#92400e]' :
                    'bg-[#fee2e2] text-[#991b1b]'
                  }`}>
                    {course.grade}
                  </span>
                </td>
                <td className="px-[24px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#4a5565] whitespace-nowrap">
                  {course.points.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function StudentGradesPage() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [data, setData] = useState<AcademicPerformanceData | null>(null);

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    
    const loggedInId = authService.getLoggedInStudentId();
    if (!loggedInId) {
      window.dispatchEvent(new CustomEvent("navigate", { detail: "student-login" }));
      return;
    }
    
    studentPortalService.getAcademicPerformance(loggedInId).then(setData);
  }, []);

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

      <div className="w-full flex-1 px-[64px] py-[32px] flex flex-col gap-[24px] items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-[24px] items-start">
          <BackLink />

          <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-[40px] w-full">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] leading-[32px] mb-[32px]">
            Academic Performance
          </h1>

          {/* Highlights */}
          {data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[40px]">
              <StatsCard
                stat={{
                  id: "cgpa",
                  label: "Overall CGPA",
                  value: data.overallCgpa.toFixed(1),
                  caption: ""
                }}
                icon={<StatIconCGPA />}
                iconBgColor="bg-[#fef3c7]"
              />
              <StatsCard
                stat={{
                  id: "credits",
                  label: "Credits Completed",
                  value: `${data.creditsCompleted}/${data.totalCredits}`,
                  caption: ""
                }}
                icon={<StatIconTrend />}
                iconBgColor="bg-[#eff4ff]"
              />
            </div>
          )}

          {/* Semester Tables */}
          {data?.semesters.map((semester, idx) => (
            <SemesterTable key={idx} record={semester} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
