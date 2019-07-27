import React, { useState } from "react";

const HookTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const firstChange = event => {
    setName({ ...name, firstName: event.target.value });
  };
  const lastChange = event => {
    setName({ ...name, lastName: event.target.value });
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <input type="text" value={name.firstName} onChange={firstChange} />
      &nbsp; <input type="text" value={name.lastName} onChange={lastChange} />
      <h1>{name.firstName}</h1>
      <h1>{name.lastName}</h1>
    </div>
  );
};

export default HookTwo;
