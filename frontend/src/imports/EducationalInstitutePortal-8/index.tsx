import svgPaths from "./svg-0njqz46ekl";
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

function Icon1() {
  return (
    <div className="absolute left-[-0.5px] size-[20px] top-[-34px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[24px] left-[31.5px] top-[45px] w-[44px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[97.5px] not-italic text-[#4a5565] text-[16px] text-center top-[-36.5px] tracking-[-0.3125px] whitespace-nowrap">Back to Dashboard</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[-1px] not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Student Registry</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[-1px] not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">View and manage all registered students</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] h-[59px] items-start left-[32px] top-[57px] w-[323px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[131px] relative shrink-0 w-[474px]" data-name="Container">
      <Button1 />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">All Students</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Filter and search through the student database</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[52px] items-start left-[24px] top-[24px] w-[1168px]" data-name="Container">
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[14px] top-0 w-[1168px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[48px] pr-[16px] py-[14px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] tracking-[-0.1504px] whitespace-nowrap">Search by name, email, student ID, or course...</p>
      </div>
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36bb6c80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[0.1996px] uppercase whitespace-nowrap">Filters</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[4px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ee34580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
          <path d="M5.33333 1.33333V4" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <Icon4 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Academic Year</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-487.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-487.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-487.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-487.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option4() {
  return <div className="absolute left-[-487.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border-2 border-[#e5e7eb] border-solid h-[48px] left-0 rounded-[14px] top-0 w-[364px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[332px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[74px] items-start left-[380px] top-0 w-[364px]" data-name="Container">
      <Label />
      <Container13 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[4px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3cb0b500} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
          <path d="M8 9.33333V13.3333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
          <path d="M14 6V8.66667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Label">
      <Icon6 />
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Course Program</p>
    </div>
  );
}

function Option5() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option8() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option9() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option10() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option11() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option12() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Option13() {
  return <div className="absolute left-[-867.5px] size-0 top-[-649px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="absolute bg-white border-2 border-[#e5e7eb] border-solid h-[48px] left-0 rounded-[14px] top-0 w-[364px]" data-name="Dropdown">
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
      <Option9 />
      <Option10 />
      <Option11 />
      <Option12 />
      <Option13 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[332px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <Icon7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[74px] items-start left-[760px] top-0 w-[364px]" data-name="Container">
      <Label1 />
      <Container15 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.346 10.0006">
            <path d={svgPaths.p1b9e2480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.66667">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7.08333">
            <path d={svgPaths.p495dd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#af8010] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.3px] uppercase whitespace-nowrap">Quick Filter</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Graduating Students</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[38px] relative shrink-0 w-[188.086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[139.914px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#fff2c0] h-[74px] left-0 rounded-[14px] top-0 w-[364px]" data-name="Button">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[2px] pt-[18px] px-[18px] relative rounded-[inherit] size-full">
        <Container16 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#af8010] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[74px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
      <Button2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[154px] relative rounded-[14px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(172.489deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[2px] pt-[22px] px-[22px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[222px] items-start left-[24px] top-[100px] w-[1168px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[172.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a5565] text-[0px] top-[1.5px] tracking-[-0.1504px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">{`Showing `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[#101828] text-[16px] tracking-[-0.3125px]">12</span>
          <span className="leading-[20px] text-[14px]">{` of `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#364153] text-[14px]">12</span>
          <span className="leading-[20px] text-[14px]">{` students`}</span>
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[995.023px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[41px] items-start left-[24px] pb-px top-[346px] w-[1168px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container23 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[56.5px] left-0 top-0 w-[109.906px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[13px] tracking-[0.6px] uppercase w-[62px]">Student ID</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[56.5px] left-[109.91px] top-0 w-[234.695px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Name</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[56.5px] left-[344.6px] top-0 w-[248.234px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Email</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[56.5px] left-[592.84px] top-0 w-[185.664px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Course</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[56.5px] left-[778.5px] top-0 w-[96.289px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Year</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[56.5px] left-[874.79px] top-0 w-[67.656px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">CGPA</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[56.5px] left-[942.45px] top-0 w-[87.977px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[56.5px] left-[1030.42px] top-0 w-[137.578px]" data-name="Header Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#6a7282] text-[12px] top-[21px] tracking-[0.6px] uppercase whitespace-nowrap">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[56.5px] left-0 top-0 w-[1168px]" data-name="Table Row">
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
    <div className="absolute h-[56.5px] left-0 top-0 w-[1168px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">STU001234</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#fff2c0] h-[20px] left-[89px] rounded-[4px] top-0 w-[96.32px]" data-name="Text">
      <Icon9 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[26.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">John Smith</p>
      <Text2 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[73px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[73px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">john.smith@student.edu</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[73px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[17px] tracking-[-0.1504px] w-[142px]">Bachelor of Computer Science</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[73px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[73px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">8.5</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[28px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[73px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon11 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#155dfc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[20px] items-center left-[16px] top-[26.5px] w-[105.578px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[73px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[73px] left-0 top-0 w-[1168px]" data-name="Table Row">
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
    <div className="absolute h-[57px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001237</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#fff2c0] h-[20px] left-[93px] rounded-[4px] top-0 w-[96.32px]" data-name="Text">
      <Icon12 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[18.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Sarah Davis</p>
      <Text4 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[57px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[57px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">sarah.davis@student.edu</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[57px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Bachelor of Arts</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[57px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[57px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">8.9</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[57px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon13 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#155dfc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[20px] items-center left-[16px] top-[18.5px] w-[105.578px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[57px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[57px] left-0 top-[80.5px] w-[1168px]" data-name="Table Row">
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
    <div className="absolute h-[57px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001240</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#fff2c0] h-[20px] left-[108px] rounded-[4px] top-0 w-[96.32px]" data-name="Text">
      <Icon15 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[18.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">William Garcia</p>
      <Text6 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[57px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[57px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">william.garcia@student.edu</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[57px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Master of Science</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[57px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[57px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">8.7</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[57px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon17 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#155dfc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[20px] items-center left-[16px] top-[18.5px] w-[105.578px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[57px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[57px] left-0 top-[145.5px] w-[1168px]" data-name="Table Row">
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

function TableCell24() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">STU001241</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#fff2c0] h-[20px] relative rounded-[4px] shrink-0 w-[96.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[16px] top-[26.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Sophia Rodriguez</p>
      <Text8 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[73px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[73px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">sophia.rodriguez@student.edu</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[73px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[17px] tracking-[-0.1504px] w-[142px]">Bachelor of Computer Science</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[73px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[17px] tracking-[-0.1504px] w-[49px]">Second Year</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[73px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">9.1</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[28px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[73px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon19 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[16px] top-[26.5px] w-[105.578px]" data-name="Container">
      <Button9 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[73px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[73px] left-0 top-[202.5px] w-[1168px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">STU001242</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#fff2c0] h-[20px] left-[103px] rounded-[4px] top-0 w-[96.32px]" data-name="Text">
      <Icon20 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[26.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Benjamin Lee</p>
      <Text10 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[73px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[73px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">benjamin.lee@student.edu</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[73px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[17px] tracking-[-0.1504px] w-[77px]">Bachelor of Engineering</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[73px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[73px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">8.3</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[28px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[73px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text11 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon21 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon22 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#155dfc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[20px] items-center left-[16px] top-[26.5px] w-[105.578px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[73px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[73px] left-0 top-[275.5px] w-[1168px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">STU001243</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#fff2c0] h-[20px] relative rounded-[4px] shrink-0 w-[96.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon23 />
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[16px] top-[18.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Isabella Taylor</p>
      <Text12 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[57px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[57px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">isabella.taylor@student.edu</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[57px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">Master of Arts</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[57px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">First Year</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[57px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[19px] tracking-[-0.1504px] whitespace-nowrap">8.6</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[20px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[57px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text13 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon24 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center left-[16px] top-[18.5px] w-[105.578px]" data-name="Container">
      <Button12 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[57px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[57px] left-0 top-[356.5px] w-[1168px]" data-name="Table Row">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[109.906px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#101828] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">STU001244</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1585cf00} id="Vector" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 5V8" id="Vector_2" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d6ddb80} id="Vector_3" stroke="var(--stroke-0, #AF8010)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#fff2c0] h-[20px] left-[82px] rounded-[4px] top-[10px] w-[96.32px]" data-name="Text">
      <Icon25 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#af8010] text-[12px] top-[3px] whitespace-nowrap">Graduating</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[16.5px] w-[202.695px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[67px]">Alexander Anderson</p>
      <Text14 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[73px] left-[109.91px] top-0 w-[234.695px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[73px] left-[344.6px] top-0 w-[248.234px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">alexander.anderson@student.edu</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[73px] left-[592.84px] top-0 w-[185.664px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">Bachelor of Commerce</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[73px] left-[778.5px] top-0 w-[96.289px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">Final Year</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[73px] left-[874.79px] top-0 w-[67.656px]" data-name="Table Cell">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#4a5565] text-[14px] top-[27px] tracking-[-0.1504px] whitespace-nowrap">7.9</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#dcfce7] h-[20px] left-[16px] rounded-[16777200px] top-[28px] w-[55.977px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[10px] not-italic text-[#016630] text-[12px] top-[3px] whitespace-nowrap">Active</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[73px] left-[942.45px] top-0 w-[87.977px]" data-name="Table Cell">
      <Text15 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon26 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#1c398e] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon27 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[33px] not-italic text-[#155dfc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Edit</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[20px] items-center left-[16px] top-[26.5px] w-[105.578px]" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[73px] left-[1030.42px] top-0 w-[137.578px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#e5e7eb] border-b border-solid h-[73px] left-0 top-[413.5px] w-[1168px]" data-name="Table Row">
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[827.5px] left-0 top-[56.5px] w-[1168px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[589px] left-[24px] overflow-clip top-[403px] w-[1168px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[1003px] relative rounded-[10px] shrink-0 w-[1216px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container22 />
      <Table />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[1198px] items-start left-[32px] pt-[32px] px-[32px] top-[81px] w-[1280px]" data-name="Main Content">
      <Container3 />
      <Container5 />
    </div>
  );
}

function PQ() {
  return (
    <div className="absolute bg-[#f9fafb] h-[1728px] left-0 right-0 top-0" data-name="pQ">
      <Header />
      <MainContent />
    </div>
  );
}

export default function EducationalInstitutePortal() {
  return (
    <div className="bg-white relative size-full" data-name="Educational Institute Portal">
      <PQ />
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-[1339px]" data-name="Pagination">
        <div className="content-stretch flex gap-[8px] items-center justify-center opacity-50 px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Previous">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow left">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-8.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9333 10.9333">
                  <path d={svgPaths.pedd5100} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Previous</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Pagination List">
          <div className="bg-[#2c2c2c] content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Page">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] whitespace-nowrap">1</p>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Page">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">2</p>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Gap">
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">...</p>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Page">
            <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">4</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Pagination Next">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">Next</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow right">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-8.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9333 10.9333">
                  <path d={svgPaths.pd592fc0} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}