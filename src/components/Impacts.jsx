import React from "react";
import Impacting from "./Impacting"
import reviews from "../data/impactStories";

const Impacts = () => {
  const scrollBar = {
    scrollbarWidth: 'none'
  }
  return( 
  <div className="bg-img flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200 overflow-x-hidden overflow-y-scroll pt-[100px] pb-4" style={scrollBar}>
    <div className="text-center">
      <h1 className="text-4xl font-bold">Impact Stories</h1>
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
    </div>
    <Impacting reviews={reviews}/>
  </div>);
};

export default Impacts;
