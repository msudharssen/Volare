import React from 'react'
import Leftcard from './Leftcard'
import Middlecard from './Middlecard';
import Rightcard from './Rightcard';
import { Button } from '@/components/ui/button';

// export default function Flightdata(props) {
  
//     if (props.data && props.data.length >= 10){
//   return (
//     <>
//     <div className="flex border-sky-400 place-content-center">
//     <Leftcard data={props.data}></Leftcard>
//     <Middlecard data={props.data}></Middlecard>
//     <Rightcard data={props.data}></Rightcard>
//     </div>
//     </>
//   )
//   }
// }

export default function Flightdata({ data }) {
  if (data) {
    return (
      <>
        <div className="flex flex-col items-center gap-4">
          <div className='flex gap-4'>
          <Leftcard data={data} />
          <Middlecard data={data} />
          <Rightcard data={data} />
          </div>
          <Button className="cursor-pointer hover:bg-amber-500 hover:text-black">Add To Valut</Button>
        </div>
      </>
    )
  } else {
    return null; // or return a loading/empty state
  }
}
