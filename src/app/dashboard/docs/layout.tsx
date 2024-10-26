import React from 'react'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex flex-col mx-8 rounded-md">
        {
        children
        }
    </div>
  )
}

export default layout