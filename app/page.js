"use client";

import {useState} from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <html>
      <body>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
        </div>
      </body>
    </html>
    );
}