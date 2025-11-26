import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { CA } from 'country-flag-icons/react/3x2'



export default function Totaltripscard(props) {
    const Icon = props.icon;

  return (
    <Card className="flex border-b-green-500  flex-1 min-w-[220px] max-w-[280px] flex-col justify-between border border-gray-200 bg-white px-4 py-5 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg">
  <CardHeader className="p-0">
    <CardDescription className="flex text-xl justify-center items-center text-center font-medium  text-gray-500">
      {props.title}
    </CardDescription>
    <CardTitle className="text-3xl mt-2 font-bold flex gap-2 items-center justify-center tabular-nums text-gray-900">
      {props.desc} 
      <Icon size={28} className="text-gray-400" />
    </CardTitle>
  </CardHeader>
</Card>
  )
}
