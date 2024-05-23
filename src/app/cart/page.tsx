import Cart from '@/components/account/cart/Cart'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default page
