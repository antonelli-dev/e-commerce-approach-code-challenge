import { Product } from '@/core/domain/entities/Product';

export class CartItem {

    public quantity: number = 0;
    public product?: Product;

}