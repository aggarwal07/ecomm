import Cart from '@/components/account/cart/Cart'
import MobileCart from '@/components/account/cart/MobileCart'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <MobileCart/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default page
