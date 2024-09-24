import { Product } from '@/core/domain/entities/Product';

export interface IProductRepository {

    getProducts(): Promise<Product[]>
    getProductsByCategory(category: string): Promise<Product[]>

};