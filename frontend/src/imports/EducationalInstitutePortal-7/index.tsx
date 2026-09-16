import svgPaths from "./svg-3ymkneemb6";
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

function Heading1() {
  return (
    <div className="absolute h-[40px] left-[48px] top-[192px] w-[608px]" data-name="Heading 1">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[304.22px] not-italic text-[#101828] text-[36px] text-center top-[0.5px] tracking-[0.3691px] whitespace-nowrap">Certificate Information Added!</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[56px] left-[96px] top-[248px] w-[512px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[256.19px] not-italic text-[#4a5565] text-[18px] text-center top-0 tracking-[-0.4395px] w-[485px]">The certificate details have been successfully saved to the system. The student can now request their digital certificate.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[48px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(21, 93, 252) 100%)" }} data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[141.5px] not-italic text-[16px] text-center text-white top-[11.5px] tracking-[-0.3125px] whitespace-nowrap">Back to Student Registry</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[73px] items-start left-[48px] pt-[25px] px-[162.508px] top-[392px] w-[608px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Button1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.p8652380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
          <path d={svgPaths.paab5900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center left-0 px-[24px] rounded-[16777200px] size-[112px] top-0" style={{ backgroundImage: "linear-gradient(135deg, rgb(5, 223, 114) 0%, rgb(0, 166, 62) 100%)" }} data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-[296px] size-[112px] top-[48px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] h-[532px] left-1/2 rounded-[16px] top-[calc(50%+0.5px)] w-[704px]" data-name="Main Content">
      <Heading1 />
      <Paragraph1 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function PQ() {
  return (
    <div className="bg-[#e8e8e8] h-[925px] relative shrink-0 w-full" data-name="pQ">
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