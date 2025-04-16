import { Link } from "../../../lib/ui";

export default function NavigationLink() {
  return (
    <div className="hidden md:flex items-center space-x-6 text-[#212529]">
      <Link href="#home" scroll={true} className="hover:text-gray-500 poppins-regular">
        Home
      </Link>
      <Link href="#properties" scroll={true} className="hover:text-gray-500 poppins-regular">
        Properties
      </Link>
      <Link href="#aboutus" scroll={true} className="hover:text-gray-500 poppins-regular">
        About Us
      </Link>
      <Link href="#team" scroll={true} className="hover:text-gray-500 poppins-regular">
        Team
      </Link>
      <Link href="#contact" scroll={true} className="hover:text-gray-500 poppins-regular">
        Contact Us
      </Link>
    </div>
  );
}
