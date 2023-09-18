import { UserName, UserAge } from "@/components/user";

interface UserInfoProps {
  name: string;
  age: number;
}

export const UserInfo = ({ name, age }: UserInfoProps) => (
  <>
    <UserName>{name}</UserName>
    <UserAge>Age: {age}</UserAge>
  </>
);
