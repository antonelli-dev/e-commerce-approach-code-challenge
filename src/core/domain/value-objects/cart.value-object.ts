import { CartItem } from '@/core/domain/value-objects/cart-item.value-object';

export class Cart {
    userId: number = 0;
    items: CartItem[] = []
};