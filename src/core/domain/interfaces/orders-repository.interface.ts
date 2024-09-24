import { Order } from '@/core/domain/entities/Order';

export interface IOrdersRepository {
    getOrders(): Promise<Order[]>;
}