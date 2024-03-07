import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='max-w-[1440px] w-full px-5 mx-auto overflow-x-hidden '> {children} </div>
  )
}

export default ContentWrapper