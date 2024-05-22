import React from "react";
import CartCard from "../CartCard";
interface OrderDetailsProps {
  data: any;
}
const OrderDetails: React.FC<OrderDetailsProps> = ({ data }) => {
  console.log(data, "new");
  return (
    <div className="w-full p-5 flex flex-col items-center text-white">
      <div className="flex justify-between w-full">
        <p className="text-sm">Ordered On {data[0].orderDate}</p>
        <p className="text-sm">Order Id: {data[0].orderId}</p>
      </div>
      <div className="flex mt-5 flex-col h-[30vh] overflow-y-auto">
        {data[0].cart?.map((item: any, index: any) => (
          <div key={item._id}>
            <CartCard product={item}></CartCard>
          </div>
        ))}
      </div>
      <div className="bg-black h-[0.1em] w-full my-4"></div>
      <p className="w-full text-sm">Track Order : {data[0].orderStatus}</p>
    </div>
  );
};

export default OrderDetails;
