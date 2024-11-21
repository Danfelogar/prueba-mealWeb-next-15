import Link from "next/link";
import { Navigation } from "./Navigation";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex sm:pl-3  md:pl-10 lg:pl-28 flex-row w-full border-b border-gray-300  ">
      <div className="flex h-[3.8rem] flex-row items-center">
        <Link
          className="text-orange-500 mt-7 text-2xl cursor-pointer font-mono"
          href={"/"}
        >
          KUKS FRESH
        </Link>
      </div>
      <Navigation />
      <div className="border-l p-4 md:pt-5 lg:pt-5 border-gray-300 flex justify-center items-center">
        <div className="bg-gray-200 text-gray-400 p-2 rounded-full justify-center items-center">
          <FaRegUserCircle size={15} />
        </div>
      </div>
    </div>
  );
};
