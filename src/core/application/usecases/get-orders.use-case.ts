import { IOrdersRepository } from "@/core/domain/interfaces/orders-repository.interface";
import { OrderRepository } from "@/core/infrastructure/repositories/order.repository";

export class GetOrdersUseCase {
  private readonly _orderRepository: IOrdersRepository;

  constructor() {
    this._orderRepository = new OrderRepository();
  }

  async execute() {
    return await this._orderRepository.getOrders();
  }
}
