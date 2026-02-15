// app/components/Organizers.tsx

import teamsData from "./team_data"; // ⬅️ Now from static file
import UserCard from "@/app/components/core/UserCard";
import { cabinetExtraBold } from "@/app/utils/fonts";
import VolunteerSection from "../Volunteers/VolunteerSection";

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
          className="text-white mt-20 flex flex-col justify-center w-[100%] md:w-[85%] lg:w-[70%] xl2:w-[55%]"
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

      <div className="flex justify-center items-center flex-col mt-20">
        <h1 className={`headings ${cabinetExtraBold.className} text-3xl`}>
          Volunteers
        </h1>
        <VolunteerSection />
      </div>
    </div>
  );
}
