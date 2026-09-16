import { useState, useEffect } from "react";
import { instituteService, studentService } from "@/services";
import { institute, students } from "@/data";
import type { Institute, Student } from "@/data/types";
import svgPaths from "@/imports/EducationalInstitutePortal-8/svg-0njqz46ekl";
import imgLogo from "@/imports/EducationalInstitutePortal-8/73da5574736f6a1e3d533885140e2c14827bbc1f.png";

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

export default function EducationalInstitutePortal() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [selectedYear, setSelectedYear] = useState("All Academic Years");
  const [courses, setCourses] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    studentService.getCourseOptions().then(setCourses);
    studentService.getAcademicYearOptions().then(setYears);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    studentService
      .getStudents({ search: searchQuery, course: selectedCourse, year: selectedYear })
      .then(setStudentsList)
      .finally(() => setIsLoading(false));
  }, [searchQuery, selectedCourse, selectedYear]);

  return (
    <div className="bg-[#f9fafb] relative size-full min-h-[1000px]" data-name="Educational Institute Portal">
      <Header institute={institute} />
      
      <div className="absolute left-[32px] top-[100px] w-[1280px] flex flex-col gap-[24px]">
        <div className="flex justify-between items-center mt-[12px]">
          <div className="flex items-center gap-[12px]">
            <button 
              className="p-[8px] hover:bg-gray-200 rounded-full transition-colors flex items-center justify-center text-[#4a5565]"
              onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "dashboard" }))}
              title="Back"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.8333 10H4.16667" />
                <path d="M8.33333 14.1667L4.16667 10L8.33333 5.83333" />
              </svg>
            </button>
            <div>
              <h1 className="text-[24px] font-semibold text-[#101828]">Student Registry</h1>
              <p className="text-[16px] text-[#4a5565]">View and manage student records</p>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <button
              className="px-[20px] py-[10px] bg-[#3d5092] hover:bg-[#2b3c73] text-white rounded-[10px] font-medium transition-colors"
              data-name="Button"
              onClick={() => {
                studentService.setStudentToEdit(null);
              }}
            >
              Add New Student
            </button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="bg-white p-[20px] rounded-[12px] border border-[#e5e7eb] flex gap-[16px] items-center">
          <input
            type="text"
            placeholder="Search by student name, ID or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-[14px] py-[8px] border border-[#d1d5dc] rounded-[8px] text-[14px] outline-none"
          />

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-[12px] py-[8px] border border-[#d1d5dc] rounded-[8px] text-[14px] bg-white"
          >
            <option value="All Courses">All Courses</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-[12px] py-[8px] border border-[#d1d5dc] rounded-[8px] text-[14px] bg-white"
          >
            <option value="All Academic Years">All Academic Years</option>
            {years.map((y, i) => (
              <option key={i} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-[12px] border border-[#e5e7eb] overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="p-[32px] text-center text-[#4a5565]">Loading registry data...</div>
          ) : studentsList.length === 0 ? (
            <div className="p-[32px] text-center text-[#4a5565]">No student records match your filters.</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#e5e7eb] text-[12px] font-semibold text-[#4a5565] uppercase">
                  <th className="py-[12px] px-[16px]">Student ID</th>
                  <th className="py-[12px] px-[16px]">Full Name</th>
                  <th className="py-[12px] px-[16px]">Email</th>
                  <th className="py-[12px] px-[16px]">Course</th>
                  <th className="py-[12px] px-[16px]">Year</th>
                  <th className="py-[12px] px-[16px]">CGPA</th>
                  <th className="py-[12px] px-[16px]">Status</th>
                  <th className="py-[12px] px-[16px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {studentsList.map((st) => (
                  <tr key={st.id} className="border-b border-[#e5e7eb] hover:bg-gray-50 text-[14px]">
                    <td className="py-[12px] px-[16px] font-medium text-[#101828]">{st.studentId}</td>
                    <td className="py-[12px] px-[16px] text-[#101828]">{st.fullName}</td>
                    <td className="py-[12px] px-[16px] text-[#4a5565]">{st.email}</td>
                    <td className="py-[12px] px-[16px] text-[#4a5565]">{st.course}</td>
                    <td className="py-[12px] px-[16px] text-[#4a5565]">{st.year}</td>
                    <td className="py-[12px] px-[16px] text-[#4a5565]">{st.cgpa.toFixed(1)}</td>
                    <td className="py-[12px] px-[16px]">
                      <span className="px-[8px] py-[2px] rounded-full text-[12px] bg-[#dcfce7] text-[#016630]">
                        {st.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-[12px] px-[16px] flex gap-[12px]">
                      <button className="text-[#9810fa] font-medium hover:underline" data-name="Button">
                        View
                      </button>
                      <button 
                        className="text-[#3d5092] font-medium hover:underline" 
                        data-name="Button"
                        onClick={() => {
                          studentService.setStudentToEdit(st);
                          window.dispatchEvent(new CustomEvent("navigate", { detail: "edit-student" }));
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
