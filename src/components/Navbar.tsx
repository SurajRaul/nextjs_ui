import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-0.5'>
            <Image src="/search.png" width={14} height={14} alt="" />
            <input type='text' placeholder='Search...' className='outline-none p-1 rounded-full' />
        </div>
        <div className='flex items-center gap-6'>
        <div className='bg-white flex items-center w-7 h-7 rounded-full justify-center cursor-pointer'>
        <Image src="/message.png" width={20} height={20} alt="" />
        </div>
        <div className='bg-white flex items-center w-7 h-7 rounded-full justify-center cursor-pointer relative'>
        <Image src="/announcement.png" width={20} height={20} alt="" />
        <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>Suraj Raul</span>
            <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" className="rounded-full" width={34} height={34} alt=''/>
        </div>
      
    </div>
  )
}

export default Navbar
