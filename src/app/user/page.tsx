import User from '@/components/account/User'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <User/>
        </div>
      
    </div>
  )
}

export default page
