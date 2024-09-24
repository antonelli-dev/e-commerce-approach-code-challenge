import { Product } from '@/core/domain/entities/Product';
import { IProductRepository } from '@/core/domain/interfaces/product-repository.interface';
import { HttpMethod } from '@/core/infrastructure/enums/http-method.enum';
import { storeApi } from '@/core/infrastructure/datasource/store.api';

export class ProductRepository implements IProductRepository {

    constructor() {

    }

    async getProducts(): Promise<Product[]> {
        const response: Response = await storeApi(HttpMethod.GET, 'products');
        const products: Product[] =  await response.json();

        return products;
    }

    async getProductsByCategory(category: string): Promise<Product[]> {
        const response: Response = await storeApi(HttpMethod.GET, `products/category/${category}`);
        const products: Product[] =  await response.json();

        return products;
    }

}