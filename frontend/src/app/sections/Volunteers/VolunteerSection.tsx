import UserEntity from "@/app/types/userentity";
// import volunteerFetcher from "./data";
import UserCard from "@/app/components/core/UserCard";
import { Volunteers_value } from "./data";


const VolunteerSection = async () => {
  // const volunteers = await volunteerFetcher();
  return (
<div className="flex flex-wrap mt-8 gap-8 justify-center w-[100%] sm:w-[350px] md:w-[1000px]">
      {Volunteers_value.map((volunteer: UserEntity) => (
        <UserCard
          key={volunteer.name}
          name={volunteer.name}
          position=""
          image={volunteer.image}
          linkedin_url={volunteer.linkedin_url}
        />
      ))}
    </div>
  );
};

export default VolunteerSection;
