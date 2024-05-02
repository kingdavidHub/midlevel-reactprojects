import MenuList from "./MenuList";
import { useState } from "react";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  }

  return (
    <>
      <li>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>{item.label}</p>
          {item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>+</span>
          ) : null}
        </div>
        {/* check if item has a children or not */}
        {item.children && item.children.length > 0 ? (
          <MenuList list={item.children} />
        ) : null}
      </li>
    </>
  );
};

export default MenuItem;
