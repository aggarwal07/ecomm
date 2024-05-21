import { useAppSelector } from '@/store/hooks'
import React from 'react'

const Review = () => {
  const checkout = useAppSelector((state)=> state.address);
  console.log(checkout);
  return (
    <div className='mt-14'>
      {checkout.name}
      {checkout.address}
      {checkout.postal}

    </div>
  )
}

export default Review
