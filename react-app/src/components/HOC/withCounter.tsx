import React, { useState } from "react";

const withCounter = <P extends object>(
  OriginalComponent: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <OriginalComponent {...props} count={count} handleCount={handleCount} />
    );
  };
  return WrappedComponent;
};

export default withCounter;
