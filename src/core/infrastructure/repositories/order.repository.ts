import { Order } from '@/core/domain/entities/Order';
import { IOrdersRepository } from '@/core/domain/interfaces/orders-repository.interface';
import { HttpMethod } from '@/core/infrastructure/enums/http-method.enum';
import { receptorApi } from '@/core/infrastructure/datasource/receptor.api';

export class OrderRepository implements IOrdersRepository {

    async getOrders(): Promise<Order[]> {
        const response: Response = await receptorApi(HttpMethod.GET, 'orders', 'no-cache');
        const users: Order[] = await response.json();

        return users;
    }

}