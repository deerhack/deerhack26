import UserEntity from "./userentity";

type Team = {
  id: number;
  name: string;
  organizers: Array<UserEntity>;
};

export default Team;
