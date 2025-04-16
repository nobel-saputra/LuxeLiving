import { poppins, Image } from "../../../lib/ui";

export default function AboutCard1() {
  return (
    <>
      <div className={`${poppins}`}>
        <div className=" max-w-sm overflow-hidden shadow-lg border rounded-2xl bg-[#F8F4E1]">
          <div className="flex justify-center pt-6">
            <Image src="/images/aboutUs/aboutUsTheThree/user.png" alt="Deskripsi" width={150} height={150} className="object-cover" />
          </div>
          <div className="px-6 py-10">
            <p className="text-[#212529] text-xl text-justify">For us, this isnt just a property transaction. We build human connections. From first-time families to veteran investors — we consider everyone like a friend. we love people that respect everyone</p>
          </div>
        </div>
      </div>
    </>
  );
}
