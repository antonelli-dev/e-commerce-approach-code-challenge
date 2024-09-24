'use client';

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CartSlice,
  createCartSlice,
} from "@/core/application/store/slices/cart.slice";

export const useCartStore = create<CartSlice>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    { name: "cartStorage", storage: createJSONStorage(() => localStorage) }
  )
);
