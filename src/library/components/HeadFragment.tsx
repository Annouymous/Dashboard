import { Button } from '@/components/ui/button';
import React from 'react'

function HeadFragment({
    title,
    des,
    Label,
    onClick,
  }: Readonly<{
    title?: string;
    des?:string;
    Label?:string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }>)  {
  return (
    <div className="flex justify-between my-5 mb-10">
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        {title}
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        {des}
      </p> 
    </div>
    {
      Label &&
      <Button onClick={onClick} className='bg-sky-600 hover:bg-sky-700 hover:text-gray-100'>{Label}</Button>
    }
  </div>
  )
}

export default HeadFragment