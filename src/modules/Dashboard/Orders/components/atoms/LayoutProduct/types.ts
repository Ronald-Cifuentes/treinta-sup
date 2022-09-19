export interface Product {
  id: number;
  name: string;
  image?: string;
  category?: string;
  sku?: string;
}

export interface LayoutProductProps {
  product: Product;
  status: number;
}
