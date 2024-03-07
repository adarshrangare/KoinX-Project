import React from 'react'
import PerformanceGraph from '../PerformanceGraph/PerformanceGraph'
import Fundamentals from './Fundamentals'

const Performance = () => {
  return (
    <div className='w-full p-4 my-4 bg-white border rounded-lg'>
        <h2 className='text-2xl font-semibold '>Performance</h2>

        <PerformanceGraph/>
        <PerformanceGraph/>

        <Fundamentals/>


    </div>
  )
}

export default Performance