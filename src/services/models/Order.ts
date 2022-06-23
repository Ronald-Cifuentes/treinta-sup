export interface OrderStatus {
  id: number;
  name: string;
}

export interface Order {
  id: string;
  value: number;
  appliedDiscount?: number;
  status: OrderStatus;
  comments?: string;
  deliveryDate: string;
  createdAt: string;
  updatedAt: string;
  customerName: string;
  phone?: string;
}
