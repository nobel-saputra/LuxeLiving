import { Image, poppins } from "../../../lib/ui";

export default function Card3() {
  return (
    <>
      <div className={`${poppins}`}>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-[#f8f4e1]">
          <Image className="w-full" src="/images/properties/card-1-image.png" alt="Sunset in the mountains" width={400} height={300} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sunset Serenity</div>
            <p className="text-gray-700 text-base">Experience the beauty of a golden sunset surrounded by peaceful mountains.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sunset</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mountains</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
          </div>
        </div>
      </div>
    </>
  );
}
