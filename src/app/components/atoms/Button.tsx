type ButtonKuProps = {
  children: React.ReactNode;
};

export default function ButtonKu({ children }: ButtonKuProps) {
  return (
    <>
      <button className="bg-[#212529] text-sm sm:text-base text-white text-md rounded-md sm:px-4 sm:py-3 px-3 py-3 hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer">{children}</button>
    </>
  );
}
