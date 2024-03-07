import React from "react";
import { useState, useEffect } from "react";
import { AboutCoin, ChartCard, Performance, TabSwitcher, TradingViewChart } from "../../components";

const MainSection = () => {
  
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(()=>{


    })

  return (
    <main className="">
    <ChartCard/>
    <TabSwitcher/>
    <Performance/>
    <AboutCoin/>

    </main>
  );
};

export default MainSection;
