import { poppins, Image } from "../../../lib/ui";

export default function AboutCard2() {
  return (
    <>
      <div className={`${poppins}`}>
        <div className=" max-w-sm overflow-hidden shadow-lg border rounded-2xl bg-[#F8F4E1]">
          <div className="flex justify-center pt-6">
            <Image src="/images/aboutUs/aboutUsTheThree/paint.png" alt="Deskripsi" width={150} height={150} className="object-cover" />
          </div>
          <div className="px-6 py-10">
            <p className="text-[#212529] text-xl text-justify">Aesthetics are important. Every home we feature has undergone visual curation, with the best lighting and placement. Because a beautiful home also contributes to a more peaceful life</p>
          </div>
        </div>
      </div>
    </>
  );
}
