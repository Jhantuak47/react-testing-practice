import React from "react";
import { GreetType } from "./Greet.types";

function Greet(props: GreetType) {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
}

export default Greet;
