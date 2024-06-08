export interface ProductsInterface {
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  amount?: number;
}
