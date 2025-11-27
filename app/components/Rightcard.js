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

export default function Rightcard({data}) {
    if (data){
  return (
    <div>
    <Card className="w-[300px] border-slate-700 border-t border-r botder-b h-[360px] mt-10 bg-white">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-black-50 ">ARRIVAL</CardTitle>
        <CardDescription className=" text-black">{data.scheduled_out.split('T')[0]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-5xl mt-1">{data.destination.code_iata}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-2xl mt-1">{data.destination.city}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-black-50 text-1xl mt-1">{data.destination.name}</p>
      </CardContent>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">{data.scheduled_in.split('T')[1].split('Z')[0]+' UTC'}</CardDescription>
      </CardFooter>
      <CardFooter className="flex place-content-evenly">
      <CardDescription className="self-center">Timezone: {data.destination.timezone}</CardDescription>
      </CardFooter>
    </Card>
    </div>
  )
    }
    else{
        return <div>HELLO</div>
    }
}

// export default function Rightcard({ data }) {
//   if (data) {
//     return (
//       <div>
//         <Card className="w-[300px] border-orange-400 mt-10">
//           <CardHeader>
//             <CardTitle className="text-slate-50 self-center w-[250px]">ARRIVAL</CardTitle>
//             <CardDescription className="self-center">{data.destination.city}</CardDescription>
//           </CardHeader>
          
//           <CardContent className="flex place-content-evenly">
//             <p className="text-slate-50 text-5xl mt-1">{data.destination.code_iata}</p>
//           </CardContent>
          
//           <CardContent className="flex place-content-evenly">
//             <p className="text-slate-50 text-2xl mt-1">
//               {data.actual_in ? new Date(data.actual_in).toLocaleTimeString() : 'Scheduled'}
//             </p>
//           </CardContent>
          
//           <CardContent className="flex place-content-evenly">
//             <p className="text-slate-50 text-1xl mt-1">{data.destination.name}</p>
//           </CardContent>
          
//           <CardFooter className="flex place-content-evenly">
//             <CardDescription className="self-center">
//               Terminal: {data.terminal_destination || 'N/A'}
//             </CardDescription>
//           </CardFooter>
          
//           <CardFooter className="flex place-content-evenly">
//             <CardDescription className="self-center">
//               Timezone: {data.destination.timezone}
//             </CardDescription>
//           </CardFooter>
          
//           <CardFooter className="flex place-content-evenly">
//             <CardDescription className="self-center">
//               Runway: {data.actual_runway_on || 'N/A'}
//             </CardDescription>
//           </CardFooter>
//         </Card>
//       </div>
//     )
//   } else {
//     return <div className="text-white">No flight data available</div>
//   }
// }

// export default function Rightcard({ data }) {
//   if (!data) {
//     return (
//       <div className="w-[320px] h-[400px] mt-10 flex items-center justify-center text-gray-300">
//         No Data
//       </div>
//     );
//   }

//   const time = data.scheduled_in?.split("T")[1]?.split("Z")[0] || "";
//   const date = data.scheduled_in?.split("T")[0] || "";

//   return (
//     <Card className="w-[320px] mt-10 bg-white border border-gray-100 shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden">
      
//       {/* Top accent */}
//       <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500" />

//       <div className="flex flex-col items-center px-8 pt-8 pb-10">
        
//         {/* Label */}
//         <div className="flex items-center gap-2 mb-10">
//           <div className="w-2 h-2 rounded-full bg-indigo-500" />
//           <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">
//             Arrival
//           </span>
//         </div>

//         {/* IATA Code */}
//         <p className="text-gray-900 text-7xl font-extralight tracking-tight">
//           {data.destination.code_iata}
//         </p>

//         {/* City & Airport */}
//         <p className="text-gray-800 text-lg font-medium mt-6">
//           {data.destination.city}
//         </p>
//         <p className="text-gray-400 text-sm mt-1 text-center leading-snug max-w-[240px]">
//           {data.destination.name}
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
//             {data.destination.timezone}
//           </span>
//         </div>

//       </div>
//     </Card>
//   );
// }

// Rightcard.jsx

