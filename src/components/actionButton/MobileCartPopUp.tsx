import React, { useEffect, useState } from 'react';
import CartCard from '../account/cart/CartCard';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeCart } from '@/store/slices/cart';

interface MobileCartPopUpProps {
  unit: any;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

const MobileCartPopUp: React.FC<MobileCartPopUpProps> = ({ unit }) => {
  const isOpen = useAppSelector((state) => state.isCartOpen.isOpen);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (isOpen && windowSize.width <= 640) { // 640px is the breakpoint for 'sm' in Tailwind CSS
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        dispatch(closeCart());
      }, 4000); // 4000 milliseconds = 4 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, windowSize, dispatch]);

  if (!visible) {
    return null;
  }

  return (
    <div className='fixed top-5 bg-black right-3 sm:hidden'>
      <CartCard product={unit} popup={true}/>
    </div>
  );
};

export default MobileCartPopUp;
