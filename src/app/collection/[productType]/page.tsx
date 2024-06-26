import ContactUs from "@/components/actionButton/CartActionButton";
import ProductsListing from "@/components/collection/ProductsListing";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
interface PageProps {
  params: {
    productType: string;
  };
}
const page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <ProductsListing productType={params.productType} />
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

export default page;
