import Auth from '@/components/account/Auth'
import SignUp from '@/components/account/SignUp'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {   
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Auth/>
      <SignUp/>
    </div>
  )
}

export default page
