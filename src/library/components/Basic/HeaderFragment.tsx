import React, { useContext } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../../../public/omgs-logo-min.webp";
import Image from 'next/image';
import { Auth } from '@/library/Firebase/config';
import { signOut } from '@/library/Firebase/Services';


function HeaderFragment({
  ProfileIconUrl,
}: Readonly<{
  ProfileIconUrl: string;
}>) {
  return (
    <header className="z-10 fixed w-full bg-white px-5 flex items-center min-h-12 h-16 border-b-[1px] border-b-gray-300">
              <div className="flex w-full">
                <Image priority className="my-5 w-44 h-auto self-center" alt="logo" src={Logo} />
              </div>
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <div className='rounded-full size-[40px] bg-gray-300'>
                      {
                        ProfileIconUrl &&  <Image className="rounded-full size-[40px] " alt="Icon" width={40} height={40} src={ProfileIconUrl}/>
                      }
                    </div>
                    
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="/dashboard/admin"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={()=>signOut()}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
          </header>
  )
}

export default HeaderFragment