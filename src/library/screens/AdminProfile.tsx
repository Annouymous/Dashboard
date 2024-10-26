import React from "react";
import Loading from "../components/Loading";
import UpdateProfileIcon from "../components/Admin/UpdateProfileIcon";
import { User } from "firebase/auth";
import HeadFragment from "../components/HeadFragment";

export default function AdminProfile({
  defaultName,
  user,
  DisplayName,
  Email,
  Password,
  LoadingStatus,
  ConfirmPassword,
  onDisplayNameChange,
  onEmailChange,
  onConfirmPasswordChange,
  onPasswordChange,
  ChangePassword,
  onIconChange,
  handleDisplayInformation
}: Readonly<{
  defaultName:string;
  user:User;
  DisplayName:string;
  Email:string;
  LoadingStatus:boolean,
  Password:string;
  ConfirmPassword:string;
  onDisplayNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ChangePassword?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDisplayInformation?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onIconChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}>) {
  return (
    <div>
      <div className="space-y-12">
        <UpdateProfileIcon user={user} onIconChange={onIconChange} LoadingStatus={LoadingStatus}/>
        <div>
          <HeadFragment des=" Use a permanent address where you can receive mail." title="Personal Information" />
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Display Name
              </label>
              <div className="mt-2">
                <input
                  defaultValue={defaultName}
                  value={DisplayName}
                  onChange={onDisplayNameChange}
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  disabled={true}
                  onChange={onEmailChange}
                  id="email"
                  value={Email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="disabled:text-gray-500 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleDisplayInformation}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Changes
          </button>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <HeadFragment des=" Use a permanent address where you can receive mail." title="Update Password" />
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password (Min-mum 6 digit)
              </label>
              <div className="mt-2">
                <input
                  value={Password}
                  minLength={6}
                  onChange={onPasswordChange}
                  type="password"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  value={ConfirmPassword}
                  minLength={6}
                  onChange={onConfirmPasswordChange}
                  type="text"
                  className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          disabled={Password.length <= 5 }
          onClick={ChangePassword}
          className="disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-slate-300 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {
            LoadingStatus && <Loading/>
          }
          Update Password
        </button>
      </div>
    </div>
  );
}
