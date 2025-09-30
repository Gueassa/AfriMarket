import { Category } from "../../assets/api/category";

export interface Product {
  category: string;
  quantity: number;
  id: string;
  _id:string,
  slug?: string,
  name: string,
  description: string,
  additional_info:string,
  vendor_info?:string,
  reviews?:string,
  color:string[],
  icon?:string,
  size?:string,
  stock?:string,
  categories: Category[],
  imageUrl: string[],
  sold_price: number,
  regular_price: number,
  created_at:Date,


}
