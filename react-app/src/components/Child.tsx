import { useEffect } from "react";

type ChildProps = {
  value: string;
};

const Child = (props: ChildProps) => {
  const { value } = props;
  useEffect(() => {
    alert("I am a child");
  }, [props]);
  return (
    <>
      <h4>This is a sample child component</h4>
      <p>{value}</p>
    </>
  );
};

export default Child;
