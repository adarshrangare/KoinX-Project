import React from "react";
import { Carousel, ContentWrapper } from "../../components";
import { coins } from "../../utils/constants";
const Trending = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <ContentWrapper>
      <br />
      <h3 className="text-2xl font-bold">You May Also Like</h3>
      <Carousel />
      <br />
      <h3 className="text-2xl font-bold">Trending</h3>
      <Carousel />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
