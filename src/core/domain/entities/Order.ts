export class OrderItem {
    product_id: number = 0;
    quantity: number = 0;
}

export class Order {
    order_id: number = 0;
    user_id: number = 0;
    items: OrderItem[] = [];
    total_price: number = 0;
    status: string = '';
};