import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (name: string) => void;
}
function ListGroup(props: Props) {
  const [itemSelected, setItemSelected] = useState<number>(-1);
  const { heading, items, onSelectItem } = props;
  const handleClick = (index: number, name: string) => {
    setItemSelected(index);
    onSelectItem(name);
  };
  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found !!</p>}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === itemSelected
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(index, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
