import { useState, useEffect } from "react";
import { instituteService, studentService } from "@/services";
import type { Institute, Student } from "@/data/types";
import svgPaths from "@/imports/EducationalInstitutePortal-3/svg-89o4hae5ek";
import imgLogo from "@/imports/EducationalInstitutePortal-3/73da5574736f6a1e3d533885140e2c14827bbc1f.png";

function Heading({ institute }: { institute: Institute | null }) {
  return (
    <div className="h-[28px] relative shrink-0 w-[287px]" data-name="Heading 1">
      <div className="-translate-y-full [word-break:break-word] absolute flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-end leading-[0] left-0 text-[24px] text-black top-[30px] whitespace-nowrap">
        <p className="leading-[32px]">{institute?.name || "University of Utopia"}</p>
      </div>
    </div>
  );
}

function Paragraph({ institute }: { institute: Institute | null }) {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#1c398e] text-[16px] top-0 tracking-[1px] whitespace-nowrap">{institute?.portalLabel || "Admin Portal"}</p>
    </div>
  );
}

function Container2({ institute }: { institute: Institute | null }) {
  return (
    <div className="h-[48px] relative shrink-0 w-[276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading institute={institute} />
        <Paragraph institute={institute} />
      </div>
    </div>
  );
}

function Container1({ institute }: { institute: Institute | null }) {
  return (
    <div className="h-[48px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="h-[40px] relative shrink-0 w-[61px]" data-name="logo">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
        </div>
        <Container2 institute={institute} />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[26.5px] not-italic text-[#364153] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(64,123,255,0.7)] h-[40px] relative rounded-[10px] shrink-0 w-[111.773px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Container({ institute }: { institute: Institute | null }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 institute={institute} />
      <Button />
    </div>
  );
}

function Header({ institute }: { institute: Institute | null }) {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-[16px] px-[64px] top-0 w-[1344px]" data-name="Header">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container institute={institute} />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Add New Student</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Register a new student in the system</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[60px] relative shrink-0 w-[266.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Personal Information</p>
    </div>
  );
}

