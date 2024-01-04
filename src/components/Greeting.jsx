import React from "react";

function Greeting({ timeOfDayGreeting, taskGreeting }) {
  return (
    <>
    <h2 className="font-semibold text-center text-2xl">Enhanced Todo List</h2>
      <h3 className="text-xl font-semibold text-center mb-4">
        {`${timeOfDayGreeting} ${taskGreeting}`}
      </h3>
    </>
  );
}

export default Greeting;
