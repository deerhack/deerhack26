import { cabinetMedium } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarButton({
  href,
  label,
  icon,
  route,
}: {
  href: string;
  label: string;
  icon: any;
  route?: string;
}){
    const pathName = usePathname()
    return(
  <Link
    href={href}
    className={`flex justify-start items-center gap-4 px-2 py-4 rounded-2xl ${pathName == route ? "bg-[#3E2A89] border-[#3E2A89]" : "bg-[#1A1438] border-white/5"} border transition-all text-white/90 group`}
  >
    <div className="w-6 h-6 relative flex-shrink-0 transition-opacity flex justify-center items-center">
      <Image src={icon} alt={label} width={24} height={24} />
    </div>
    <span
      className={`${cabinetMedium.className} text-[16px] md:text-[28px] flex justify-center items-center`}
    >
      {label}
    </span>
  </Link>
    );
};