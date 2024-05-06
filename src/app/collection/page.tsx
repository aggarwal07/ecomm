import ProductsListing from '@/components/collection/ProductsListing'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <ProductsListing/>
      </div>
    </div>
  )
}

export default page
