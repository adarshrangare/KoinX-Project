import React from "react";
import { useState, useEffect } from "react";
import { ChartCard, Performance, TabSwitcher, TradingViewChart } from "../../components";

const MainSection = () => {
  
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(()=>{


    })

  return (
    <main className="">
    <ChartCard/>
    <TabSwitcher/>
    <Performance/>
    </main>
  );
};

export default MainSection;
