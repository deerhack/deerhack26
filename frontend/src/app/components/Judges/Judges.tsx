import UserCard from "../core/UserCard";
import {Judges} from "./data";

const JudgesList = async () => {
  return (
    <div
      key="JudgesCards"
      className="flex flex-wrap  xl:w-[80%] mt-14 gap-16 justify-center"
    >
      {Judges.map((judge) => (
        <UserCard
          key={judge.name}
          name={judge.name}
          image={judge.image}
          position={judge.position}
          linkedin_url={judge.linkedin_url}
        />
      ))}
    </div>
  );
};

export default JudgesList;