import React from "react";
import Navbar from "./Navbar";
import GridCard from "./GridCard";
import List from "./List";

function Appbar() {
  const listArray = [
    {
      id: 1,
      name: "Ram",
      age: "25",
    },
    {
      id: 2,
      name: "Ram",
      age: "24",
    },
    {
      id: 1,
      name: "Ram",
      age: "26",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
      <GridCard />
      <div>
        {listArray.map((item) => (
          <List customer={item}></List>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Appbar;
