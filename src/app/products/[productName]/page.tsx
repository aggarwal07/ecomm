import ContactUs from "@/components/actionButton/CartActionButton";
import Footer from "@/components/footer/Footer";
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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
