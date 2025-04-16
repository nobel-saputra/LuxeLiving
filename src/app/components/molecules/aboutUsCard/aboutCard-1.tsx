import { poppins, Image } from "../../../lib/ui";

export default function AboutCard1() {
  return (
    <>
      <div className={`${poppins}`}>
        <div className="max-w-sm overflow-hidden shadow-lg border rounded-2xl bg-[#F8F4E1]">
          <div className="flex justify-center pt-6">
            <Image src="/images/aboutUs/aboutUsTheThree/ear.png" alt="Deskripsi" width={150} height={150} className="object-cover" />
          </div>
          <div className="px-6 py-10">
            <p className="text-[#212529] text-xl text-justify">We believe that listening is the first step in matching your dream home with your desires. We always start with what you need, not with what we want to sell to everybody that want to sell anything</p>
          </div>
        </div>
      </div>
    </>
  );
}
