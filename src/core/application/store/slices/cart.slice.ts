'use client';

import { StateCreator } from 'zustand';
import { Cart } from '@/core/domain/value-objects/cart.value-object';
import { CartItem } from '@/core/domain/value-objects/cart-item.value-object';

export interface CartSlice {
    cart: Cart;
    hasProductInCart: (productId: number) => boolean;
    addCartItem: (quantity: number, item: CartItem) => void;
    modifyQuantity: (cartItem: CartItem, quantity: number) => void;
    removeCartItem: (productId: number) => void;
};

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
    cart: new Cart(),
    addCartItem: (quantity: number, item: CartItem) => set( (state) => {
        const currentCart = state.cart;
        const currentItems = currentCart.items;
        const existItem = currentItems.some(i => i.product?.id == item.product?.id)
        
        if( !existItem ) {
            item.quantity = quantity;
            currentCart.items.push(item);
        }

        return {
            cart: currentCart
        }

    }),
    modifyQuantity: (cartItem: CartItem, quantity: number) => set( (state) => {
        const currentCart = state.cart;
        const itemIndex = state.cart.items.findIndex(i => i.product?.id == cartItem.product?.id) 

        if( itemIndex ) {
            currentCart.items[itemIndex].quantity = quantity;
        }

        return {
            cart: currentCart
        }
    } ),
    removeCartItem: (productId: number) => set( (state) => {
        const currentCart = state.cart;
        const itemIndex = state.cart.items.findIndex(i => i.product?.id == productId) 

        if( itemIndex >= 0 ) {
            currentCart.items.splice(itemIndex, 1);
        }

        return {
            cart: currentCart
        }
    }),
    hasProductInCart: (productId: number) => {
        return get().cart.items.some(p => p.product?.id == productId);
    }
});