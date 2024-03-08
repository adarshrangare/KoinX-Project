import React from "react";
import { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { coins } from "../../utils/constants";
import SparkLineContainer from "../SparkLineContainer/SparkLineContainer";

const Carousel = () => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    // console.log({scrollAmount,"sL":container.scrollLeft,"width":container.offsetWidth});

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-4 relative">
        
      <div className="rounded-full shadow-default leftButton absolute -translate-y-2/4 bg-slate-200 p-1.5 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -left-4">
        <IoMdArrowBack className="  " onClick={() => navigation("left")} />
      </div>

      <div className="rounded-full shadow-default rightButton absolute -translate-y-2/4 bg-slate-200 p-1.5 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -right-4">
        <IoMdArrowForward className="  " onClick={() => navigation("right")} />
      </div>

      {
        <div
          className="carouselItems flex overflow-x-scroll gap-2.5 overflow-y-hidden py-0 md:mx-6  rounded-md "
          ref={carouselContainer}
        >
          {coins.map((coin, index) => {
            return (
              <SparkLineContainer key={coin?.item?.coin_id} coinData = {coin?.item} />
            );
          })}
        </div>
      }
    </div>
  );
};

export default Carousel;
