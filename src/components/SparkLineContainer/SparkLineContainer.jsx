import React from "react";

const SparkLineContainer = ({ coinData }) => {
  const {
    symbol,
    thumb,
    data: {
      price,
      sparkline,
      price_change_percentage_24h : priceChange ,
    },
  } = coinData;

  return <div className="border-2 rounded-md p-2 shrink-0 px-5 flex flex-col items-start bg-white m-2 md:w-[250px] w-[158px] min-h-[101px] md:min-h[160px] ">
    <div className="w-full flex items-center gap-2 m-2 ">
        <img src={thumb} alt={symbol} width={25} height={25} className="rounded-full" />
        <span className="uppercase ">{symbol}</span>        
        {priceChange.usd > 0 ? <span className=" py-0.5 px-1 rounded-md bg-green-100 text-trueGreen text-xs">{`+${Math.round(priceChange.usd)}%`}</span> : <span className=" py-0.5 px-1 rounded-md bg-red-100 text-red-500 text-xs">{`${Math.round(priceChange.usd)}%`}</span> }
    </div>
    <div className="m-2 text-xl font-medium" dangerouslySetInnerHTML={{__html: price}}>
        
    </div>
    <img src={sparkline} alt={symbol + " sparkline"} loading="lazy" className="m-2 w-full" />
    
  </div>;
};

export default SparkLineContainer;
