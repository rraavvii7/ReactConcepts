import { ReactNode, createContext, useState } from "react";

export interface User {
  name: string;
  company: string;
  address: string;
  sayHello: () => void;
  changeName: (name: string) => void;
  changeCompany: (company: string) => void;
  changeAddress: (address: string) => void;
}

export interface UserDetails {
  name: string;
  company: string;
  address: string;
}
type Props = {
  children: ReactNode;
};
export const UserContext = createContext<User | null>(null);

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserDetails>({
    name: "Ravi",
    company: "Honeywell",
    address: "Bangalore",
  });
  const changeName = (name: string) => setUser({ ...user, name });
  const changeCompany = (company: string) =>
    setUser({ ...user, company: company });
  const changeAddress = (address: string) =>
    setUser({ ...user, address: address });
  const userDetails: User = {
    name: user.name,
    company: user.company,
    address: user.address,
    sayHello: () =>
      alert(`Hello ${user.name} !! Welcome to ${user.company} ${user.address}`),
    changeAddress,
    changeCompany,
    changeName,
  };

  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
