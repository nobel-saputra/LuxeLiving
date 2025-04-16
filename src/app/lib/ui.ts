// font poppins
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// atoms
import ButtonKu from "../components/atoms/Button";
// molecules
import KodeKananNavbar from "../components/molecules/navbarTools/componentKananDesk";

// komponen Image, Link, dan ikon yang digunakan di seluruh aplikasi
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, Locate, CircleDollarSign, Ruler, BedDouble, Bath, Car, Facebook, Instagram, MessageCircleHeart } from "lucide-react";

// export semua
export { poppins, Image, Link, Search, Menu, Locate, CircleDollarSign, Ruler, BedDouble, Bath, Car, ButtonKu, KodeKananNavbar, Facebook, Instagram, MessageCircleHeart };
