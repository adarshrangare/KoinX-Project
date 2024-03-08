import React from "react";
import { MainSection,SparkLines ,Trending } from "../../Sections";
const GridLayout = () => {
  return (
    <div className="gridLayout">
      <div className="main  gap-4 grid grid-cols-1   ">
        <div className=" md:col-span-2">
          <MainSection />
        </div>
        <div className=" bg-green-400 md:col-span-3 ">
          <Trending />
        </div>
        <div className=" bg-red-200 md:col-start-3 md:row-start-1">
          <SparkLines />
        </div>
        
        
      </div>
    </div>
  );
};

export default GridLayout;
