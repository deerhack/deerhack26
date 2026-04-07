"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" 
import DeerhackLogo from "@/app/assets/icons/DeerHackLogoMob.svg"
import { cabinetMedium } from "@/app/utils/fonts"
import Counter_wrapper from "../counter/Counter"

import organizersIcon from "@/app/assets/icons/organizers.svg"
import legacyIcon from "@/app/assets/icons/legacy.svg"
import judgingIcon from "@/app/assets/icons/judging-criteria.svg"
import cocIcon from "@/app/assets/icons/code-of-conduct.svg"
import selectionIcon from "@/app/assets/icons/selection-criteria.svg"
import fbIcon from "@/app/assets/icons/facebook.svg"
import instaIcon from "@/app/assets/icons/instagram.svg"
import linkedinIcon from "@/app/assets/icons/linkedin.svg"

const NavbarMob = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {!isOpen && (
        <div onClick={() => setIsOpen(true)} className="fixed left-[14px] top-6 z-[60] cursor-pointer animate-in fade-in duration-300">
          <div className="flex items-center bg-[#110C24CC] border border-[#646265] rounded-tr-[29px] rounded-br-[29px] rounded-bl-[21px] p-2 hover:border-[#7B5CFF] shadow-lg transition-all">
            <Image src={DeerhackLogo} alt="Deerhack Logo" width={48} height={48} />
          </div>
        </div>
      )}

      <aside 
        className={`fixed top-4 bottom-4 z-50 bg-[#110C24CC] backdrop-blur-[4px] border border-[#646265] rounded-3xl flex flex-col shadow-2xl transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "left-[14px] w-[300px] p-8 opacity-100" : "left-[-305px] w-[300px] p-0 opacity-0 pointer-events-none"}`}
        style={{ maxHeight: 'calc(100vh - 32px)' }}
      >
        <div className={`flex flex-col h-full w-full transition-opacity duration-300 ${isOpen ? "opacity-100 delay-200" : "opacity-0"}`}>
          <div className="flex items-center justify-between gap-6 mb-10">
            <div onClick={() => setIsOpen(false)} className="cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
             <Image src={DeerhackLogo} alt="Deerhack Logo" width={48} height={48} />
            </div>
            <div className="flex-1 flex justify-end">
                <Counter_wrapper />
            </div>
          </div>

          <nav className={`flex flex-col gap-3 ${cabinetMedium.className}`}>
            <SidebarButton href="/organizers" label="Organizers" icon={organizersIcon} />
            <SidebarButton href="/legacy" label="Legacy" icon={legacyIcon} />
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <div className="relative flex items-center mb-1">
              <span className="text-[10px] text-gray-500 pr-2 uppercase tracking-widest font-bold">Resources</span>
              <div className="flex-1 border-t border-dashed border-gray-700/50"></div>
            </div>
            <SidebarButton href="/judging-criteria" label="Judging Criteria" icon={judgingIcon} />
            <SidebarButton href="/code-of-conduct" label="Code of Conduct" icon={cocIcon} />
            <SidebarButton href="/selection-criteria" label="Selection Criteria" icon={selectionIcon} />
          </div>

          <div className="mt-auto pt-6 flex justify-center items-center gap-[13px] border-t border-gray-800/40">
            <SocialLink href="https://facebook.com/deerhack" src={fbIcon} alt="Facebook" />
            <SocialLink href="https://instagram.com/deerhack" src={instaIcon} alt="Instagram" />
            <SocialLink href="https://linkedin.com/company/deerhack" src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}

const SidebarButton = ({ href, label, icon }: { href: string, label: string, icon: any }) => (
  <Link href={href} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#1A1438] hover:bg-[#251C4D] border border-white/5 transition-all text-white/90 group">
    <div className="w-5 h-5 relative opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
      <Image src={icon} alt={label} width={20} height={20} className="object-contain" />
    </div>
    <span className="text-sm font-medium whitespace-nowrap">{label}</span>
  </Link>
)

const SocialLink = ({ href, src, alt }: { href: string, src: any, alt: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-all hover:scale-110 opacity-80 hover:opacity-100">
    <Image src={src} alt={alt} width={26} height={26} className="object-contain" />
  </a>
)

export default NavbarMob;