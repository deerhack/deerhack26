import TeamDecent from "@/app/assets/images/TeamDecent";
import TeamERROR from "@/app/assets/images/TeamERROR";
import TeamEverest from "@/app/assets/images/TeamEverest";
import TeamNymna from "@/app/assets/images/TeamNymna";
import TeamSolo from "@/app/assets/images/TeamSolo";
import WinnerLeafLeft from "@/app/assets/images/WinnerLeafLeft";
import WinnerLeafRight from "@/app/assets/images/WinnerLeafRight";
import Footer from "@/app/components/Footer/Footer";
import WinnersName from "@/app/components/WinnersName/WinnersName";
import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="lg:w-full mx-auto text-white flex flex-col">
        <h1
          className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
        >
          Winners
        </h1>
        <div className="flex flex-col items-center  w-full">
          <div className="relative flex flex-col shrink justify-center items-center lg:w-[50%] mb-16 mx-auto">
            <h2 className={`${cabinetBold.className} text-4xl  mb-10`}>
              Overall Winners
            </h2>
            <div className=" flex relative">
              <div className=" absolute -left-[9.5rem]">
                <WinnerLeafLeft className=" w-80 h-48 md:w-max md:h-max" />
              </div>
              <span className="">
                <TeamSolo className=" md:w-fit  sm:w-56 sm:h-56 w-48 h-48 md:h-max  lg:w-fit" />
              </span>
              <span className=" absolute -right-[9.5rem]">
                <WinnerLeafRight className="w-80 h-48 md:w-max md:h-max" />
              </span>
              <div className={` absolute bottom-0  w-full `}>
                <WinnersName teamName="SOLO" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=" w-full  ">
        <h2 className={`mb-5 ${cabinetBold.className} text-white text-center text-4xl`}>
          Track Winners
        </h2>

        <div className="flex flex-col gap-24">
          <div className="flex justify-center flex-col lg:flex-row items-center px-24 gap-16">
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Open Innovation
                </p>

                <div className=" flex relative">
                  <div className=" absolute -left-[9rem]">
                    <WinnerLeafLeft className="w-80 h-48 md:w-max md:h-max" />
                  </div>
                  <span className="">
                    <TeamDecent className=" w-48 h-48 sm:w-56 sm:h-56 md:w-fit md:h-max lg:w-fit" />
                  </span>
                  <span className=" absolute -right-[9rem]">
                    <WinnerLeafRight className="w-80 h-48 md:w-max md:h-max" />
                  </span>
                  <div className={` absolute bottom-0  w-full `}>
                    <WinnersName teamName="decent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Data Science / ML
                </p>


                <div className=" flex relative">
                  <div className=" absolute -left-[9rem]">
                    <WinnerLeafLeft className="w-80 h-48 md:w-max md:h-max"/>
                  </div>
                  <span className="">
                    <TeamNymna className=" w-48 h-48 md:w-fit sm:w-56 sm:h-56 md:h-max lg:w-fit" />
                  </span>
                  <span className=" absolute -right-[9rem]">
                    <WinnerLeafRight className="w-80 h-48 md:w-max md:h-max" />
                  </span>
                  <div className={` absolute bottom-0  w-full `}>
                    <WinnersName teamName="nymna" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-center lg:flex-row flex-col items-center px-24 gap-16">
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Interactive Technology
                </p>

                <div className=" flex relative">
                  <div className=" absolute -left-[9rem]">
                    <WinnerLeafLeft className="w-80 h-48 md:w-max md:h-max" />
                  </div>
                  <span className="">
                    <TeamEverest className=" md:w-fit w-48  sm:w-56 sm:h-56 h-48 md:h-max lg:w-fit" />
                  </span>
                  <span className=" absolute -right-[9rem]">
                    <WinnerLeafRight className="w-80 h-48 md:w-max md:h-max" />
                  </span>
                  <div className={` absolute bottom-0  w-full `}>
                    <WinnersName teamName="team everest" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  px-24 gap-20 py-10  w-2 lg:w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Blockchain
                </p>

                <div className=" flex relative">
                  <div className=" absolute -left-[9rem]">
                    <WinnerLeafLeft className="w-80 h-48 md:w-max md:h-max"/>
                  </div>
                  <span className="">
                    <TeamERROR className=" md:w-fit w-48 h-48 sm:w-56 sm:h-56 md:h-max lg:h-max  lg:w-fit" />
                  </span>
                  <span className=" absolute -right-[9rem]">
                    <WinnerLeafRight className="w-80 h-48 md:w-max md:h-max" />
                  </span>
                  <div className={` absolute bottom-0  w-full `}>
                    <WinnersName teamName="Error - 404" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default page;
{/* <div className="flex flex-row justify-between">

<div className="">
  <div className="relative flex flex-row">
      <span className="absolute z-0 right-96 w-48">
      <WinnerLeafLeft />
      </span>
      <span className="z-1">
      <TeamSolo />
      </span>
      <span className="absolute z-0 left-96">
      <WinnerLeafRight />
      </span>
  </div>
  <div
      className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
  >
      <div className=" border border-x-orange-500 z-10 mx-auto shadow-lg backdrop-blur-lg rounded-md py-5">
      <span className="headings text-xl p-4 sm:text-3xl md:px-14 ">
          SOLO
      </span>
      </div>

</div>
</div>

<div className="w-64">
  <div className="relative flex flex-row justify-center ">
      <span className="absolute z-0 right-96">
      <WinnerLeafLeft />
      </span>
      <span className="z-1">
      <TeamSolo />
      </span>
      <span className="absolute z-0 left-96">
      <WinnerLeafRight />
      </span>
  </div>
  <div
      className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
  >
      <div className=" border border-x-orange-500 z-10 mx-auto shadow-lg backdrop-blur-lg rounded-md py-5">
      <span className="headings text-xl p-4 sm:text-3xl md:px-14 ">
          SOLO
      </span>
      </div>

</div>
</div>
</div> */}
