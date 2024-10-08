import { useEffect, useRef, useState } from "react";

function UnderstandingRef() {
  const [name, setName] = useState("");

  //This will tell us how many times component get rendered
  //here the problem is that it will rendered infinite times because we have no dependency in useEffect
  //   const [times, setTimes] = useState(0);
  //   useEffect(() => {
  //     setTimes((prev) => prev + 1);
  //   });

  //So a better approach is to use useRef Hook as it does not re renders
  const renderedCount = useRef(0);
  useEffect(() => {
    renderedCount.current += 1;
  });

  //another use case is to access dom element
  const inputRef = useRef<any>();
  const handleFocus = () => {
    console.log(inputRef.current.type);
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <>
      <p style={{ background: "#cfe2ff" }}>
        The useRef Hook allows you to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated. It can be used to access a DOM element directly.
      </p>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is {name}</p>
      <p>I am rendered {renderedCount.current} times</p>
      <button type="button" className="btn btn-secondary" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
}

export default UnderstandingRef;
