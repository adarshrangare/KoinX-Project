import React from "react";
import CryptoCard from "../CryptoCard";
import taxCal from "../../Assets/taxCalImg.png"
import profitCal from "../../Assets/profitCal.png"
import { FaArrowRight } from "react-icons/fa6";
const AboutCoin = () => {
  return (
    <div className="my-4 p-4 border rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mt-4 ">About Bitcoin</h2>

      <div>
      <h4 className="text-lg font-bold mt-4 mb-2"> What is Bitcoin?</h4>
      <p className="font-medium text-textGrey pb-4 border-b">
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>

      <h4 className="text-lg font-bold mt-4 mb-2">
        Lorem ipsum dolor sit amet
      </h4>
      <p className="font-medium text-textGrey pb-4 border-b">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
        <br /> <br />
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
        <br /> <br />
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>


      </div>

      <div className="my-4 border-b">
        <h3 className="text-2xl font-bold">Already Holding Crypto?</h3>
        
        <div className="flex max-sm:flex-col gap-4 my-4 justify-between sm:px-4">

        {/* <CryptoCard text="Calculate your Profits" img = {taxCal}/> */}
        
        <div className="card w-full max-w-[395px] h-[151px] rounded-md bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] flex items-center p-3">

            <img src={profitCal} alt="profitCalculate" />
            
            <div className="p-4">
                <div className="text-xl font-bold text-white leading-[28px]">Calculate your Profits</div>
                <button className=" my-2 bg-white px-4 text-nowrap py-2  rounded-lg text-sm font-semibold leading-7 active:scale-95 transition-all">Check Now <FaArrowRight className="inline"/> </button>
            </div>
        </div>


        <div className="card w-full max-w-[395px] h-[151px] rounded-md bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex items-center p-3">

            <img src={profitCal} alt="profitCalculate" />
            
            <div className="p-4">
                <div className="text-xl font-bold text-white leading-[28px]">Calculate your tax liability</div>
                <button className=" my-2 bg-white px-4  text-nowrap py-2 rounded-lg text-sm font-semibold leading-7 active:scale-95 transition-all">Check Now <FaArrowRight className="inline"/> </button>
            </div>
        </div>


        </div>


        </div>  

        <p className="font-medium text-textGrey pb-4 ">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </p> 
    </div>
  );
};

export default AboutCoin;
