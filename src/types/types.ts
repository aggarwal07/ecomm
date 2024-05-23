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
    maxPrice : string;
    description: string[];
    images: string[];
    type: ProductType[];
    category: string;
    __v: number;
    productType: string;
    quantity : number;
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

  export interface PostOffice {
    Name: string;
    Description: string;
    BranchType: string;
    DeliveryStatus: string;
    Circle: string;
    District: string;
    Division: string;
    Region: string;
    Block: string;
    State: string;
    Country: string;
  }
  
  export interface PostalData {
    Status: string;
    PostOffice: PostOffice[];
  }