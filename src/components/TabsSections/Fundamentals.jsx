import React from "react";
import { IoInformationCircle } from "react-icons/io5";

const Fundamentals = () => {
  return (
    <div className="w-full my-8 ">
      <h3 className="text-lg font-semibold text-textSubHead">
        Fundamentals{" "}
        <IoInformationCircle className="inline text-slate-400 text-xl" />{" "}
      </h3>

      <ul className="my-4 grid grid-cols-1 md:grid-cols-2 gap-x-10  ">
        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
            Bitcoin Price
          </span>
          <span className="text-right text-textMain text-sm font-medium">
            $16,815.46
          </span>
        </li>

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          Market Cap
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          $323,507,290,047
          </span>
        </li>
        
        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          24h Low / 24h High
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          $16,382.07 / $16,874.12
          </span>
        </li>

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          Market Cap Dominance
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          38.343%
          </span>
        </li>
        
        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          7d Low / 7d High
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          $16,382.07 / $16,874.12
          </span>
        </li>

        
        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          Volume / Market Cap
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          0.0718
          </span>
        </li>
        
        

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          Trading Volume
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          $23,249,202,782
          </span>
        </li>

        
        
        
        

        

        

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          All-Time High
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          $69,044.77 <span className="text-red-500">-75.6%</span>
          </span>
        </li>

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          Market Cap Rank
          </span>
          <span className="text-right text-textMain text-sm font-medium">
          #1
          </span>
        </li>

        <li className="flex justify-between py-4 border-b-2 ">
          <span className="text-left text-textFade2 text-sm font-medium">
          All-Time Low
          </span>
          <div className="text-right text-textMain text-sm font-medium">
          <span>$67.81 </span> <span className="text-green-500">24729.1%</span>
          </div>
        </li>
        
      </ul>
    </div>
  );
};

export default Fundamentals;
