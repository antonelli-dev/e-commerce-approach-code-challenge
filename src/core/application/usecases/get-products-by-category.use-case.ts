import { IProductRepository } from "@/core/domain/interfaces/product-repository.interface";
import { ProductRepository } from "@/core/infrastructure/repositories/product.repository";

export class GetProductsByCategoryUseCase {
  private readonly _productsRepository: IProductRepository;

  constructor() {
    this._productsRepository = new ProductRepository();
  }

  async execute(category: string) {
    return await this._productsRepository.getProductsByCategory(category);
  }
}
