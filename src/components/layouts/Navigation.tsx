import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-grow flex-row ">
      <div className="flex flex-row pl-40 items-end ">
        <Link
          className="text-blue-950 mx-3 text-sm pb-1.5 border-b-2 border-orange-500 cursor-pointer font-mono"
          href={"/"}
        >
          Home{" "}
        </Link>
        <Link
          className="text-blue-950 mx-3 text-sm pb-1.5 cursor-pointer font-mono"
          href={"/"}
        >
          Nosotros
        </Link>
        <Link
          className="text-blue-950 mx-3 text-sm pb-1.5 cursor-pointer font-mono"
          href={"/"}
        >
          Videos
        </Link>
      </div>
    </div>
  );
};
