import { poppins, Image } from "../../lib/ui";

export default function ContactUs() {
  return (
    <>
      <div id="contact"></div>
      <div className={`${poppins.className} mt-26 mx-2`}>
        <div className="container -mb-28 mt-36 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-white">
          <div className="cursor-text">
            <div className="w-full max-w-[400px] sm-max-w-[900px]">
              <Image src="/images/contactUs/contact-text.png" alt="Logo" width={400} height={400} priority />
            </div>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="bg-[#F8F4E1] rounded-xl shadow border p-8 w-full max-w-md">
            <form className="space-y-4">
              <div>
                <label className="block text-[#212529] font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-[#212529] font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" placeholder="youremail@gmail.com" className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>

              <div>
                <label className="block text-[#212529] font-medium mb-1" htmlFor="message">
                  Send a Message
                </label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>

              <div className="text-right">
                <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
