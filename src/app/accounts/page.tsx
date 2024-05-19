import Auth from '@/components/account/Auth'
import SignIn from '@/components/account/SignIn'
import SignUp from '@/components/account/SignUp'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {   
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <SignIn/>
      </div>
    </div>
  )
}

export default page
