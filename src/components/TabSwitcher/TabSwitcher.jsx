import React from "react";
import { useState } from "react";
import { IoTerminal } from "react-icons/io5";
import { linksArray } from "../../utils/constants";
const TabSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-8 w-fit py-2   ">
      <ul
        className="flex gap-8 border-b-2 overflow-y-hidden overflow-x-scroll  relative  "
        
      >
        {linksArray.map((link, index) => (
          <li
            className={`text-nowrap relative pb-3 ${
              activeIndex === index ? "after:content-[''] after:absolute after:bg-bgBlueMain text-textBlue font-semibold after:w-full after:h-2 after:-bottom-1 after:left-0 " : ""
            } `}
            onClick={()=>{
                setActiveIndex(index);
            }}
            key={link.href}
          >
            <a href={link.href}>{link.textContent}</a>
          </li>
        ))}

        
      </ul>
    </div>
  );
};

export default TabSwitcher;

