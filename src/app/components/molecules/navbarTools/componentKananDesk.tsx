import { Link, ButtonKu, Search } from "../../../lib/ui";

export default function KodeKananNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-6 lg:pr-4">
      <Link href="/search" className="hover:text-gray-500">
        <Search className="h-6 w-6" />
      </Link>
      <Link href="/search">
        <ButtonKu>Sell Property</ButtonKu>
      </Link>
    </div>
  );
}
