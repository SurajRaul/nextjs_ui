import Announcements from '@/components/Announcements'
import React from 'react'

const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-[2/3] bg-blue'>
      <h1>Performance Report</h1>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <Announcements/>
      </div>
    </div>
  )
}

export default TeacherPage
