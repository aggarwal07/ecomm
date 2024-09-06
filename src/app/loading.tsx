'use client'
import React from 'react'
import { HashLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className='bg-black w-[100vw] h-[100vh] flex justify-center items-center'>
        <HashLoader color="#ffffff" />
    </div>
  )
}

export default loading
