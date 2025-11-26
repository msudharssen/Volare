import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export default function Datatable() {
  return (
    <Table className="bg-white border shadow-md scroll-auto">
  <TableCaption>All Saved Trips</TableCaption>
  <TableHeader className="bg-gray-400 scorll-auto text-semibold">
    <TableRow>
      <TableHead>Trip Name</TableHead>
      <TableHead>Airline</TableHead>
      <TableHead>Departure City</TableHead>
      <TableHead>Departure Date</TableHead>
      <TableHead>Departure Time</TableHead>
      <TableHead>Arrival City</TableHead>
      <TableHead>Arrival Date</TableHead>
      <TableHead>Arrival Time</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-black">Vegas Weekend Trip</TableCell>
      <TableCell className="text-black">American</TableCell>
      <TableCell className={"text-black"}>Toronto, CA</TableCell>
      <TableCell className={"text-black"}>2025-11-01</TableCell>
      <TableCell className="text-black">10:00AM ET</TableCell>
      <TableCell className="text-black">Dallas, USA</TableCell>
      <TableCell className={"text-black"}>2025-11-01</TableCell>
      <TableCell className={"text-black"}>11:00AM MT</TableCell>
      <TableCell className="size-min hover:cursor-pointer text-red-400 underline  bg-white">Remove</TableCell>
    </TableRow>
  </TableBody>
</Table>
  )
}
