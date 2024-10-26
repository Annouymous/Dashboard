import { columns } from '@/library/user table/columns'
import { Users } from '@/library/user table/data'
import { DataTable } from '@/library/user table/data-table'
import React from 'react'

async function page() {
  const response = await fetch(`http://localhost:3000/api/users`, { cache: 'no-store' });
  const result = await response.json();
  return (
    <div className="flex flex-col p-5 bg-white shadow-sm m-3 rounded-md">
      <DataTable columns={columns} data={result?.users}/>
    </div>
  )
}

export default page