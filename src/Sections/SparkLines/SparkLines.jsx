import React from "react";
import cardSvg from "../../Assets/cardSvg.png";
import { FaArrowRight } from "react-icons/fa6";
const SparkLines = () => {
  return (
    <>
      <div className="cardBlue p-4 flex flex-col items-center justify-around  w-full h-fit max-w-full md:h-[515px] rounded-3xl bg-bgBlueMain">
        <div className="flex md:flex-col flex-col-reverse items-center w-full  mx-auto">
          <div className="flex flex-col items-center mx-auto w-full">
            <h1 className="  md:w-[268px] md:h-20 pb-2 leading-10 text-center font-bold text-white text-[22px] md:text-2xl">
              Get Started with KoinX for FREE
            </h1>
            <p className="md:w-[327px] h-[68px] text-white text-sm text-center font-medium leading-6">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>

          <img src={cardSvg} alt="illutration" className="min-w-[149px] my-4 min-h-[139px
]" width={178} height={166} />
        </div>

        <button className=" flex gap-3 items-center my-3 bg-white px-4 text-nowrap py-2  rounded-lg text-sm font-semibold leading-7 active:scale-95 transition-all">
          Get Started for FREE
          <FaArrowRight className="inline mb-0.5" />
        </button>
      </div>
    </>
  );
};

export default SparkLines;
