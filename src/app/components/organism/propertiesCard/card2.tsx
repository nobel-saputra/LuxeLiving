import { Image, poppins, Locate, CircleDollarSign, Ruler, BedDouble, Bath, Car } from "../../../lib/ui";
import ButtonKu from "../../atoms/Button";
export default function Card2() {
  return (
    <>
      <div className={`${poppins}`}>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#f8f4e1]">
          {/* Card Image */}
          <Image className="w-full" src="/images/properties/card-2.png" alt="Sunset in the mountains" width={400} height={300} />
          <div className="px-6 py-4">
            {/* Text Card */}
            <p className="font-medium text-xl ms-1 mb-4">Mountain House</p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Locate />
                <p className="font-medium">Sumatra Utara, Indonesia</p>
              </div>
              <div className="flex items-center gap-1">
                <CircleDollarSign />
                <p className="font-medium">Rp 15.200.000.000</p>
              </div>
              <hr />
              {/* ruler & bed */}
              <div className="flex items-center gap-1">
                <Ruler className="w-[20px] h-[20px]" />
                <p className="font-medium me-2">700 m²</p>
                {/* pembeda */}
                <BedDouble className="w-[20px] h-[20px]" />
                <p className="font-medium">6 Beds</p>
              </div>
              {/* ruler & bed (end) */}

              {/* bath & garage */}
              <div className="flex item-center gap-1">
                <Bath className="w-[20px] h-[20px]" />
                <p className="font-medium me-3">2 Bath</p>
                {/* pembeda */}
                <Car className="w-[20px] h-[20px]" />
                <p className="font-medium">1 Garage</p>
              </div>
              {/* bath & garage (end) */}
              <hr />
            </div>
            {/* deskripsi */}
            <div className="my-3">
              <p className="text-sm font-semibold text-justify">A modern house with natural lighting, a spacious garden, and minimalist architectural design.</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <ButtonKu>View Details</ButtonKu>
              <ButtonKu>Contact Agent</ButtonKu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
