"use client";
import React from "react";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

type DocItem = {
  name: string;
  href: string;
  ref?: string;
};

function DisclosureFragment({
  children,
  Docs = [],
  item,
}: Readonly<{
  children: React.ReactNode;
  Docs?: DocItem[]; 
  item: string;
}>) {
  const pathname = usePathname();
  return (
    <Disclosure as="div" defaultOpen={false}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={`${
              open && "bg-sky-100"
            } min-w-48  hover:bg-sky-100 px-5 py-2 rounded-md group flex w-full items-center justify-between`}
          >
            <div className="items-center flex flex-row gap-3">
              
              {/* <SiDocsify className="fill-slate-500 group-data-[hover]:fill-sky-500/80" /> */}
              {children}
              <span
                className={`${
                  open && "text-sky-500"
                } font-medium text-base text-gray-700  group-data-[hover]:text-sky-500`}
              >
                {item}
              </span>
            </div>
            <ChevronDownIcon
              className={` ${
                open && "fill-sky-500"
              } size-6 fill-slate-500 group-data-[hover]:fill-sky-500/50 group-data-[open]:rotate-180`}
            />
          </DisclosureButton>
          <DisclosurePanel
            transition
            className=" pl-10 py-3 flex flex-col gap-3 duration-500 ease-in-out transform-gpu data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-sm/5 text-white/50"
          >
            {Docs.map((item,index) => {
              return (
                <Link key={index} href={item.ref ? { pathname: item.href, query: { editorref: item.ref } } : item.href}>
                  <span className={clsx("hover:text-sky-500/80 text-base font-medium text-gray-500 group-data-[hover]:text-sky-500/80",
                    {
                      'text-sky-500/80': pathname === item.href
                    }
                  )}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default DisclosureFragment;
