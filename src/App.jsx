import React from 'react'
import { ContentWrapper, Navbar,TradingViewChart } from './components'
import GridLayout from './components/GridLayout/GridLayout'
import { MainSection, SparkLines, Trending } from './Sections'


const App = () => {
  return (
    <>
    <Navbar/>
    <ContentWrapper>
    <div className=' p-2 text-sm'> <span>Cryptocurrencies {"»"} </span> <span className='text-textMain font-medium '>Bitcoin</span> </div>

    <GridLayout Trending={<Trending/>} MainSection={<MainSection/>} SparkLines={<SparkLines/>}  />

    </ContentWrapper>
    </>
  )
}

export default App