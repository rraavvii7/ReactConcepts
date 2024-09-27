import React, { useEffect, useState } from "react";

function List(props: { getItems: () => number[] }) {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    console.log("updating items");
    setItems(props.getItems());
  }, [props.getItems]);

  return (
    <ul>
      {items.map((item) => {
        return <li key={item}> {item} </li>;
      })}
    </ul>
  );
}

export default List;
