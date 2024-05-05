import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-[1vh] md:top-[45vh] left-[1vw] md:left-[40vw] w-[15em] h-[7em] md:w-[20em] md:h-[10em] text-center bg-gray-100 shadow-2xl text-black p-4 z-[1000] rounded-2xl">
      
        <div className="flex flex-col h-full justify-center items-center relative">
        <FaRegCircleCheck className='text-green-500' size={80} />
          <p className='text-xl font-semibold mt-2'>{message}</p>
          <RxCross1 className='absolute top-1 right-1 cursor-pointer' onClick={onClose} size={30} />
        </div>
    </div>
  );
};

export default Alert;