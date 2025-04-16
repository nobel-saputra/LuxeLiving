import { Image, poppins } from "../../lib/ui";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "../organism/propertiesCard";

export default function Home() {
  return (
    <>
      <div id="properties"></div>
      <div className={`${poppins.className} mx-5`}>
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
            {/* Card 1 end */}

            {/* Card 2 */}
            <div>
              <Card2 />
            </div>

            {/* Card 3 */}
            <div>
              <Card3 />
            </div>

            {/* Card 4 */}
            <div>
              <Card4 />
            </div>

            {/* Card 5 */}
            <div>
              <Card5 />
            </div>

            {/* Card 6 */}
            <div>
              <Card6 />
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
    </>
  );
}
