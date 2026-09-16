import svgPaths from "./svg-5cxh11ym15";
import imgLogo from "./73da5574736f6a1e3d533885140e2c14827bbc1f.png";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[287px]" data-name="Heading 1">
      <div className="-translate-y-full [word-break:break-word] absolute flex flex-col font-['Cinzel:Bold',sans-serif] font-bold justify-end leading-[0] left-0 text-[24px] text-black top-[30px] whitespace-nowrap">
        <p className="leading-[32px]">University of Utopia</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#1c398e] text-[16px] top-0 tracking-[1px] whitespace-nowrap">Admin Portal</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[276px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="h-[40px] relative shrink-0 w-[61px]" data-name="logo">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
        </div>
        <Container2 />
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

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[81px] items-start left-0 pb-px pt-[16px] px-[64px] top-0 w-[1344px]" data-name="Header">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[14px] size-[36px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.pf3c7c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M13.5 16.5L18 21L33 6" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#dcfce7] left-[352px] rounded-[16777200px] size-[64px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[32px] left-0 top-[80px] w-[768px]" data-name="Heading 2">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[384.09px] not-italic text-[#101828] text-[24px] text-center top-0 tracking-[0.0703px] whitespace-nowrap">Student Registered Successfully!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[120px] w-[768px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[384.03px] not-italic text-[#4a5565] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">The student has been added to the system</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[144px] left-[32px] top-[32px] w-[768px]" data-name="Container">
      <Container4 />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-black top-0 tracking-[-0.4395px] whitespace-nowrap">Student Details</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Student ID</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">STUD12345678</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Full Name</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">John Doe</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon2 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Student@email.com</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Phone</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_775)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_775">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon3 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">123456789</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Course</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Bachelor of Engineering</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6e4f06] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Academic Year</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[204px] items-start left-[36px] top-0 w-[682px]" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#fefce8] content-stretch flex flex-col h-[270px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[10px] top-[208px] w-[768px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#fefce8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#1c398e] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Degree Certificate Details</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Registration Number</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">REG23456i</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Degree Title</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Bachelor of computer science</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Graduation Date</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">January 2026</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1447e6] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Semesters</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">8</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col gap-[12px] h-[194px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[10px] top-[502px] w-[768px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading3 />
      <Container16 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-0 not-italic text-[#364153] text-[0px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">Student Login ID:</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px]">{` STUD12345678`}</span>
      </p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">{`A temporary password has been sent to the student's email address`}</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[78px] items-start left-[32px] pb-px pt-[17px] px-[17px] rounded-[10px] top-[720px] w-[768px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black h-[42px] relative rounded-[10px] shrink-0 w-[389px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.3125px] whitespace-nowrap">Back to Dashboard</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[259.59px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[375_0_0] h-[42px] min-w-px relative rounded-[10px]" data-name="Button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[173.91px] not-italic text-[16px] text-black text-center top-[8.5px] tracking-[-0.3125px] whitespace-nowrap">Add Another Student</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[42px] items-start left-[32px] top-[829px] w-[768px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 absolute bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[903px] left-1/2 rounded-[10px] top-[164px] w-[832px]" data-name="Main Content">
      <Container3 />
      <Container5 />
      <Container15 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function PQ() {
  return (
    <div className="bg-[#f9fafb] h-[1169px] relative shrink-0 w-full" data-name="pQ">
      <Header />
      <MainContent />
    </div>
  );
}

export default function EducationalInstitutePortal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Educational Institute Portal">
      <PQ />
    </div>
  );
}