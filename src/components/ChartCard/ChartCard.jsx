import React from "react";
import { useEffect, useState } from "react";
import TradingViewChart from "../TradingViewChart/TradingViewChart";

const ChartCard = () => {
  const [bitcoinData, setBitcoinData] = useState({
    inr: 5697177,
    inr_24h_change: 3.6596920153414336,
    usd: 68726,
    usd_24h_change: 3.6767559459431545,
  });
  useEffect(() => {
    // fetchBitCoinConversion().then(res=>{
    //     setBitcoinData(res.bitcoin);
    // })
  }, []);

  return (
    <div className="chartCard p-4 bg-white rounded-lg w-full border border-mainBorder">
      <section className="CoinName flex gap-2 items-center p-2">
        <img
          src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400"
          alt="bitcoin"
          width={30}
          height={30}
        />

        <div className="font-semibold">
          <span className="text-xl md:text-2xl leading-[28px] ">Bitcoin </span>
          <span className="text-sm md:text-base text-textFade3 ">BTC</span>
        </div>

        <div className="rank mx-3 bg-bgGrey text-base rounded-lg text-center px-4 py-2 text-white ">
          Rank #1
        </div>
      </section>
      <section className="PriceSection my-2 p-2 border-b pb-4 border-mainBorder">
        <div className="flex gap-2  items-center">
          <span className="text-2.5xl font-semibold text-textMain">
            $16,953.04
          </span>

          <div className="percent flex bg-bgGreen items-center gap-2 rounded-md p-2 text-base mx-2">
            <div className="w-[8px] h-[10px] border-[7px] border-b-[10px] border-transparent  border-b-trueGreen mb-1">
            </div>
            <span className="text-trueGreen">2.51%</span>
          </div>
          <div className="time text-textFade2 font-medium text-sm">(24H)</div>


        </div>
          <div className="text-base font-medium text-textMain">
          ₹ 13,42,343
          </div>



      </section>
      <section className="ChartSection w-full min-h-[345px] h-[375px]  overflow-hidden">
      <TradingViewChart/>

      </section>
    </div>
  );
};

export default ChartCard;
