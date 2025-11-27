import React, { useState } from 'react'
import Leftcard from './Leftcard'
import Middlecard from './Middlecard';
import Rightcard from './Rightcard';
import { Button } from '@/components/ui/button';
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

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
  
  const [title, setTitle] = useState("");

  

  async function addTrips() {
    const url = "http://localhost:8080/find/addtrip";
  
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          title: `${title}`,
          dDate: data ? data.scheduled_out.split('T')[0] : "",
          dCode: data ? data.origin.code_iata : "",
          dCity: data ? data.origin.city : "",
          dAirport: data ? data.origin.name : "",
          dTime: data ? data.scheduled_out.split('T')[1].split('Z')[0] : "", // Removed ' UTC'
          dTimezone: data ? data.origin.timezone : "",
          aDate: data ? data.scheduled_in.split('T')[0] : "",
          aCode: data ? data.destination.code_iata : "",
          aCity: data ? data.destination.city : "",
          aAirport: data ? data.destination.name : "",
          aTime: data ? data.scheduled_in.split('T')[1].split('Z')[0] : "", // Removed ' UTC'
          aTimezone: data ? data.destination.timezone : "",
          status: data ? data.status : "",
          airline: data ? data.operator_iata : "",
          email: "alice.johnson@example.com"
        }),
      });
  
      console.log("Response status:", response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.status
      console.log("Result:", result);
      
    } catch (err) {
      console.error("Error adding trip:", err);
    }
  }

  if (data) {
    return (
      <>
        <div className="flex flex-col items-center gap-4">
          <div className='flex'>
          <Leftcard data={data} />
          <Middlecard data={data} />
          <Rightcard data={data} />
          </div>
          <Dialog className="flex justify-center items-center">
              <DialogTrigger className="border border-black">Add To Vault</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Save This Trip to Your Vault</DialogTitle>
                  <DialogDescription>
                    This trip can be removed at any time from your Vault
                  </DialogDescription>
                </DialogHeader>
                <Input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="Name Your Trip"></Input>
                <Button onClick={addTrips} className="hover:bg-green-500 hover:text-black hover:cursor-pointer hover:border-black">Add To Vault</Button>
              </DialogContent>
            </Dialog>
        </div>
      </>
    )
  } else {
    return (
      <LoadingIndicator type="line-simple" size="md" label="Loading..." />
    ) 
  }
}
