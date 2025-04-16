import { poppins, Image, ButtonKu } from "../../lib/ui";
import { AboutCard1, AboutCard2, AboutCard3 } from "../molecules/aboutUsCard";

export default function Aboutus() {
  return (
    <>
      <div id="aboutus"></div>
      <div className={`${poppins.className} mx-5`}>
        <div className="container mt-36 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end items-end text-white">
          <div className="cursor-text">
            <div className="w-full max-w-[400px] sm-max-w-[900px]">
              <Image src="/images/aboutus/about-text.png" alt="Logo" width={400} height={400} priority />
            </div>
          </div>
        </div>
        {/* image kiri & Text kanan */}
        <div className="lg:pl-28 md:pl-20 sm:px-4 mt-28 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <Image src="/images/aboutus/about-house.png" alt="Deskripsi" width={600} height={600} className="object-cover rounded" />
          <div className="lg:mt-20 lg:ms-20">
            <h2 className="font-semibold text-4xl">The Best House In Indonesia</h2>
            <p className="max-w-xl mx-auto text-justify text-xl mt-10 text-[#212529]">Discover exclusive luxury villas in Indonesia with Luxeliving. We specialize in exceptional properties and are dedicated to connecting you with your perfect high-end lifestyle through our personalized service</p>
            <div className="flex items-center gap-2 mt-3">
              <ButtonKu>Sell Property</ButtonKu>
              <ButtonKu>Free Consultation</ButtonKu>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-36">
            <AboutCard1 />
            <AboutCard2 />
            <AboutCard3 />
          </div>
        </div>
      </div>
    </>
  );
}
