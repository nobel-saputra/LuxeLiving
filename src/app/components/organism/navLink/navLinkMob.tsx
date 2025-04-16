import { Link, Search } from "../../../lib/ui";
export default function NavLinkMob() {
  return (
    <div className="md:hidden mt-4 pb-2">
      <div className="flex flex-col space-y-3">
        <Link href="#home" scroll={true} className="hover:text-gray-500 poppins-regular py-1">
          Home
        </Link>
        <Link href="#about" scroll={true} className="hover:text-gray-500 poppins-regular py-1">
          Properties
        </Link>
        <Link href="#aboutus" scroll={true} className="hover:text-gray-500 poppins-regular py-1">
          About Us
        </Link>
        <Link href="#team" scroll={true} className="hover:text-gray-500 poppins-regular py-1">
          Team
        </Link>
        <Link href="#contact" scroll={true} className="hover:text-gray-500 poppins-regular py-1">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-200">
        <Link href="/search" className="hover:text-gray-500">
          <Search className="h-5 w-5" />
        </Link>
        <Link href="/search" className="bg-[#212529] text-white text-sm rounded-md px-3 py-1.5">
          Sell Property
        </Link>
      </div>
    </div>
  );
}