export default function EducationalInstitutePortal() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [courses, setCourses] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<Partial<Student>>({
    studentId: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    course: "Bachelor of Computer Science",
    year: "First Year" as any,
    dateOfBirth: "",
    enrollmentDate: new Date().toISOString().split("T")[0],
    cgpa: 0,
    guardian: { name: "", phone: "" },
  });

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    studentService.getCourseOptions().then(setCourses);
    studentService.getAcademicYearOptions().then(setYears);
    
    const toEdit = studentService.getStudentToEdit();
    if (toEdit) {
      setIsEditMode(true);
      setEditingId(toEdit.id || toEdit.studentId);
      setFormValues({
        studentId: toEdit.studentId || "",
        fullName: toEdit.fullName || "",
        email: toEdit.email || "",
        phone: toEdit.phone || "",
        address: toEdit.address || "",
        course: toEdit.course || "Bachelor of Computer Science",
        year: toEdit.year || "First Year" as any,
        dateOfBirth: toEdit.dateOfBirth || "",
        enrollmentDate: toEdit.enrollmentDate || new Date().toISOString().split("T")[0],
        cgpa: toEdit.cgpa || 0,
        guardian: toEdit.guardian || { name: "", phone: "" },
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);
    try {
      if (isEditMode && editingId) {
        await studentService.updateStudent(editingId, formValues);
        setFeedback({ type: "success", message: `Student "${formValues.fullName}" updated successfully!` });
        // Optionally redirect back to registry
        // window.dispatchEvent(new CustomEvent("navigate", { detail: "student-registry" }));
      } else {
        await studentService.createStudent(formValues);
        // Dispatch event to navigate to the success page
        window.dispatchEvent(
          new CustomEvent("navigate", { detail: "student-registered" })
        );
        // Reset form
        setFormValues({
          studentId: "",
          fullName: "",
          email: "",
          phone: "",
          address: "",
          course: "Bachelor of Computer Science",
          year: "First Year" as any,
          dateOfBirth: "",
          enrollmentDate: new Date().toISOString().split("T")[0],
          cgpa: 0,
          guardian: { name: "", phone: "" },
        });
      }
    } catch (error: any) {
      setFeedback({ type: "error", message: error?.message || "Failed to save student. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f9fafb] relative size-full min-h-[1000px]" data-name="Educational Institute Portal">
      <Header institute={institute} />

      <div className="absolute left-[32px] top-[81px] pt-[32px] w-[1280px] flex flex-col gap-[24px]">
        <div className="flex items-center gap-[12px]">
          <button 
            type="button"
            className="p-[8px] hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center text-[#4a5565]"
            onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: isEditMode ? "student-registry" : "dashboard" }))}
            title={isEditMode ? "Back to Registry" : "Back to Dashboard"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15.8333 10H4.16667" />
              <path d="M8.33333 14.1667L4.16667 10L8.33333 5.83333" />
            </svg>
          </button>
          <div>
            <h2 className="text-[24px] font-semibold text-[#101828]">
              {isEditMode ? "Edit Student Details" : "Add New Student"}
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              {isEditMode ? "Update the student's information." : "Enter the student's details to register them in the system."}
            </p>
          </div>
        </div>

        {/* Feedback banner */}
        {feedback && (
          <div
            className={`p-[16px] rounded-[12px] text-[14px] font-medium ${
              feedback.type === "success"
                ? "bg-[#dcfce7] text-[#016630] border border-[#bbf7d0]"
                : "bg-[#fef2f2] text-[#991b1b] border border-[#fecaca]"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-[32px] rounded-[16px] border border-[#e5e7eb] shadow-sm flex flex-col gap-[24px] w-full">
          <Heading2 />
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Student ID *</label>
              <input
                type="text"
                value={formValues.studentId || ""}
                onChange={(e) => setFormValues({ ...formValues, studentId: e.target.value })}
                placeholder="e.g. STU-2026-001"
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Full Name *</label>
              <input
                type="text"
                value={formValues.fullName || ""}
                onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                placeholder="e.g. Aarav Sharma"
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Email Address *</label>
              <input
                type="email"
                value={formValues.email || ""}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                placeholder="e.g. student@university.edu"
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Phone Number *</label>
              <input
                type="text"
                value={formValues.phone || ""}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                placeholder="e.g. +91 9876543210"
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Date of Birth *</label>
              <input
                type="date"
                value={formValues.dateOfBirth || ""}
                onChange={(e) => setFormValues({ ...formValues, dateOfBirth: e.target.value })}
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Enrollment Date *</label>
              <input
                type="date"
                value={formValues.enrollmentDate || ""}
                onChange={(e) => setFormValues({ ...formValues, enrollmentDate: e.target.value })}
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Course / Program *</label>
              <select
                value={formValues.course || ""}
                onChange={(e) => setFormValues({ ...formValues, course: e.target.value })}
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px] bg-white"
              >
                {(courses.length > 0 ? courses : ["Bachelor of Computer Science"]).map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">Academic Year *</label>
              <select
                value={formValues.year || ""}
                onChange={(e) => setFormValues({ ...formValues, year: e.target.value as any })}
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px] bg-white"
              >
                {(years.length > 0 ? years : ["First Year", "Second Year", "Third Year", "Final Year"]).map((y, idx) => (
                  <option key={idx} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] font-medium text-[#364153]">CGPA</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={formValues.cgpa || 0}
                onChange={(e) => setFormValues({ ...formValues, cgpa: parseFloat(e.target.value) || 0 })}
                placeholder="e.g. 8.5"
                className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label className="text-[14px] font-medium text-[#364153]">Address *</label>
            <input
              type="text"
              value={formValues.address || ""}
              onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
              placeholder="e.g. 123 Main Street, City, State 12345"
              className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
              required
            />
          </div>

          {/* Graduation Details Section (Edit Mode Only) */}
          {isEditMode && (
            <div className="border-t border-[#e5e7eb] pt-[20px] pb-[10px] flex items-center justify-between">
              <div>
                <p className="font-medium text-[18px] text-[#101828]">Graduation Status</p>
                <p className="text-[14px] text-[#4a5565]">Manage graduation records to issue credentials</p>
              </div>
              <button
                type="button"
                className="px-[16px] py-[8px] bg-green-600 hover:bg-green-700 text-white rounded-[8px] text-[14px] font-medium transition-colors"
                data-name="Button"
                onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "graduation-details" }))}
              >
                Graduation Details
              </button>
            </div>
          )}

          {/* Guardian Information Section */}
          <div className="border-t border-[#e5e7eb] pt-[20px]">
            <p className="font-medium text-[18px] text-[#101828] mb-[16px]">Guardian Information</p>
            <div className="grid grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#364153]">Guardian Name *</label>
                <input
                  type="text"
                  value={formValues.guardian?.name || ""}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      guardian: { name: e.target.value, phone: formValues.guardian?.phone || "" },
                    })
                  }
                  placeholder="e.g. Parent or Guardian Name"
                  className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-medium text-[#364153]">Guardian Phone *</label>
                <input
                  type="text"
                  value={formValues.guardian?.phone || ""}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      guardian: { name: formValues.guardian?.name || "", phone: e.target.value },
                    })
                  }
                  placeholder="e.g. +91 9876543210"
                  className="px-[12px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-[16px] border-t border-[#e5e7eb]">
            <button
              type="button"
              className="px-[20px] py-[10px] border border-[#d1d5dc] rounded-[10px] text-[16px] font-medium text-[#4a5565]"
              data-name="Button"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-[24px] py-[12px] bg-[#3d5092] hover:bg-[#2b3c73] disabled:opacity-50 text-white rounded-[10px] text-[16px] font-medium transition-colors"
              data-name="Button"
            >
              {isSubmitting ? "Processing..." : (isEditMode ? "Update Student" : "Register Student")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

