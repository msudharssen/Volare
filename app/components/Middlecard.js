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
import { Progress } from "@/components/ui/progress"


export default function Middlecard({data}){

    if (data){
  return (
    <Card className="w-[450px] border-orange-400 mt-10 h-[360px] bg-black">
  <CardHeader className="h-50 bg-black text-center">
    <CardTitle className="text-slate-50">{data.ident_iata}</CardTitle>
    <CardDescription className={"text-white"}>{data.status}</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col items-center justify-center px-8">
    <Progress 
      className="w-full bg-amber-500 foreground-white" 
      value={50}
    />
  </CardContent>
</Card>
  )
    }
    else{
        return <div>HELLO</div>
    }
}

// export default function Middlecard({ data }) {
//   if (data) {
//     return (
//       <Card className="w-[450px] border-orange-400 mt-10 h-[360px] bg-black">
//         <CardHeader className="h-50 bg-black">
//           <CardTitle className="text-slate-50 self-center">
//             {data.ident_iata || data.ident}
//           </CardTitle>
//           <CardDescription className="self-center">
//             {data.operator_iata || data.operator} - Flight {data.flight_number}
//           </CardDescription>
//         </CardHeader>
        
//         <CardContent className="flex flex-col gap-4">
//           {/* Flight Progress */}
//           <div className="mt-4">
//             <p className="text-slate-50 text-center mb-2">
//               Flight Progress: {data.progress_percent}%
//             </p>
//             <Progress value={data.progress_percent} />
//           </div>

//           {/* Status */}
//           <div className="text-center">
//             <p className="text-slate-50 text-sm">{data.status}</p>
//           </div>

//           {/* Route Info */}
//           <div className="text-center space-y-1">
//             <p className="text-slate-400 text-xs">
//               Distance: {data.route_distance} nm
//             </p>
//             <p className="text-slate-400 text-xs">
//               Aircraft: {data.aircraft_type}
//             </p>
//             <p className="text-slate-400 text-xs">
//               Altitude: {data.filed_altitude}00 ft
//             </p>
//           </div>
//         </CardContent>
//       </Card>
//     )
//   } else {
//     return <div className="text-white">No flight data available</div>
//   }
// }

