import React, { useContext } from "react";
import { UserContext } from "./user-context";
const FirstChild = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h1>{name} </h1>
    </div>
  );
};

export default FirstChild;
