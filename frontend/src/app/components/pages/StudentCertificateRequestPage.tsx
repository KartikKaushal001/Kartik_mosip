import { useState, useEffect } from "react";
import { instituteService } from "@/services/instituteService";
import { studentPortalService } from "@/services/studentPortalService";
import type { Institute, Student } from "@/data/types";
import imgLogo from "@/imports/EducationalInstitutePortal-1/73da5574736f6a1e3d533885140e2c14827bbc1f.png";
import { Navbar } from "@/app/components/reusable/Navbar";

// ---------------------------------------------------------------------------
// Student Certificate Request Page
// Allows the student to review personal and academic information, confirm
// eligibility, and submit a certificate generation request.
// ---------------------------------------------------------------------------

// --- Helper Components ---

// --- Back Link ---

function BackLink() {
  return (
    <div className="flex items-center gap-[6px] cursor-pointer mb-[24px]" data-name="Button">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] leading-[20px] tracking-[-0.1504px]">
        Back to Dashboard
      </p>
    </div>
  );
}

// --- Eligibility Banner ---

function EligibilityBanner({ eligible, message }: { eligible: boolean; message: string }) {
  if (!eligible) return null;
  return (
    <div className="bg-[#ecfdf3] border border-[#a7f3d0] rounded-[8px] px-[20px] py-[14px] flex items-start gap-[12px] mb-[24px]">
      <div className="mt-[2px] shrink-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2" />
          <path d="M6 10L9 13L14 7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#166534] leading-[20px]">
          Eligible for Certificate
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#166534] leading-[20px] mt-[2px]">
          {message}
        </p>
      </div>
    </div>
  );
}

// --- Info Section Header ---

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-[#f9fafb] rounded-t-[8px] px-[20px] py-[12px] flex items-center gap-[10px] border-b border-[#e5e7eb]">
      {icon}
      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] text-[#101828] leading-[22px]">
        {title}
      </h3>
    </div>
  );
}

// --- Info Row ---

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[2px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#6b7280] leading-[18px]">
        {label}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[15px] text-[#101828] leading-[22px]">
        {value}
      </p>
    </div>
  );
}

// --- Personal Info ---

function PersonalInfoSection({ student }: { student: Student }) {
  return (
    <div className="border border-[#e5e7eb] rounded-[8px] mb-[20px]">
      <SectionHeader
        icon={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.25 16.5C2.25 13.0482 5.04822 10.25 9 10.25C12.9518 10.25 15.75 13.0482 15.75 16.5" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="Personal Information"
      />
      <div className="px-[20px] py-[20px]">
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px]">
          <InfoRow label="Full Name" value={student.fullName} />
          <InfoRow label="Student ID" value={student.studentId} />
          <InfoRow label="Email Address" value={student.email} />
          <InfoRow label="Phone Number" value={student.phone || "+1 234 567 8900"} />
        </div>
        <div className="mt-[20px]">
          <InfoRow label="Date of Birth" value={student.dateOfBirth || "May 15, 2000"} />
        </div>
      </div>
    </div>
  );
}

// --- Academic Info ---

