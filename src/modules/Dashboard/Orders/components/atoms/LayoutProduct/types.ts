export interface Product {
  id: number;
  name: string;
  image?: string;
  category: string;
}

export interface LayoutProductProps {
  product: Product;
  status: number;
}
