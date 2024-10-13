import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function () {
  const [value, setValue] = useLocalStorage("name", "");
  useUpdateLogger(value);

  return (
    <>
      <div style={{ background: "#cfe2ff", paddingLeft: "1rem" }}>
        In React, a <b>hook</b> is a JavaScript function that allows developers
        to access React's state and lifecycle features from within function
        components. Hooks are a way to use React without writing class
        components
        <div>
          Custom hooks in React JS are JavaScript functions that share logic
          between components. They are used for a variety of purposes, including
          reusability, encapsulating, hiding complex logic, rendering speed.
          <p>
            Custom hooks don't need to be rendered repeatedly when the entire
            code is rendered, which can improve rendering speed.{" "}
          </p>
        </div>
      </div>
      <label>Enter Something</label>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
}
