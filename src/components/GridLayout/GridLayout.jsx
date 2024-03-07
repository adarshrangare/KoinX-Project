import React from "react";
import { MainSection,SparkLines ,Trending } from "../../Sections";
const GridLayout = () => {
  return (
    <div className="gridLayout">
      <div className="main grid grid-cols-3 gap-4 max-md:grid-cols-1   ">
        <div className=" col-start-1 col-span-2 ">
          <MainSection />
        </div>
        <div className=" col-start-3 ">
          <SparkLines />
        </div>
        <div className="  col-start-1 col-span-4 ">
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
