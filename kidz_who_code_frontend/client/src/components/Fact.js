import React from "react";
import CompInfo from "./CompInfo.js";
import CodeInfo from "./CodeInfo.js";
import Code from "./Code.js";
import Order from "./Order.js";
import Bug from "./Bug.js";
import divvy from './public/divvy.svg';


const Fact = (props) => {
  if(props.length === 0) return null;
  return (
    <div>
      <h1>Fun Facts!</h1>
      <CompInfo facts={props} />
      <CodeInfo facts={props} />
      <Code facts={props} />
      <Order facts={props}  />
      <Bug facts={props} />
      <img className="divvy" src={divvy} alt="divvy"/>
    </div>
  );

}
export default Fact;
