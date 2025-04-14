import { Image, poppins } from "../../lib/ui";

function HomeSection() {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-fixed ${poppins.className}`}>
      {/* background image */}
      <Image src="/images/home/home-light-image.png" alt="Background" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />

      {/* konten kontainer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center items-start text-white min-h-screen">
        {/* isi tulisan home */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6">ELEGAN & PREMIUM</h1>
          <p className="text-lg sm:text-xl lg:text-md mb-6 md:mb-8">Discover Luxury Living - Find Your Dream Home Today</p>
          <button className="rounded text-black text-md sm:text-lg py-2 px-4 sm:py-3 sm:px-6 bg-white hover:bg-gray-100 transition-colors duration-300 cursor-pointer">More Information</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
