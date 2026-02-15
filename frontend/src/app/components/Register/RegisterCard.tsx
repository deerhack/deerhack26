import { ReactElement } from "react";
import {
  cabinetExtraBold,
  satoshiRegular,
  satoshiBlack,
} from "@/app/utils/fonts";
import Link from "next/link";

export default function RegisterCard(): ReactElement {
  return (
    <div className="flex-col justify-center items-center w-[70vw] md:w-[668px] lg:w-[960px] mx-auto">
      <div className="primary-gradient-background p-[0.15rem] w-full rounded-[0.9rem]">
        <div className="flex flex-col lg:items-center items-start justify-start bg-violet rounded-[0.8rem] md:flex-row py-10 lg:py-20 px-5 sm:px-14 gap-6 md:items-center ">
          <div
            className={`${cabinetExtraBold.className} justify-center items-center text-primary-gradient-color text-2xl lg:text-3xl text-start md:text-start`}
          >
            Register for DeerHack Now!
            <p
              className={`${satoshiRegular.className} items-center text-white text-sm lg:text-xl mt-[1.5rem] mb-[0.5rem]`}
            >
              Secure your spot at DeerHack today and elevate your skills,
              <br className="hidden lg:block" /> expand your network, and ignite
              innovation.
            </p>
          </div>
          <Link
            href="https://deerhack-25.devfolio.co/"
            target="_blank"
            className="lg:ml-20"
          >
            <button
              className={` ${satoshiBlack.className} text-center text-sm lg:text-xl bg-secondary text-dark-purple p-3 rounded lg:ml-20 bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-fit md:w-[13rem]  `}
            >
              Registration Closed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
