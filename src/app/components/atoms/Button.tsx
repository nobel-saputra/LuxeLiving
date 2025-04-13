type ButtonKuProps = {
  children: React.ReactNode;
};

export default function ButtonKu({ children }: ButtonKuProps) {
  return (
    <>
      <button className="bg-[#212529] text-white text-sm rounded-md px-4 py-2 hover:bg-gray-700 transition duration-300 ease-in-out">{children}</button>
    </>
  );
}
