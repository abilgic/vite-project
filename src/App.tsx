import { useState } from "react";
import { Button } from "./Button";
import Alert from "./Alert";
import ListGroup from "./ListGroup/";

function App() {
  const items = ["San Francisco", "Los Angeles", "New York"];
  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItems={() => {}}></ListGroup>
    </div>
  );
}

export default App;
