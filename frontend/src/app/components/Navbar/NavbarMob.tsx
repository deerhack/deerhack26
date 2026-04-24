"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cabinetMedium, cabinetExtraBold } from "@/app/utils/fonts";
import Counter_wrapper from "../counter/Counter";

import DeerhackLogo from "@/app/assets/icons/DeerHackLogoMob.svg";
import hamburgerIcon from "@/app/assets/icons/hamburger.svg";
import hamburgerBorder from "@/app/assets/icons/rounded.svg";

import organizersIcon from "@/app/assets/icons/organizers.svg";
import homeIcon from "@/app/assets/icons/homeIcon.svg";
import legacyIcon from "@/app/assets/icons/legacy.svg";
import judgingIcon from "@/app/assets/icons/judging-criteria.svg";
import cocIcon from "@/app/assets/icons/code-of-conduct.svg";
import selectionIcon from "@/app/assets/icons/selection-criteria.svg";
import fbIcon from "@/app/assets/icons/facebook.svg";
import instaIcon from "@/app/assets/icons/instagram.svg";
import linkedinIcon from "@/app/assets/icons/linkedin.svg";
import SidebarButton from "./SidebarButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const btnContainer =
    "relative flex items-center justify-center w-[56px] h-[56px] transition-transform active:scale-95";

  return (
    <nav className="w-full lg:hidden">
      <div className="lg:hidden">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="fixed left-0 top-10 z-[60] cursor-pointer animate-in fade-in duration-300"
          >
            <div className={btnContainer}>
              <Image
                src={hamburgerBorder}
                alt=""
                fill
                className="object-contain pointer-events-none"
              />

              <Image
                src={hamburgerIcon}
                alt="Open"
                width={24}
                height={24}
                className="relative z-10"
              />
            </div>
          </div>
        )}

        <aside
          className={`fixed top-0 bottom-0 z-50 bg-[#110C24CC] backdrop-blur-[12px] border-r border-[#646265] flex flex-col shadow-2xl transition-all duration-500 ease-in-out
            ${isOpen
              ? "left-0 w-[85vw] md:w-[450px] opacity-100"
              : "left-[-500px] w-[85vw] md:w-[450px] opacity-0 pointer-events-none"
            }`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-10 -right-[56px] cursor-pointer"
          >
            <div className={btnContainer}>
              <Image
                src={hamburgerBorder}
                alt=""
                fill
                className="object-contain pointer-events-none"
              />
              <Image
                src={hamburgerIcon}
                alt="Close"
                width={24}
                height={24}
                className="relative z-10"
              />
            </div>
          </div>

          <div
            className={`flex flex-col h-full w-full p-8 md:p-12 pt-12 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex items-center gap-4 mb-12">
              <Image
                src={DeerhackLogo}
                alt="Logo"
                width={50}
                height={50}
                className="md:w-[60px] md:h-[60px]"
              />
              <div className="scale-110 origin-left">
                <Counter_wrapper />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border-[1.03px] border-[#FDE7B3] opacity-100 hover:opacity-90 hover:scale-110 transition-all duration-200 flex h-[60px] justify-center items-center py-4 md:py-7 rounded-[15px] text-[#311863] bg-secondary cursor-pointer">
                <p className={`text-[#311863] ${cabinetExtraBold.className} font-extrabold text-xm md:text-xl`}>
                  Pre-Register Now
                </p>
              </div>

              <nav className={`flex flex-col gap-4 ${cabinetMedium.className}`}>

                <SidebarButton href="/" route="/" label="Home" icon={homeIcon} />
                {/* <SidebarButton
                href="/organizers"
                label="Organizers"
                icon={organizersIcon}
              />
              <SidebarButton href="/legacy" label="Legacy" icon={legacyIcon} /> */}
              </nav>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <div className="relative flex items-center mb-1">
                <span className="text-[11px] text-gray-400 pr-3 uppercase tracking-widest font-bold">
                  Resources
                </span>
                <div className="flex-1 border-t border-dashed border-gray-700/50"></div>
              </div>
              <SidebarButton
                href="/judging-criteria"
                label="Judging Criteria"
                icon={judgingIcon}
                route="/judging-criteria"
              />
              <SidebarButton
                href="/code-of-conduct"
                label="Code of Conduct"
                icon={cocIcon}
                route="/code-of-conduct"
              />
              <SidebarButton
                href="/selection-criteria"
                label="Selection Criteria"
                icon={selectionIcon}
                route="/selection-criteria"
              />
            </div>

            <div className="mt-auto pb-10 flex justify-center items-center gap-[20px] border-t border-gray-800/40 pt-8">
              <SocialLink
                href="https://www.facebook.com/people/DeerHack-2023/100089906884851/"
                src={fbIcon}
                alt="Facebook"
              />
              <SocialLink
                href="https://www.instagram.com/deerhack2026/"
                src={instaIcon}
                alt="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/company/deerhack-dwit/"
                src={linkedinIcon}
                alt="LinkedIn"
              />
            </div>
          </div>
        </aside>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[3px] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

// Helpers
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
  >
    {children}
  </Link>
);


const SocialLink = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: any;
  alt: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all hover:scale-125 opacity-70 hover:opacity-100"
  >
    <Image src={src} alt={alt} width={30} height={30} />
  </a>
);

export default Navbar;
