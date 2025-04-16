import { Image, poppins } from "../../lib/ui";
import { OurTeamCard1, OurTeamCard2, OurTeamCard3 } from "../molecules/ourTeamCards";
export default function OurTeam() {
  return (
    <>
      <div id="team"></div>
      <div className={`${poppins.className} mx-5`}>
        {/* our team page */}
        <div className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start items-start text-white">
          <div className="cursor-text w-full">
            <div className="w-full max-w-[95vw] sm:max-w-[400px]">
              <Image src="/images/ourTeam/ourTeamText.png" alt="Logo" width={400} height={400} priority className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* team & image */}
        <h1 className="text-5xl font-semibold text-center mt-36">TEAM</h1>
        <div className="flex justify-center mx-auto mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
            <OurTeamCard1 />
            <OurTeamCard2 />
            <OurTeamCard3 />
          </div>
        </div>
      </div>
    </>
  );
}
