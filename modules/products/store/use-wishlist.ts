import { create } from "zustand";

// Definisikan tipe WishItem
type WishItem = {
  id: number;
  productName: string;
};

// Definisikan tipe WishState menggunakan type
type WishState = {
  wishlist: WishItem[];
};

// Fungsi untuk memuat data dari localStorage
/* export const loadWishlistFromLocalStorage = () => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
}; */

// Fungsi untuk menyimpan data ke localStorage
/* const saveWishlistToLocalStorage = (wishlist: WishItem[]) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}; */

// Definisikan tipe aksi (actions) yang dapat memodifikasi state
type WishActions = {
  addToWishlist: (item: WishItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
};

// Buat toko (store) Zustand untuk use-wishlist
export const useWishlistStore = create<WishState & WishActions>((set) => {
  return {
    wishlist: [],

    // Fungsi untuk menaminitialWishlistbahkan item ke wishlist
    addToWishlist: (item: WishItem) => {
      set((state) => {
        const existingItem = state.wishlist.find(
          (wishItem) => wishItem.id === item.id
        );

        if (!existingItem) {
          const updatedWishlist = [...state.wishlist, item];
          // Simpan perubahan ke localStorage
          //saveWishlistToLocalStorage(updatedWishlist);
          return { wishlist: updatedWishlist };
        }

        return state;
      });
    },

    // Fungsi untuk menghapus item dari wishlist berdasarkan id
    removeFromWishlist: (id: number) => {
      set((state) => {
        const updatedWishlist = state.wishlist.filter(
          (wishItem) => wishItem.id !== id
        );
        // Simpan perubahan ke localStorage
        //saveWishlistToLocalStorage(updatedWishlist);
        return { wishlist: updatedWishlist };
      });
    },

    // Fungsi untuk mengosongkan isi wishlist
    clearWishlist: () => {
      set(() => {
        // Hapus data dari localStorage
        //localStorage.removeItem("wishlist");
        return { wishlist: [] };
      });
    },
  };
});
