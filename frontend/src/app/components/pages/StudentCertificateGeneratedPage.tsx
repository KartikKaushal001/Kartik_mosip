import { useState, useEffect } from "react";
import { instituteService } from "@/services/instituteService";
import { studentPortalService } from "@/services/studentPortalService";
import type { Institute } from "@/data/types";
import imgLogo from "@/imports/EducationalInstitutePortal-1/73da5574736f6a1e3d533885140e2c14827bbc1f.png";
import { QRCodeSVG } from "qrcode.react";
import { authService } from "@/services/authService";
import { Navbar } from "@/app/components/reusable/Navbar";

// ---------------------------------------------------------------------------
// Student Certificate Generated Page
// Success confirmation after a certificate has been generated.
// Shows QR code, next-step instructions, and wallet download links.
// ---------------------------------------------------------------------------

// --- Helper Components ---

// --- Success Icon ---

function SuccessIcon() {
  return (
    <div className="flex justify-center mb-[16px]">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" stroke="#22c55e" strokeWidth="3" fill="#ecfdf3" />
        <path
          d="M18 28L24 34L38 20"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// --- QR Code Section ---

function QRCodeSection({ qrUrl }: { qrUrl: string }) {
  return (
    <div className="border-2 border-[#3d5092] rounded-[12px] px-[32px] py-[24px] flex flex-col items-center mb-[24px]">
      <div className="bg-white p-[8px] rounded-[8px] mb-[16px] flex justify-center items-center h-[216px] w-[216px]">
        <QRCodeSVG value={qrUrl} size={200} />
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#3d5092] leading-[24px] text-center">
        Your Certificate QR Code
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#6b7280] leading-[20px] text-center mt-[4px] max-w-[400px]">
        Scan this QR code with your Inji Wallet app to receive and store your digital certificate as a Verifiable Credential.
      </p>
    </div>
  );
}

// --- What Happens Next ---

function WhatHappensNext() {
  return (
    <div className="border border-[#e5e7eb] rounded-[12px] px-[24px] py-[20px] mb-[32px]">
      <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#101828] leading-[24px] mb-[12px]">
        What Happens Next?
      </h3>
      <ol className="list-decimal pl-[20px] flex flex-col gap-[8px]">
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#364153] leading-[20px]">
          Download the Inji Wallet app if you haven't already (buttons below).
        </li>
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#364153] leading-[20px]">
          Scan the QR code above with Inji Wallet to download your certificate as a Verifiable Credential.
        </li>
        <li className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[#364153] leading-[20px]">
          Your certificate will be securely stored in your digital wallet for easy sharing and verification.
        </li>
      </ol>
    </div>
  );
}

// --- Download Buttons ---

function DownloadButtons() {
  return (
    <div className="flex flex-col items-center gap-[16px] mb-[32px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#101828] leading-[20px]">
        Don't have Inji Wallet yet?
      </p>
      <div className="flex items-center gap-[12px]">
        {/* Android Button */}
        <a
          href="#"
          className="bg-[#1a1a2e] rounded-[8px] px-[20px] py-[10px] flex items-center gap-[10px] no-underline"
        >
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M1 1L10 11L1 21" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1L17 10L1 21" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[9px] text-white/70 leading-[12px] uppercase tracking-[0.5px]">
              GET IT ON
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white leading-[18px]">
              Android
            </p>
          </div>
        </a>

        {/* iOS Button */}
        <a
          href="#"
          className="bg-[#1a1a2e] rounded-[8px] px-[20px] py-[10px] flex items-center gap-[10px] no-underline"
        >
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
            <path d="M14.94 11.5C14.96 9.47 16.64 8.56 16.72 8.52C15.72 7.04 14.14 6.83 13.58 6.82C12.23 6.68 10.93 7.65 10.24 7.65C9.55 7.65 8.48 6.84 7.33 6.86C5.84 6.89 4.46 7.75 3.69 9.1C2.11 11.84 3.28 15.87 4.79 18.07C5.55 19.15 6.44 20.37 7.59 20.33C8.71 20.28 9.14 19.61 10.48 19.61C11.82 19.61 12.22 20.33 13.39 20.3C14.6 20.28 15.37 19.2 16.1 18.11C17 16.83 17.37 15.59 17.38 15.53C17.36 15.52 14.92 14.56 14.94 11.5Z" fill="white" />
            <path d="M12.52 5.21C13.14 4.44 13.57 3.39 13.44 2.33C12.55 2.37 11.44 2.95 10.8 3.7C10.23 4.37 9.7 5.46 9.85 6.48C10.85 6.56 11.88 5.97 12.52 5.21Z" fill="white" />
          </svg>
          <div>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[9px] text-white/70 leading-[12px] uppercase tracking-[0.5px]">
              Download on the
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white leading-[18px]">
              iOS
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function StudentCertificateGeneratedPage() {
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [qrUrl, setQrUrl] = useState<string>("");

  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    instituteService.getInstitute().then(setInstitute);
    
    const loggedInId = authService.getLoggedInStudentId();
    if (loggedInId) {
      studentPortalService.requestCredential(loggedInId).then((data) => {
        if (data?.credentialOfferUri) {
          setQrUrl(data.credentialOfferUri);
        }
        setIsGenerating(false);
      });
    } else {
      setIsGenerating(false);
    }
  }, []);

  return (
    <div className="bg-[#f9fafb] min-h-screen w-full flex flex-col">
      {institute && (
        <Navbar
          institute={{ ...institute, portalLabel: "Student Portal" }}
          logoSrc={imgLogo}
        />
      )}

      <div className="w-full flex-1 flex flex-col items-center px-[64px] py-[64px]">
        {/* Success Header */}
        <SuccessIcon />
        <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-[#101828] leading-[32px] text-center mt-4">
          Certificate Generated!
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#6b7280] leading-[20px] text-center mt-[8px] mb-[32px] max-w-[440px]">
          Your certificate request has been submitted and the certificate has been successfully generated with your information.
        </p>

        <div className="flex flex-col gap-8 w-full max-w-[500px]">
          {/* QR Code */}
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-[200px] border-2 border-[#3d5092] rounded-[12px] mb-[24px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#3d5092]">Generating Credential Offer...</p>
            </div>
          ) : (
            qrUrl ? <QRCodeSection qrUrl={qrUrl} /> : (
              <div className="flex flex-col items-center justify-center p-[24px] border-2 border-red-200 rounded-[12px] mb-[24px] bg-red-50">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-red-600">Failed to generate credential.</p>
                <p className="text-[14px] text-red-500 text-center mt-2">Please ensure your backend is running and you are eligible.</p>
              </div>
            )
          )}

          {/* What Happens Next */}
          <WhatHappensNext />

          {/* Download Buttons */}
          <DownloadButtons />

          {/* Back to Dashboard */}
          <button
            className="bg-[#c5a55a] hover:bg-[#b08d3e] transition-colors rounded-[8px] w-full py-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-white leading-[24px]"
            data-name="Button"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
