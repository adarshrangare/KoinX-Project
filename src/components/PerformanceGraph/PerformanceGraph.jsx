import React from "react";

const PerformanceGraph = () => {
  return (
    <div className="w-full mt-8">
      <div className="flex w-full sm:px-4 my-4 items-center gap-4">
        <div className="left text-center ">
          <div className="text-xs md:text-sm py-2  text-nowrap">
            Today's Low
          </div>
          <div className="text-sm md:text-[22px] py-2 font-medium">
            46,930.22
          </div>
        </div>
        <div className="relative line w-full h-2 rounded-full bg-gradient-to-r from-red-500 from-20%  via-yellow-500 via-60%  to-cyan-400 ">
          <div className="absolute top-2 left-[70%] flex flex-col items-center ">
            <div className="w-[8px] h-[10px] border-[7px] border-b-[10px] border-transparent  border-b-textMain"></div>
            <div className="text-xs">$48,637.83</div>
          </div>
        </div>
        <div className="right text-center">
          <div className="text-xs md:text-sm py-2 text-nowrap">
            Today's High
          </div>
          <div className="text-sm md:text-[22px] py-2 font-medium">
            49,343.83
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;
