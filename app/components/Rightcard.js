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
    <Card className="w-[300px] border-orange-400 h-[360px] mt-10 bg-black">
      <CardHeader>
        <CardTitle className="text-slate-50 self-center">ARRIVAL</CardTitle>
        <CardDescription className="self-center text-white">{data.scheduled_out.split('T')[0]}</CardDescription>
      </CardHeader>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-5xl mt-1">{data.destination.code_iata}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-2xl mt-1">{data.destination.city}</p>
      </CardContent>
      <CardContent className="flex place-content-evenly">
      <p className="text-slate-50 text-1xl mt-1">{data.destination.name}</p>
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

