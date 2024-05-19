'use client'
import React, { useEffect, useState } from 'react';
import Cart from '../account/Cart';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeCart } from '@/store/slices/cart';
import CartCard from '../account/CartCard';

interface MobileCartPopUpProps {
  unit: any;
}

const MobileCartPopUp: React.FC<MobileCartPopUpProps> = ({ unit }) => {
  const isOpen = useAppSelector((state) => state.isCartOpen.isOpen);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(closeCart());
      }, 4000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

  if (!visible) {
    return null;
  }

  return (
    <div className='fixed top-5 bg-black right-3'>
      <CartCard product={unit} popup={true}/>
    </div>
  );
};

export default MobileCartPopUp;
