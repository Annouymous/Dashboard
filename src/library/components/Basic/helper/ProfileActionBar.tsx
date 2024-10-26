"use client";
import Image from "next/image";
import React, { useContext } from "react";

import Link from "next/link";
import { AuthorContext } from "../../../../../Context/Author";
import { Auth } from "@/library/Firebase/config";

function ProfileActionBar() {
  const Author = useContext(AuthorContext);
  return (
    <Link
      href={"/dashboard/admin"}
      className="hover:bg-sky-100 h-full pt-1 flex px-3 w-full items-center gap-2 bg-white "
    >
      {Author?.user?.photoURL && (
        <Image
          alt="Icon"
          className="rounded-full size-[48px]"
          width={48}
          height={48}
          src={Author?.user?.photoURL}
        />
      )}
      <div className=" flex flex-col">
        <h4 className="text-sm truncate text-gray-800 font-semibold">
          {Author?.user?.displayName} -
        </h4>
        <span className=" after:text-red-600 text-gray-500 text-xs">Admin</span>
      </div>
    </Link>
  );
}

export default ProfileActionBar;
