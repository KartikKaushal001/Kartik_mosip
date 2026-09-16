import { useState, useEffect } from "react";
import { instituteService } from "@/services";
import { institute } from "@/data";
import type { Institute } from "@/data/types";
import svgPaths from "@/imports/EducationalInstitutePortal-7/svg-3ymkneemb6";
import imgLogo from "@/imports/EducationalInstitutePortal-7/73da5574736f6a1e3d533885140e2c14827bbc1f.png";

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

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
  }, []);

  return (
    <div className="bg-[#f9fafb] relative size-full min-h-[700px]" data-name="Educational Institute Portal">
      <Header institute={institute} />
      <div className="absolute left-[384px] top-[180px] w-[576px] bg-white rounded-[16px] border border-[#e5e7eb] p-[32px] shadow-sm flex flex-col items-center text-center gap-[24px]">
        <div className="w-[64px] h-[64px] rounded-full bg-[#dcfce7] flex items-center justify-center text-[#047857]">
          <svg className="size-[36px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[24px] font-semibold text-[#101828]">Certificate Added Successfully!</h2>
          <p className="text-[16px] text-[#4a5565]">
            The degree certificate has been generated and linked to the student record.
          </p>
        </div>

        <div className="flex gap-[16px] mt-[16px]">
          <button
            className="px-[24px] py-[12px] bg-[#3d5092] hover:bg-[#2b3c73] text-white rounded-[10px] text-[16px] font-medium transition-colors"
            data-name="Button"
          >
            Back to Student Registry
          </button>
          <button
            className="px-[24px] py-[12px] border border-[#3d5092] text-[#3d5092] hover:bg-gray-50 rounded-[10px] text-[16px] font-medium transition-colors"
            data-name="Button"
          >
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
