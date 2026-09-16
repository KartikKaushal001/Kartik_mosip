import React from "react";
import type { Institute } from "@/data/types";
import InstituteCard from "./InstituteCard";

export interface NavbarProps {
  institute: Institute;
  logoSrc?: string;
  onLogout?: () => void;
  showLogout?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  institute,
  logoSrc,
  onLogout,
  showLogout = true,
}) => {
  return (
    <div className="relative z-10 bg-white content-stretch flex h-[81px] items-center justify-between px-[64px] w-full border-b border-[#e5e7eb]">
      <div className="absolute top-0 bottom-0 -left-[100vw] -right-[100vw] bg-white border-b border-[#e5e7eb] -z-10" />
      <InstituteCard institute={institute} logoSrc={logoSrc} />
      {showLogout && onLogout && (
        <button
          onClick={onLogout}
          className="bg-[rgba(64,123,255,0.7)] hover:bg-[#407bff] h-[40px] px-[16px] rounded-[10px] flex items-center gap-[8px] text-[#364153] font-medium text-[16px] transition-colors"
        >
          <span>Logout</span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
