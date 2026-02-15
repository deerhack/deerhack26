import { cabinetExtraBold } from "@/app/utils/fonts"

const WinnersName = ({
    teamName
}: {
    teamName: string
}) => {
    return (
        <>
            <div className=" bg-violet/50  text-center uppercase  text-white border-2 border-r-secondary border-b-secondary/50 border-s-[#6633CC] border-t-[#6633CC]/50 rounded-md p-4   isolate z-50 shadow-lg backdrop-blur-sm">
                <p className={` text-center ${cabinetExtraBold.className} text-xl md:text-3xl`} >{teamName}</p>
            </div>
        </>
    )
}

export default WinnersName
