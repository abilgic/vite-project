import { Fragment } from "react";
function ListGroup() {
  var items = ["New York", "San Francisco", "Tokyo", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
