import React from "react";
import Title from "./Title";

const page = () => {
  return <Title render={() => <h1>I am a render prop!</h1>} />;
};

export default page;
