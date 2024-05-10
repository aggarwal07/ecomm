import ProductsListing from '@/components/collection/ProductsListing'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
interface PageProps {
  params: {
    productType: string;
  };
}
const page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <ProductsListing productType={params.productType}/>
      </div>
    </div>
  )
}

export default page
