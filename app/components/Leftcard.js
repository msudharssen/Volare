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
    <Card className="w-[300px] border-orange-400 h-[360px] mt-10 bg-black">
      <CardHeader>
        <CardTitle className="text-white self-center w=[250px]">DEPARTURE</CardTitle>
        <CardDescription className="self-center text-white">{data.scheduled_out.split('T')[0]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-5xl mt-1">{data.origin.code_iata}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-2xl mt-1">{data.origin.city}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-1xl mt-1">{data.origin.name}</p>
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
    return <div>HELLO</div>
}
}
// export default function Flightdata({ data }) {
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

