"use client"
import moment from 'moment';
import { ColumnDef } from "@tanstack/react-table"
import { Users } from "./data"
import Image from "next/image"
import { MoreHorizontal, MoreVertical } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Users>[] = [
    {
      accessorKey: "photoUrl",
      header: "Profile",
      cell: ({ row }) => {
        return (
          row ?
          <Image src={row.getValue('photoUrl')} alt="Image" width={35} height={35} className="object-cover rounded-xl object-center size-[35px]"/>
          :
          <span  className="bg-gray-400 rounded-full size-[35px]"/>
        )
      },
    },
    {
      accessorKey: "displayName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nickname
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )},
      cell: ({ row }) => {
        const iD =  row.getValue('displayName')
        return <span  className="text-gray-600 font-medium">{iD}</span>
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )},
      cell: ({ row }) => {
        const iD =  row.getValue('email')
        return <span  className="text-gray-600 font-medium">{iD}</span>
      },
    },
    {
        accessorKey: "uid",
        header: "ID",
        cell: ({ row }) => {
          const iD =  row.getValue('uid')
          return <span  className="text-gray-500 font-medium">#{iD}</span>
        },
    },
    {
        accessorKey: "rawId",
        header: "Status",
        cell: ({ row }) => {
          const isEmailVerified =  row.getValue('isEmailVerified')
          return (
            isEmailVerified ? 
            <span  className="font-semibold text-[10px] bg-red-600/15 px-3 py-2 rounded-lg text-red-600/50">
              verified
            </span>
            :
            <span  className="font-semibold text-[10px] bg-sky-600/15 px-3 py-2 rounded-lg text-sky-600/50">
              Unverified
            </span>
          )
        },
    },
    {
      accessorKey: "createdAt",
      header: "Time",
      cell: ({ row }) => {
        const time =  row.getValue('createdAt')
        const F = moment(time).calendar()
        return (
          <div className='flex items-center justify-between'>
          <span  className="text-gray-500">{F}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(row.original)}
                >
                  Copy User Info
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View User details</DropdownMenuItem>
                <DropdownMenuItem className='text-red-600 data-[hover]:text-green-500 hover:text-red-500 cursor-pointer'>Delete user</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        )
      },
  },
  ]