import { Image, poppins } from "../../lib/ui";
import { Card1, Card2, Card3 } from "../molecules/cards";

export default function Home() {
  return (
    <>
      <div className={`${poppins.className}`}>
        <div className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white">
          <div className="cursor-text">
            <Image src="/images/properties/properties-text.png" alt="Logo" width={400} height={400} priority />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-36">
            {/* Card 1 */}
            <div>
              <Card1 />
            </div>
            {/* Card 2 */}
            <div>
              <Card2 />
            </div>
            {/* Card 3 */}
            <div>
              <Card3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
