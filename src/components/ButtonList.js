import React from "react";
import Button from "../utils/Button";

const list = [
  "All",
  "Gaming",
  "Football",
  "Cricket",
  "News",
  "Cooking",
  "Ghost Stories",
  "Music",
  "Trending",
  "Art",
  "Devotional",
];

const ButtonList = () => {
  return (
    <div>
      {list.map((title) => (
        <Button name={title} key={title} />
      ))}
    </div>
  );
};

export default ButtonList;
