"use client";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import { Users } from "./data";
import Image from "next/image";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@headlessui/react";
import { DeleteFaqQuestions } from "@/library/Firebase/Services";

interface Document {
  id: string;
  question: string;
  answer: string;
  createdAt:string;
  pid:string
}

export const columns: ColumnDef<Document>[] = [
  {
    accessorKey: "question",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const iD = row.getValue("question");
      return <span className="text-gray-600 font-medium">{iD}</span>;
    },
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const iD = row.getValue("id");
      return <span className="text-gray-500 font-medium">#{iD}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const time = row.getValue("createdAt");
      const pid = row.original.pid;
      let F
      if (time && typeof time.toDate === 'function') {
        const date = time.toDate();
        F = moment(date).calendar(); // Format using moment
      } else {
        F = moment().calendar();
      }
      return (
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{F}</span>
          <Button onClick={()=>DeleteFaqQuestions(pid)} variant='destructive'>Delete</Button>
        </div>
      );
    },
  },
];
