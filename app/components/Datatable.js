'use client'
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
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';


export default function Datatable({userTrips}) {
  const trips = userTrips;
  const router = useRouter();

  async function handleRemoveTrip(tripId) {
    const url = `http://localhost:8080/find/removetrip/${tripId}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      

      console.log("Response:", response);
      router.refresh();
    } catch (err) {
      console.error("Error fetching trips data:", err);
    }
  }
  return (
    <Table className="bg-white border shadow-md overflow-y-auto">
  <TableCaption>All Saved Trips</TableCaption>
  <TableHeader className="bg-gray-400 scorll-auto text-semibold">
    <TableRow>
      <TableHead>Description</TableHead>
      <TableHead>Airline</TableHead>
      <TableHead>From</TableHead>
      <TableHead>Departure Date</TableHead>
      <TableHead>Departure Time</TableHead>
      <TableHead>To</TableHead>
      <TableHead>Arrival Date</TableHead>
      <TableHead>Arrival Time</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {trips && trips.map((trip, index) => (
      <TableRow key={trip.title+index}>
        <TableCell className="text-black">{trip.title}</TableCell>
        <TableCell className="text-black">{trip.airline}</TableCell>
        <TableCell className={"text-black"}>{trip.departure_city}</TableCell>
        <TableCell className={"text-black"}>{trip.departure}</TableCell>
        <TableCell className="text-black">{trip.departure_time.split(":")[0]+":"+trip.departure_time.split(":")[0]}</TableCell>
        <TableCell className="text-black">{trip.arrival_city}</TableCell>
        <TableCell className={"text-black"}>{trip.arrival_date}</TableCell>
        <TableCell className={"text-black"}>{trip.arrival_time.split(":")[0]+":"+trip.arrival_time.split(":")[0]}</TableCell>
        <TableCell className="size-min"><Button className="text-red-500 underline cursor-pointer"variant="link" onClick={()=>handleRemoveTrip(trip.id)}>Remove</Button></TableCell>
      </TableRow>
    ))}
    
  </TableBody>
</Table>
  )
}
