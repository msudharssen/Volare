import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Leftcard({data}) {
    if (data){
  return (
    <Card className="w-[300px] border-slate-700 border-l border-t border-b h-[360px] mt-10 bg-white">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-black  w=[250px]">DEPARTURE</CardTitle>
        <CardDescription className=" text-black">{data.scheduled_out.split('T')[0]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-5xl mt-1">{data.origin.code_iata}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-2xl mt-1">{data.origin.city}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-1xl mt-1">{data.origin.name}</p>
      </CardContent>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">{data.scheduled_out.split('T')[1].split('Z')[0] +' UTC'}</CardDescription>
      </CardFooter>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">Timezone: {data.origin.timezone}</CardDescription>
      </CardFooter>
    </Card>
  )
 }
 else{
    return <div>No Data</div>
}
}

//   if (data) {
//     return (
//       <Card className="w-[300px] border-orange-400 mt-10">
//         <CardHeader>
//           <CardTitle className="text-slate-50 self-center w-[250px]">
//             {data.ident_iata || data.ident}
//           </CardTitle>
//           <CardDescription className="self-center">{data.status}</CardDescription>
//         </CardHeader>
        
//         <CardContent className="flex flex-col gap-4">
//           {/* Origin Info */}
//           <div className="text-center">
//             <p className="text-slate-50 text-5xl">{data.origin.code_iata}</p>
//             <p className="text-slate-50 text-sm">{data.origin.city}</p>
//             <p className="text-slate-400 text-xs">{data.origin.name}</p>
//           </div>

//           {/* Flight Details */}
//           <div className="text-center">
//             <p className="text-slate-50 text-2xl">→</p>
//           </div>

//           {/* Destination Info */}
//           <div className="text-center">
//             <p className="text-slate-50 text-5xl">{data.destination.code_iata}</p>
//             <p className="text-slate-50 text-sm">{data.destination.city}</p>
//             <p className="text-slate-400 text-xs">{data.destination.name}</p>
//           </div>

//           {/* Times */}
//           <div className="text-center space-y-1">
//             <p className="text-slate-50 text-sm">
//               Departed: {data.actual_out ? new Date(data.actual_out).toLocaleTimeString() : 'N/A'}
//             </p>
//             <p className="text-slate-50 text-sm">
//               Arrived: {data.actual_in ? new Date(data.actual_in).toLocaleTimeString() : 'N/A'}
//             </p>
//           </div>
//         </CardContent>

//         <CardFooter className="flex flex-col gap-2">
//           <CardDescription>Aircraft: {data.aircraft_type}</CardDescription>
//           <CardDescription>Registration: {data.registration}</CardDescription>
//           <CardDescription>Terminal: {data.terminal_destination || 'N/A'}</CardDescription>
//         </CardFooter>
//       </Card>
//     )
//   } else {
//     return <div className="text-white">No flight data available</div>
//   }
// }
// export default function Leftcard({ data }) {
//   if (!data) {
//     return (
//       <div className="w-[320px] h-[400px] mt-10 flex items-center justify-center text-gray-300">
//         No Data
//       </div>
//     );
//   }

//   const time = data.scheduled_out?.split("T")[1]?.split("Z")[0] || "";
//   const date = data.scheduled_out?.split("T")[0] || "";

//   return (
//     <Card className="w-[320px] mt-10 bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden">
      
//       {/* Top accent */}
//       <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />

//       <div className="flex flex-col items-center px-8 pt-8 pb-10">
        
//         {/* Label */}
//         <div className="flex items-center gap-2 mb-10">
//           <div className="w-2 h-2 rounded-full bg-blue-500" />
//           <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">
//             Departure
//           </span>
//         </div>

//         {/* IATA Code */}
//         <p className="text-gray-900 text-7xl font-extralight tracking-tight">
//           {data.origin.code_iata}
//         </p>

//         {/* City & Airport */}
//         <p className="text-gray-800 text-lg font-medium mt-6">
//           {data.origin.city}
//         </p>
//         <p className="text-gray-400 text-sm mt-1 text-center leading-snug max-w-[240px]">
//           {data.origin.name}
//         </p>

//         {/* Divider */}
//         <div className="w-12 h-px bg-gray-200 my-8" />

//         {/* Time & Date */}
//         <p className="text-gray-900 text-2xl font-medium tabular-nums">
//           {time}
//         </p>
//         <div className="flex items-center gap-2 mt-2">
//           <span className="text-gray-400 text-sm">{date}</span>
//           <span className="text-gray-300">•</span>
//           <span className="text-gray-400 text-sm">UTC</span>
//         </div>

//         {/* Timezone badge */}
//         <div className="mt-6 px-3 py-1 bg-gray-50 rounded-full">
//           <span className="text-gray-500 text-xs">
//             {data.origin.timezone}
//           </span>
//         </div>

//       </div>
//     </Card>
//   );
// }
// Leftcard.jsx


