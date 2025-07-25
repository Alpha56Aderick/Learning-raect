import { MouseEvent } from "react";
function GroupList() {
  let items = ["acie", "ammy", "amiko", "optomes", "jones"];
  const movies = ["John Wick", "Alpines", "Young wolf", "Prime Bees"];

  const handleClick = (Event: MouseEvent) => {
    alert("button clicked!");
  };

  if (items.length === 0) {
    return (
      <>
        <h1>This is a group list</h1>
        <p>No items found</p>
      </>
    );
  }
  return (
    <>
      <h1> This is a group List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GroupList;
