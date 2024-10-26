import Link from "next/link";
import React from "react";

function SingleFragment({
  children,
  text,
  href,
}: Readonly<{
  children: React.ReactNode;
  text: string;
  href: string;
}>) {
  return (
    <Link
      href={href}
      className=" rounded-md px-5 py-2 hover:bg-sky-100 group items-center flex flex-row gap-3"
    >
      {/* <CiSettings  className="fill-slate-500 group-data-[hover]:fill-sky-500/80" /> */}
      {children}
      <span
        className={`font-medium text-base text-gray-700  group-data-[hover]:text-sky-500`}
      >
        {text}
      </span>
    </Link>
  );
}

export default SingleFragment;
