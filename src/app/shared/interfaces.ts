export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;
}

export interface IOrder{
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem{
    id: number;
    productNmae: string;
    itemCost: number;
}