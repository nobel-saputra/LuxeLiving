import { Image } from "../../../lib/ui";

export default function OurTeamCard1() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#f8f4e1]">
      {/* Card Image */}
      <Image src="/images/ourTeam/people1.png" alt="mr ceo" width={400} height={300} className="w-full" />
      <div className="px-6 py-4">
        {/* Text Card */}
        <p className="font-medium text-2xl ms-1 mb-1 text-[#212529]">John Marston</p>
        <p className="font-regular text-xl ms-1 mb-1 text-[#212529]">The Ceo</p>
        <div className="flex flex-col gap-3 text-sm">
          {/* Description */}
          <div className="my-3">
            <p className="text-sm font-semibold text-justify text-gray-700">John Marston is the visionary CEO behind LuxeLiving, renowned for his strategic leadership in delivering innovative and high-quality luxury home properties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
