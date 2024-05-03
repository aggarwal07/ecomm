export interface ProductType {
    size: string;
    material: string;
    price: string;
    _id: string;
  }
  
  export interface Product {
    _id: string;
    name: string;
    price: string;
    description: string[];
    images: string[];
    type: ProductType[];
    category: string;
    __v: number;
  }
  
  export interface Account {
    _id: string;
    email: string;
    name: string;
    contactNo: string;
    password: string;
    cart: Product[];
    wishlist: Product[];
    __v: number;
  }