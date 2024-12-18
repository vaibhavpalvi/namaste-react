import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import React from "react";

const RootContainer = () => {
  return <Body />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootContainer />);
