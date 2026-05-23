// app/components/Organizers.tsx

import teamsData from "./team_data"; // ⬅️ Now from static file
import UserCard from "@/app/components/core/UserCard";
import { cabinetExtraBold } from "@/app/utils/fonts";
import VolunteerSection from "../Volunteers/VolunteerSection";
import Footer from "@/app/components/Footer/Footer";

export default function Organizers() {
  const teams = teamsData;

  return (
    <div className="pb-9 flex flex-col items-center">
      <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
      >
        Meet The Organizers
      </h1>

      {teams.map((team) => (
        <div
          className="text-white  flex flex-col justify-center w-[100%] md:w-[85%] lg:w-[70%] xl2:w-[55%]"
          key={team.id}
        >
          <h1 className={`headings ${cabinetExtraBold.className} text-3xl mb-10`}>
            {team.name}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
            {team.organizers.map((organizer, index) => (
              <div key={index} className={team.organizers.length === 1 ? "w-full" : ""}>
                <UserCard
                  image={organizer.image}
                  linkedin_url={organizer.linkedin_url}
                  name={organizer.name}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center items-center mt-24 px-6">

  <div className="w-full md:w-[90%] lg:w-[75%] xl:w-[65%]">

    

    <div className="mb-8 text-center">

      <h1

        className={`headings ${cabinetExtraBold.className} text-4xl md:text-5xl`}

      >

        The Team Behind It All

      </h1>

      <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">

       

      </p>

    </div>

    <div className="relative rounded-3xl overflow-hidden p-[2px] bg-gradient-to-r from-grape via-saffron to-grape shadow-2xl">

      

      <div className="relative rounded-3xl overflow-hidden bg-[#110C24]">

        

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

        <img

          src="https://enkoki.github.io/static_images/deerhack26/leads/SoftwareClub.jpeg"

          alt="Club Group Photo"

          className="w-full h-[320px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"

        />

        <div className="absolute bottom-0 left-0 z-20 p-6 md:p-10">

          <h2

            className={`${cabinetExtraBold.className} text-white text-2xl md:text-4xl`}

          >

            DWIT Software Club

          </h2>

          <p className="text-gray-200 mt-2 text-sm md:text-base max-w-xl">

            Together, we turn ideas into impactful experiences and build a

            stronger tech community through collaboration and creativity.

          </p>

        </div>

      </div>

    </div>

  </div>
  </div>

      {/* <div className="flex justify-center items-center flex-col mt-20">
        <h1 className={`headings ${cabinetExtraBold.className} text-3xl`}>
          Volunteers
        </h1>
        <VolunteerSection />
      </div> */}
      <Footer/>
    </div>
    
  );
}
