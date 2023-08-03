import React, { useState } from 'react';
import "../App.css";
export default function Test1() {
  const [counter, setCounter] = useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Counter ", counter), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCounter(counter + 1);
    }
  }, "Increment"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCounter(counter - 1);
    }
  }, "Decrement"));
}