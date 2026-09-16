import svgPaths from "./svg-0lsypkdjn2";
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
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
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

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Manage student registrations and information.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function AssignmentInd() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="assignment_ind">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="assignment_ind">
          <mask height="42" id="mask0_1_510" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="42" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="42" id="Bounding box" width="42" />
          </mask>
          <g mask="url(#mask0_1_510)">
            <path d={svgPaths.p16dc3270} fill="var(--fill-0, #155DFC)" id="assignment_ind_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-0 p-[7px] rounded-[10px] top-0" data-name="Container">
      <AssignmentInd />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[26px] w-[73px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-[116px] top-[25px] w-[406px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px] whitespace-nowrap">{`Student Registry `}</p>
    </div>
  );
}

function Paragraph2() {
  return <div className="absolute h-[24px] left-[116px] top-[73px] w-[1168px]" data-name="Paragraph" />;
}

function Button1() {
  return (
    <div className="absolute bg-[#1c398e] h-[118px] left-0 rounded-[10px] top-0 w-[600px]" data-name="Button">
      <Container5 />
      <Heading2 />
      <Paragraph2 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[116px] not-italic text-[#f3e8ff] text-[16px] top-[51px] tracking-[-0.3125px] whitespace-nowrap">View and edit details for existing students.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 10.6667">
            <path d={svgPaths.p94d2af0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.pc2f8c00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 10.6667">
            <path d="M1.33333 1.33333V9.33333" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.33px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 2.66667">
            <path d="M9.33333 1.33333H1.33333" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-[12px] px-[12px] rounded-[10px] size-[56px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[26px] w-[73px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-[116px] top-[25px] w-[406px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px] whitespace-nowrap">Add New Student</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1c398e] h-[118px] left-[623px] rounded-[10px] top-0 w-[589px]" data-name="Button">
      <Container7 />
      <Heading3 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[116px] not-italic text-[#f3e8ff] text-[16px] top-[51px] tracking-[-0.3125px] whitespace-nowrap">Register a new student in the system</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[118px] relative shrink-0 w-[474px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Total Students</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px] whitespace-nowrap">150,234</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[60px] relative shrink-0 w-[93.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
            <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#af8010] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[108px] items-start left-0 pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.328px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Active Students</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px] whitespace-nowrap">15,567</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[60px] relative shrink-0 w-[101.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
            <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#af8010] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[108px] items-start left-[413.33px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Courses Offered</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px]">6</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[60px] relative shrink-0 w-[106.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
            <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00024 7.87024">
            <path d={svgPaths.p19976900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
            <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#1c398e] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[108px] items-start left-[826.66px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[108px] relative shrink-0 w-[1234px]" data-name="Container">
      <Container10 />
      <Container14 />
      <Container18 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Graduating This Year</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px]">5,234</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#155dfc] text-[12px] top-px whitespace-nowrap">Expected in 2026</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[80px] relative shrink-0 w-[135.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-10.98%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9968 11.1095">
            <path d={svgPaths.p3d70580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p31e16900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#d08700] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[158.25px] h-[80px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[128px] items-start left-0 pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.328px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Certificates Issued</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px] whitespace-nowrap">142,890</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">All-time total</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[80px] relative shrink-0 w-[120.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
            <path d={svgPaths.p27298200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p8caa240} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M3 1H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
            <path d="M9 1H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
            <path d="M9 1H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#d08700] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[128px] items-start left-[413.33px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Pending Requests</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px]">47</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#e17100] text-[12px] top-px whitespace-nowrap">Requires attention</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[80px] relative shrink-0 w-[116.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph15 />
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
            <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#fe9a00] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[128px] items-start left-[826.66px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[128px] relative shrink-0 w-[1216px]" data-name="Container">
      <Container23 />
      <Container27 />
      <Container31 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_536)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_536">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon8 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[28px] not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Recent Activity</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
            <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 1.33333">
            <path d="M4.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[16777200px] size-[32px] top-[4px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">New student registered</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">John Smith</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">2 hours ago</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[60px] left-[44px] top-0 w-[504px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[53.71%_29.17%_8.34%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-10.98%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99786 7.40633">
            <path d={svgPaths.p319afb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[16777200px] size-[32px] top-[4px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Certificate issued</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Emma Johnson</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">3 hours ago</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[60px] left-[44px] top-0 w-[504px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
            <path d={svgPaths.p6ae9d40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p91474e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
            <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
            <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 1.33333">
            <path d="M6 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[16777200px] size-[32px] top-[4px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Student information updated</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Michael Brown</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">5 hours ago</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[60px] left-[44px] top-0 w-[504px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
            <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[16777200px] size-[32px] top-[4px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Certificate request received</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Sarah Davis</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">1 day ago</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[60px] left-[44px] top-0 w-[504px]" data-name="Container">
      <Paragraph27 />
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
            <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
            <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 1.33333">
            <path d="M4.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#1c398e] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] rounded-[16777200px] size-[32px] top-[4px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">New student registered</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[20px] left-0 top-[20px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">James Wilson</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[504px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">1 day ago</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[60px] left-[44px] top-0 w-[504px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[416px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container41 />
      <Container44 />
      <Container47 />
      <Container50 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col gap-[16px] h-[508px] items-start left-0 pt-[24px] px-[24px] rounded-[10px] top-0 w-[596px]" data-name="Container">
      <Heading4 />
      <Container37 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon14 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[28px] not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Upcoming Graduations</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.828px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">May 2026</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#1c398e] h-[24px] relative rounded-[16777200px] shrink-0 w-[108.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12px] not-italic text-[12px] text-white top-[5px] whitespace-nowrap">2,456 Students</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[16px] top-[16px] w-[516px]" data-name="Container">
      <Heading6 />
      <Text1 />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[516px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Various Programs</p>
    </div>
  );
}

function Container58() {
  return <div className="bg-[#1c398e] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container57() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-start left-[16px] pr-[9.086px] rounded-[16777200px] top-[80px] w-[516px]" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#f5f9ff] h-[104px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container56 />
      <Paragraph33 />
      <Container57 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.148px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">August 2026</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#1c398e] h-[24px] relative rounded-[16777200px] shrink-0 w-[106.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12px] not-italic text-[12px] text-white top-[5px] whitespace-nowrap">1,823 Students</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[16px] top-[16px] w-[516px]" data-name="Container">
      <Heading7 />
      <Text2 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[516px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Various Programs</p>
    </div>
  );
}

function Container62() {
  return <div className="bg-[#1c398e] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container61() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-start left-[16px] pr-[139.734px] rounded-[16777200px] top-[80px] w-[516px]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f5f9ff] h-[104px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container60 />
      <Paragraph34 />
      <Container61 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.633px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">December 2026</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#1c398e] h-[24px] relative rounded-[16777200px] shrink-0 w-[98.414px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[12px] not-italic text-[12px] text-white top-[5px] whitespace-nowrap">955 Students</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[16px] top-[16px] w-[516px]" data-name="Container">
      <Heading8 />
      <Text3 />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[48px] w-[516px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Various Programs</p>
    </div>
  );
}

function Container66() {
  return <div className="bg-[#1c398e] h-[8px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col h-[8px] items-start left-[16px] pr-[318.891px] rounded-[16777200px] top-[80px] w-[516px]" data-name="Container">
      <Container66 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#f5f9ff] h-[104px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container64 />
      <Paragraph35 />
      <Container65 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[344px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container59 />
      <Container63 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col gap-[16px] h-[508px] items-start left-[620px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[596px]" data-name="Container">
      <Heading5 />
      <Container54 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[508px] relative shrink-0 w-[1216px]" data-name="Container">
      <Container36 />
      <Container53 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">Newly Registered Students</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View and manage student information</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-0 top-0 w-[244.43px]" data-name="Container">
      <Heading9 />
      <Paragraph36 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42px] left-0 rounded-[10px] top-0 w-[256px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] tracking-[-0.3125px] whitespace-nowrap">Search students...</p>
      </div>
      <div aria-hidden className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[42px] left-[912px] top-[3px] w-[256px]" data-name="Container">
      <TextInput />
      <Icon15 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[129.586px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Student ID</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[40.5px] left-[129.59px] top-0 w-[149.695px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Name</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[40.5px] left-[279.28px] top-0 w-[237.398px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Email</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[40.5px] left-[516.68px] top-0 w-[273.602px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Course</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[40.5px] left-[790.28px] top-0 w-[131.922px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Year</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[40.5px] left-[922.2px] top-0 w-[85.453px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">CGPA</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[40.5px] left-[1007.66px] top-0 w-[106.211px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[40.5px] left-[1113.87px] top-0 w-[102.133px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase whitespace-nowrap">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[1216px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[40.5px] left-0 top-0 w-[1216px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[129.586px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001234</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[57px] left-[129.59px] top-0 w-[149.695px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">John Smith</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[57px] left-[279.28px] top-0 w-[237.398px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">john.smith@student.edu</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[57px] left-[516.68px] top-0 w-[273.602px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Bachelor of Computer Science</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[57px] left-[790.28px] top-0 w-[131.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[57px] left-[922.2px] top-0 w-[85.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">8.5</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[24px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[57px] left-[1007.66px] top-0 w-[106.211px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[18.5px] w-[51.969px]" data-name="Button">
      <Icon16 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#9810fa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[57px] left-[1113.87px] top-0 w-[102.133px]" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[57px] left-0 top-0 w-[1216px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[129.586px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001235</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[57px] left-[129.59px] top-0 w-[149.695px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Emma Johnson</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[57px] left-[279.28px] top-0 w-[237.398px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">emma.johnson@student.edu</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[57px] left-[516.68px] top-0 w-[273.602px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Bachelor of Engineering</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[57px] left-[790.28px] top-0 w-[131.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Third Year</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[57px] left-[922.2px] top-0 w-[85.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">9.2</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[24px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[57px] left-[1007.66px] top-0 w-[106.211px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[18.5px] w-[51.969px]" data-name="Button">
      <Icon17 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#9810fa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[57px] left-[1113.87px] top-0 w-[102.133px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[57px] left-0 top-[57px] w-[1216px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[56.5px] left-0 top-0 w-[129.586px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001236</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[56.5px] left-[129.59px] top-0 w-[149.695px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Michael Brown</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[56.5px] left-[279.28px] top-0 w-[237.398px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">michael.brown@student.edu</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[56.5px] left-[516.68px] top-0 w-[273.602px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Master of Business Administration</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[56.5px] left-[790.28px] top-0 w-[131.922px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Second Year</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[56.5px] left-[922.2px] top-0 w-[85.453px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">7.8</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[24px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[56.5px] left-[1007.66px] top-0 w-[106.211px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[18.5px] w-[51.969px]" data-name="Button">
      <Icon18 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#9810fa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[56.5px] left-[1113.87px] top-0 w-[102.133px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[56.5px] left-0 top-[114px] w-[1216px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[170.5px] left-0 top-[40.5px] w-[1216px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[211px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[292px] items-start relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container68 />
      <Table />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1417px] items-start left-[32px] pt-[32px] px-[32px] top-[81px] w-[1280px]" data-name="Main Content">
      <Container3 />
      <Container4 />
      <Container9 />
      <Container22 />
      <Container35 />
      <Container67 />
    </div>
  );
}

function PQ() {
  return (
    <div className="bg-[#f9fafb] h-[1582px] relative shrink-0 w-full" data-name="pQ">
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