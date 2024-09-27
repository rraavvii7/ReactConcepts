import { useSelector, useDispatch } from "react-redux";
import { toggleHire, setItems, setName } from "./profileSlice";
import { useEffect } from "react";

const ReducerProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setItems(["mango", "banana", "coconut"]));
  }, []);
  const items: string[] = useSelector((state: any) => state.profileSlice.items);
  const name: string = useSelector((state: any) => state.profileSlice.name);
  const isHired: boolean = useSelector(
    (state: any) => state.profileSlice.isHired
  );

  const handleToggle = () => {
    dispatch(toggleHire());
  };
  return (
    <>
      <h3 className="alert alert-primary">
        Redux helps you manage "global" state - state that is needed across many
        parts of your application.{" "}
      </h3>
      <h1>Welcome {name}</h1>
      <h3>
        {name} is {isHired ? "hired" : "fired"}
      </h3>
      <p>This component is coming after using redux js toolkit</p>
      <ul>{items && items.length && items.map((item) => <li>{item}</li>)}</ul>
      <button type="button" className="btn btn-primary" onClick={handleToggle}>
        Toggle Hire
      </button>
      <input type="text" onChange={(e) => dispatch(setName(e.target.value))} />
    </>
  );
};

export default ReducerProfile;
