import { create } from "zustand";

// Definisikan tipe CartItem
type CartItem = {
  id: number;
  title: string;
  qty: number;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  note?: string;
  stock?: number;
  checked?: boolean;
};

type CartState = {
  cart: CartItem[];
};

type Action = {
  addToCart: (cart: CartItem) => void;
  removeFromCart: (id: number) => void;
  selectProductToChecked: (id: number, checked: boolean) => void;
  setCheckedAllProduct: (isCheked: boolean) => void;
  clearCart: () => void;
};

// Buat toko (store) Zustand
export const useCartStore = create<CartState & Action>((set) => ({
  cart: [],

  // Fungsi untuk menambahkan item ke keranjang
  addToCart: (item: CartItem) => {
    set((state) => {
      // Cek apakah item dengan ID yang sama sudah ada dalam keranjang
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Jika sudah ada, tambahkan qty
        const updatedCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + item.qty }
            : cartItem
        );

        return { cart: updatedCart };
      } else {
        // Jika belum ada, tambahkan item baru
        return { cart: [...state.cart, item] };
      }
    });
  },

  // Fungsi untuk menghapus item dari keranjang berdasarkan id
  removeFromCart: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  selectProductToChecked: (id: number, checked: boolean) => {
    set((state) => {
      // Cek apakah item dengan ID yang sama sudah ada dalam keranjang
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (existingItemIndex !== -1) {
        // Item dengan ID yang sama ditemukan dalam keranjang
        // Update properti checked sesuai dengan parameter checked
        state.cart[existingItemIndex].checked = checked;
      }
      return { cart: [...state.cart] };
    });
  },

  setCheckedAllProduct: (isChecked: boolean) => {
    set((state) => ({
      cart: state.cart.map((item) => ({
        ...item,
        checked: isChecked,
      })),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));
