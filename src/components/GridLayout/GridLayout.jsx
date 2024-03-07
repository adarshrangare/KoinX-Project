import React from "react";
import { MainSection,SparkLines ,Trending } from "../../Sections";
const GridLayout = () => {
  return (
    <div className="gridLayout">
      <div className="main grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 ">
        <div className=" md:col-span-2 md:row-span-2   ">
          <MainSection />
        </div>
        <div className=" bg-red-300 md:row-span-2  ">
          <SparkLines />
        </div>
        <div className=" bg-red-400 md:row-span-2 row-start-2 md:col-span-3 ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
