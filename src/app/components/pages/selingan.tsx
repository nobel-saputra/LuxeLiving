import { Image, poppins } from "../../lib/ui";

export default function Selingan() {
  return (
    <>
      <div className={`${poppins.className} mt-26`}>
        <div className={`relative min-h-screen w-full overflow-hidden bg-fixed ${poppins}`}>
          {/* background image */}
          <Image src="/images/selingan/selingan.png" alt="Background" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
          {/* teks di atas gambar */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <h1 className="text-center text-2xl sm:text-4xl lg:text-6xl font-bold text-white">
              <span className="text-[#D4C9BE]">LUXELIVING |</span> THE BEST CHOICE FOR YOU
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
