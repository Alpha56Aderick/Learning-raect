import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(100);

  function handleClick() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={handleClick}>Count down {count} Times!!</button>
    </>
  );
}

function MyApp() {
  return (
    <>
      <h1>This is a my Little App</h1>
      <MyButton />
    </>
  );
}

export default MyApp;
