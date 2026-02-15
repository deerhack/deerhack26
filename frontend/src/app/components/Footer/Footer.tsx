import { ReactElement } from "react";
import Link from "next/link";
import { cabinetBold, cabinetRegular } from "@/fonts";
import SoftwareSVG from "@/app/assets/icons/Software";
import DWITSVG from "@/app/assets/icons/DwitLogo";
import MailSVG from "@/app/assets/icons/EmailIcon";
import PhoneSVG from "@/app/assets/icons/Phone";
import FacebookSVG from "@/app/assets/icons/Facebook";
import InstagramSVG from "@/app/assets/icons/Instagram";
import DiscordSVG from "@/app/assets/icons/Discord";
import LinkedInSVG from "@/app/assets/icons/LinkedIn";
import FooterMobileSVG from "@/app/assets/images/FooterMobileSVG";
import FooterGrapicSVG from "@/app/assets/images/FooterGrapicSVG";

export default function   Footer(): ReactElement {
  return (
    <div
      key="footer_container"
      className="relative flex flex-col flex-grow w-full bg-violet mt-[280px]"
    >
      <div className="relative flex flex-grow flex-col w-[85%] mx-auto mt-16">
        <div className="flex md:items-center md:flex-row justify-between gap-10 mb-10 sm:flex-col flex-col">
          <div className="flex flex-col ">
            <div
              key="logo_container"
              className="flex gap-7 items-center md:justify-start"
            >
              <DWITSVG />
              <SoftwareSVG />
            </div>
            <div key="contact_info" className="mt-10">
              <Link href="mailto:deerhack@deerwalk.edu.np">
                <div className="text-white flex flex-row mb-4 justify-start items-center">
                  <MailSVG />
                  <span
                    className={`px-2 md:text-[17px] lg:text-[20px] ${cabinetRegular.className}`}
                  >
                    deerhack@deerwalk.edu.np
                  </span>
                </div>
              </Link>
              <Link href="tel: +977-9742827007">
                <div className="text-white flex flex-row justify-start items-center">
                  <PhoneSVG />

                  <span
                    className={`px-2 md:text-[17px] lg:text-[20px] ${cabinetRegular.className}`}
                  >
                    9742827007/9741860722
                  </span>
                </div>
              </Link>
            </div>
            <div
              key="socials"
              className="flex flex-col  mt-11 gap-4 mb-10 sm:mb-0"
            >
              <p
                className={`text-white text-lg md:text-xl font-[300] ${cabinetBold.className}`}
              >
                Visit Our Socials
              </p>
              <div className="flex gap-4">
                <span className=" w-[25px] px-0">
                  <Link
                    href="https://www.facebook.com/people/DeerHack-2023/100089906884851/"
                    target="_blank"
                  >
                    <FacebookSVG />
                  </Link>
                </span>
                <span className="w-[25px]">
                  <Link
                    href="https://www.instagram.com/deerhack2025/"
                    target="_blank"
                  >
                    <InstagramSVG />
                  </Link>
                </span>
                <span className="w-[25px]">
                  <Link href="">
                    <DiscordSVG />
                  </Link>
                </span>
                <span className="w-[25px]">
                  <Link
                    href="https://www.linkedin.com/company/deerhack-dwit/"
                    target="_blank"
                  >
                    <LinkedInSVG />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div key="Navigation">
            <div className="links text-white flex flex-col gap-7 md:gap-9 justify-center md:items-center">
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href="/"
              >
                {/* Schedule */}
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href="/"
              >
                {/* Organizers */}
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href="/"
              >
                {/* Winners */}
              </Link>
            </div>
          </div>
          <div key="event_summary" className="mt-10 sm:mt-0 text-white ">
            <p
              className={`font-[700] sm:text-lg md:text-xl lg:text-2xl mb-8 ${cabinetRegular.className}`}
            >
              Event Summary
            </p>
            <p className={`mb-5 text-[16px] ${cabinetRegular.className}`}>
              Mode: In-person
            </p>
            <p className={`mb-5 text-[16px] ${cabinetRegular.className}`}>
              Venue: Deerwalk Complex
            </p>
            <p className={`text-[16px] ${cabinetRegular.className}`}>
              Date: 11th-13th July, 2025
            </p>
          </div>
        </div>
        <span
          className={`text-white flex text-xs/[24px] md:text-sm/[24px] font-[500] ${cabinetRegular.className}`}
        >
          All Rights Reserved © DWIT Software Club 2025
        </span>
      </div>
      <div className="w-full">
        <FooterGrapicSVG className="hidden lg:block w-full lg:h-fit" />
      </div>
      <div className="lg:hidden w-full">
        <FooterMobileSVG className="w-full h-fit" />
      </div>
    </div>
  );
}
