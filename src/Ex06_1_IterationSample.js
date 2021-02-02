import React from "react";

const Ex06_1_IterationSample = () => {
  const names = ["눈사람", "얼음", "비", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default Ex06_1_IterationSample;
