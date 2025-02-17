import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className='flex  w-full md:w-auto flex rounded-full gap-2 ring-[1.5px] ring-gray-300 py-0.5 px-2 text-md'>
      <Image src="/search.png" alt="" width={13} height={13}/>
      <input type='text' placeholder='Search..' 
      className='w-[200px] bg-transperent outline-none p-0.2'/>
    </div>
  )
}

export default TableSearch
