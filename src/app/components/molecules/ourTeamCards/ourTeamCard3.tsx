import { Image } from "../../../lib/ui";

export default function OurTeamCard2() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#f8f4e1]">
      {/* Card Image */}
      <Image src="/images/ourTeam/people3.png" alt="mr ceo" width={400} height={300} className="w-full" />
      <div className="px-6 py-4">
        {/* Text Card */}
        <p className="font-medium text-2xl ms-1 mb-1 text-[#212529]">Lena Jackson</p>
        <p className="font-regular text-xl ms-1 mb-1 text-[#212529]">Lead Interior Architect</p>
        <div className="flex flex-col gap-3 text-sm">
          {/* Description */}
          <div className="my-3">
            <p className="text-sm font-semibold text-justify text-gray-700">Lead Interior Architect at LuxeLiving, drives the creative vision and technical execution of luxury residential interior designs. she make people of LuxeLiving know how to work correctly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
