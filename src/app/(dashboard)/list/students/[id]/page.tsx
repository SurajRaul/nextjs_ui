"use client"
import Dropdown from '@/components/Dropdown'
import { parentsData } from '@/lib/data'
import React, { useState } from 'react'

const page = () => {
    const [selectedValue, setSelectedValue] = useState<string>('')
    const options = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
    const handleDropdown= (value:string) => {
        setSelectedValue(value);
    }
  return (
    <div className='p-4'>
        
        <Dropdown options={options} placeholder="student name" onChange={handleDropdown}></Dropdown>
    </div>
  )
}

export default page