function AcademicInfoSection({ student }: { student: Student }) {
  return (
    <div className="border border-[#e5e7eb] rounded-[8px] mb-[24px]">
      <SectionHeader
        icon={
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L1.5 5.25L9 9L16.5 5.25L9 1.5Z" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.5 12.75L9 16.5L16.5 12.75" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.5 9L9 12.75L16.5 9" stroke="#364153" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="Academic Information"
      />
      <div className="px-[20px] py-[20px]">
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[20px]">
          <InfoRow label="Course/Program" value={student.course} />
          <InfoRow label="Academic Year" value={student.graduationYear || "2026"} />
          <InfoRow label="Current CGPA" value={String(student.cgpa)} />
          <InfoRow label="Credits Completed" value={`${student.creditsCompleted || 120}/${student.totalCredits || 120}`} />
          <InfoRow label="Enrollment Date" value={student.enrollmentDate || "September 2022"} />
          <InfoRow label="Number of Semesters" value={String(student.numberOfSemesters || 8)} />
        </div>
      </div>
    </div>
  );
}

// --- Important Notes ---

function ImportantNotes() {
  return (
    <div className="bg-[#fef3c7] border border-[#fcd34d] rounded-[8px] px-[20px] py-[16px] mb-[24px]">
      <div className="flex items-center gap-[8px] mb-[8px]">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="8" stroke="#d97706" strokeWidth="1.5" />
          <path d="M9 6V9.75" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="12.75" r="0.75" fill="#d97706" />
        </svg>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#d97706] leading-[20px]">
          Important Notes
        </p>
      </div>
      <ul className="list-none pl-[26px] flex flex-col gap-[4px]">
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#92400e] leading-[20px]">
          Ensure all course fees and library dues are cleared
        </li>
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#92400e] leading-[20px]">
          The certificate will be issued as a digital verifiable credential
        </li>
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#92400e] leading-[20px]">
          Scan the QR code for your certificate and download into digital wallet.
        </li>
      </ul>
    </div>
  );
}

// --- Confirmation Checkbox ---

function ConfirmationCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] px-[20px] py-[16px] mb-[32px]">
      <label className="flex items-start gap-[12px] cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-[3px] w-[16px] h-[16px] accent-[#3d5092] shrink-0"
        />
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#364153] leading-[20px]">
          I confirm that all the information provided above is accurate and complete. I understand that the certificate will be issued as a verifiable digital credential and that providing false information may result in the cancellation of my certificate request.
        </p>
      </label>
    </div>
  );
}

// --- Action Buttons ---

function ActionButtons({
  confirmed,
  isSubmitting,
}: {
  confirmed: boolean;
  isSubmitting: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-[16px]">
      <button
        className="bg-white border border-[#d1d5dc] rounded-[8px] px-[32px] py-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#364153] hover:bg-[#f9fafb] transition-colors"
        data-name="Button"
      >
        Cancel
      </button>
      <button
        disabled={!confirmed || isSubmitting}
        className={`rounded-[8px] px-[32px] py-[10px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white transition-colors ${
          confirmed && !isSubmitting
            ? "bg-[#d97706] hover:bg-[#b45309] cursor-pointer"
            : "bg-[#9ca3af] cursor-not-allowed"
        }`}
        data-name="Button"
      >
        {isSubmitting ? "Generating..." : "Generate Certificate"}
      </button>
    </div>
  );
}

// --- Main Page ---

export default function StudentCertificateRequestPage() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [eligibility, setEligibility] = useState<{ eligible: boolean; message: string } | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    // In production, studentId would come from AuthContext
    const studentId = "STU001234";
    studentPortalService.getStudentProfile(studentId).then((s) => {
      if (s) setStudent(s);
    });
    studentPortalService.checkEligibility(studentId).then(setEligibility);
  }, []);

  return (
    <div className="bg-[#f9fafb] min-h-screen w-full flex flex-col">
      {institute && (
        <Navbar
          institute={{ ...institute, portalLabel: "Student Portal" }}
          logoSrc={imgLogo}
        />
      )}

      <div className="w-full flex-1 px-[64px] py-[32px] flex flex-col gap-[24px] items-center">
        <div className="w-full max-w-[900px] flex flex-col gap-[24px] items-start">
          <BackLink />

          <div className="w-full">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] leading-[32px]">
            Download Degree Certificate
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6b7280] leading-[20px] mt-[4px] mb-[24px]">
            Review your details and submit a certificate request.
          </p>

          <div className="flex flex-col gap-[24px] max-w-[900px]">
            {/* Eligibility Banner */}
            {eligibility && (
              <EligibilityBanner eligible={eligibility.eligible} message={eligibility.message} />
            )}

            <div>
              {/* Review Section Header */}
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[#101828] leading-[28px] mb-[8px]">
                Review Your Information
              </h2>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#6b7280] leading-[20px] mb-[20px]">
                Please verify that the following information is correct. If you notice any errors, please update your profile before submitting the request.
              </p>

              <div className="flex flex-col gap-[16px]">
                {/* Personal Info */}
                {student && <PersonalInfoSection student={student} />}

                {/* Academic Info */}
                {student && <AcademicInfoSection student={student} />}
              </div>
            </div>

            {/* Important Notes */}
            <ImportantNotes />

            {/* Confirmation */}
            <ConfirmationCheckbox checked={confirmed} onChange={setConfirmed} />

            {/* Action Buttons */}
            <div className="mt-4">
              <ActionButtons confirmed={confirmed} isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
