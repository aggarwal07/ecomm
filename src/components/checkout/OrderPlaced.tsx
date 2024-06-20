import { useAppSelector } from '@/store/hooks'
import React from 'react'
import { FcShipped } from "react-icons/fc";
import CartCard from '../account/cart/CartCard';
const OrderPlaced = () => {
  const checkout = useAppSelector((state)=> state.address);
  const cart = useAppSelector((state)=> state.cart.cart);
  console.log(checkout);
  return (
    <div className='bg-gray-100 w-full py-10'>
      <div className='w-[97vw] lg:w-[60em] flex flex-col items-center'>
        <div className='flex flex-col items-center text-black font-bold text-4xl'>
        <FcShipped size={150} />
          Order Placed
        </div>
        <div className='text-center mt-3'>
          <p className='text-xs text-gray-400'>ORDER ID:</p>
          <p className='text-lg mt-1 text-gray-500 font-bold'>{checkout.orderId}</p>
        </div>
        <div className='bg-gray-300 w-[75%] h-[0.12em] my-5'></div>
        <div className="py-5 flex flex-col gap-2 overflow-y-auto max-lg:shadow-2xl max-lg:p-2">
            {cart.map((item: any, index: number) => (
              <div key={index} className="bg-black rounded-2xl">
                <CartCard product={item} />
              </div>
            ))}
          </div>
        <div className='bg-gray-300 w-[75%] h-[0.12em] my-5'></div>
        <div className='text-md text-gray-500 flex flex-col w-[75%]'>
        <p className='text-black text-xl font-bold mb-2 underline'>Billing Details:-</p>
          <p>{checkout.name}</p>
          <p>{checkout.mobile}</p>
          {/* <div className='bg-gray-300 w-[30%] h-[0.01em] my-5'></div> */}
          <p>{checkout.address},{checkout.city},{checkout.state}-{checkout.postal}</p>

        </div>
      </div>
    </div>
  )
}

export default OrderPlaced
