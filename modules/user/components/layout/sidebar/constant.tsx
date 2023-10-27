import { CiUser, CiHeart, CiShop } from "react-icons/ci";

export const listMenu = [
  {
    link: "/user/settings?tipe=Biodata",
    name: "Informasi Personal",
    icon: <CiUser size={24} />,
  },
  {
    link: "/user/transaksi?tipe=Pending",
    name: "Transaksi Saya",
    icon: <CiShop size={24} />,
  },
  {
    link: "/user/wishlist",
    name: "Wishlist",
    icon: <CiHeart size={24} className="text-red-600" />,
  },
  {
    link: "/user/wishlist",
    name: "Bonus",
    icon: <CiHeart size={24} />,
  },
  {
    link: "/user/wishlist",
    name: "Notifikasi",
    icon: <CiHeart size={24} />,
  },
  {
    link: "/user/wishlist",
    name: "Pesan Anda",
    icon: <CiHeart size={24} />,
  },
];
