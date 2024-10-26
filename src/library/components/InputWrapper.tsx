import React from 'react'
import { Label } from "@radix-ui/react-label";

function InputWrapper({
    label,
    children,
    p,
  }: Readonly<{
    label?:string;
    p?:string;
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex flex-col gap-2">
    <Label className="mx-2 after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold text-sm">
     {label}
    </Label>
    {
    children
    }
    <p className="mx-2 text-gray-400 text-xs">
      {p}
    </p>
  </div>
  )
}
export default InputWrapper
