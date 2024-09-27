import { ReactNode, useContext } from "react";
import { User, UserContext } from "./contextApi/userContext";
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  const userCtx = useContext<User | null>(UserContext);
  const handleClick = () => {
    userCtx?.sayHello();
  };

  return (
    <>
      <h3 className="alert alert-primary">
        Context API is used to pass global variables anywhere in the code. It
        helps when there is a need for sharing state between a lot of nested
        components. It is light in weight and easier to use. Context Api should
        not be used when there is frequent change in value.
      </h3>
      <p>
        These values are coming from context api (user context). My name is{" "}
        {userCtx?.name}. I work in {userCtx?.company} which is located in
        {userCtx?.address}
      </p>
      <div className="alert alert-primary">{children}</div>
      <label>
        Name :{" "}
        <input
          type="text"
          onChange={(e) => userCtx?.changeName(e.target.value)}
        />
      </label>
      <label>
        Address :{" "}
        <input
          type="text"
          onChange={(e) => userCtx?.changeAddress(e.target.value)}
        />
      </label>
      <label>
        Company :{" "}
        <input
          type="text"
          onChange={(e) => userCtx?.changeCompany(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Say Hello
      </button>
    </>
  );
};

export default Alert;
