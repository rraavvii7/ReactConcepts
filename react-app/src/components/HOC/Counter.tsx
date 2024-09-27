import { useEffect, useState } from "react";
import withCounter from "./withCounter";

interface Props {
  count: number;
  handleCount: () => void;
  initialCount: number;
}

export function Counter(props: Props) {
  const { count, handleCount } = props; //coming from hoc
  const [msg, setMsg] =
    useState(` HOC or Higher Order Function is a pattern in which we pass a component
  to a function. The function adds more props to the componet and return
  enchanced component`);
  return (
    <div style={{ background: "#d6f5d0" }}>
      <>{msg}</>
      <p>I am clicked {count === 0 ? props.initialCount : count} times</p>
      <button type="button" className="btn btn-success" onClick={handleCount}>
        Click Me
      </button>
    </div>
  );
}

export default withCounter(Counter);
