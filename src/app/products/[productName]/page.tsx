import ContactUs from "@/components/contact/ContactUs";
import Navbar from "@/components/navbar/Navbar";
import ProductDetails from "@/components/products/ProductDetails";
import React from "react";

interface PageProps {
  params: {
    productName: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  console.log(params, "params");
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProductDetails productName={params.productName} />
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  );
};

export default Page;
