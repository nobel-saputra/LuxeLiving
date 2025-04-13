import Link from "next/link";

export default function NavigationLink() {
  return (
    <div className="hidden md:flex items-center space-x-6 text-[#212529]">
      <Link href="/" className="hover:text-gray-500 poppins-regular">
        Home
      </Link>
      <Link href="/about" className="hover:text-gray-500 poppins-regular">
        Properties
      </Link>
      <Link href="/contact" className="hover:text-gray-500 poppins-regular">
        About Us
      </Link>
      <Link href="/contact" className="hover:text-gray-500 poppins-regular">
        Contact Us
      </Link>
    </div>
  );
}
