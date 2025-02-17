import Announcements from '@/components/Announcements'
import React from 'react'

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'> 
      
      </div>
      <div className='w-full flex flex-col xl:w-1/3'><Announcements/></div>

      {/* <h1>ParentPage</h1> */}
    </div>
  )
}

export default ParentPage
