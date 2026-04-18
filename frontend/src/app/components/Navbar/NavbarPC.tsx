"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo"
import { cabinetBold, cabinetMedium } from "@/app/utils/fonts"
import Counter_wrapper from "../counter/Counter"

const NavbarPC = () => {
  const [isResourceOpen, setIsResourceOpen] = useState(false)
  const resourceRef = useRef<HTMLDivElement>(null)

  const handleResourceClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsResourceOpen(!isResourceOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourceRef.current && !resourceRef.current.contains(event.target as Node)) {
        setIsResourceOpen(false)
      }
    }
    if (isResourceOpen) window.addEventListener("click", handleClickOutside)
    return () => window.removeEventListener("click", handleClickOutside)
  }, [isResourceOpen])

  return (
    <div className="hidden lg:flex w-full justify-center z-[100] relative">
      <header className="bg-[#110C24A6] w-[95%] mt-7 relativerounded-xl fixed isolate shadow-lg backdrop-blur-sm">
        <nav className="flex items-center justify-between h-[6rem] py-4 px-20">
          <div className="flex items-center gap-[7.5rem]">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <DeerhackLogo width={50} height={50} />
            </Link>
          </div>

          <div className="flex items-center gap-[3rem]">
            <div className="flex items-center gap-8 text-magnolia">
              <div className="relative" ref={resourceRef}>
                <span 
                  className={`hover:text-secondary cursor-pointer block text-base ${cabinetBold.className}`}
                  onClick={handleResourceClick}
                >
                  Resources
                </span>

                {isResourceOpen && (
                  <div className="fixed bg-violet/50 backdrop-blur-md shadow-lg z-20 text-white rounded-b-xl border-sm top-20 mt-[1rem]">
                    <ul className={`w-[18.6rem] text-left list-none ${cabinetMedium.className}`}>
                      <li className="pt-4 px-6 mb-4">
                        <Link href="/selection-criteria" className="hover:text-secondary">Selection Criteria</Link>
                      </li>
                      <li className="pt-4 px-6 mb-4">
                        <Link href="/code-of-conduct" className="hover:text-secondary">Code Of Conduct</Link>
                      </li>
                      <li className="pt-4 px-6 mb-4">
                        <Link href="/judging-criteria" className="hover:text-secondary">Judging Criteria</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* <Link href="/winners" className={`hover:text-secondary text-base ${cabinetBold.className}`}>Winners</Link> */}
            </div>
            <Counter_wrapper />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavbarPC