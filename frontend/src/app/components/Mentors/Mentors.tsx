// import React from "react";
import { cabinetBold, cabinetExtraBold } from "@/fonts";
import UserEntity from "@/app/types/userentity";
import UserCard from "../core/UserCard";

import {Mentors_value} from "./data"

const MentorsList = async () => {
 
  return (
    <div
      key="MentorCards"
      className="flex flex-wrap  xl:w-[80%] mt-14 gap-16 justify-center"
    >
      {Mentors_value.map((mentor: UserEntity) => (
        <UserCard
          key={mentor.name}
          name={mentor.name}
          image={mentor.image}
          position={mentor.position}
          linkedin_url={mentor.linkedin_url}
        />
      ))}
    </div>
  );
};

export default MentorsList;
