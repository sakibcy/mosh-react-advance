import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times{" "}
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>click here</button>
      </div>
    </div>
  );
};

export default Counter;
