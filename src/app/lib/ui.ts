// font poppins
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// components dan icon
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, Locate, CircleDollarSign, Ruler, BedDouble, Bath, Car } from "lucide-react";

// export all
export { poppins, Image, Link, Search, Menu, Locate, CircleDollarSign, Ruler, BedDouble, Bath, Car };
