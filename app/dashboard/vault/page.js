import Totaltripscard from '@/app/components/Totaltripscard'
import { IoIosRocket } from "react-icons/io";
import { FaCity } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdAirlines } from "react-icons/md";




import React from 'react'
import Datatable from '@/app/components/Datatable';
import { MD } from 'country-flag-icons/react/3x2';


// export default async function findUserTrips() {
//   const url = "http://localhost:8080/find/trips"
//   let dataFromFetch = [];
  
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({ "email": "alice.johnson@example.com" }),
//       credentials: 'include',
//       cache: 'no-store'
//     })
    
//     console.log("Response status:", response.status);
//     console.log("Response headers:", Object.fromEntries(response.headers));
    
//     // Read response body for both success and error
//     const responseText = await response.text();
//     console.log("Response body:", responseText);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}, body: ${responseText}`);
//     }
    
//     // Parse the text as JSON
//     dataFromFetch = JSON.parse(responseText);
//     console.log("Parsed data:", dataFromFetch);
//   } catch (err) {
//     console.error("Error fetching trips data:", err);
//     error = err.message;
//   }

//   if (error) {
//     return <div className="text-red-500 p-4">Error: {error}</div>;
//   }

//   return (
//     <div className="w-full min-h-screen text-white relative overflow-hidden">
//       <div className="relative overflow-hidden p-4 pt-16 flex flex-col gap-8">
//         <div className="flex items-stretch justify-center gap-4 flex-wrap">
//           <Totaltripscard title={"Total Trips Completed"} desc={"25"} icon={IoIosRocket} />
//           <Totaltripscard title={"Most Visited City"} desc={"Dallas"} icon={FaCity} />
//           <Totaltripscard title={"Most Trips In A Single Year"} desc={"12"} icon={FaGlobeAmericas} />
//           <Totaltripscard title={"Most Travelled Airline"} desc={"American"} icon={MdAirlines} />
//         </div>
//         <div className="flex justify-center items-center gap-2">
//           <Button className={"cursor-pointer"}>SHOW DATA</Button>
//         </div>
//         <div className="w-full">
//           <Datatable userTrips={dataFromFetch} /> 
//         </div>
//       </div>
//     </div>
//   )
// }

export default async function page() {
  const url = "http://localhost:8080/find/trips";
    let dataFromFetch = [];
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: "alice.johnson@example.com" }),
        cache: 'no-store'
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      dataFromFetch = await response.json();
      console.log("Fetched data:", dataFromFetch);
    } catch (err) {
      console.error("Error fetching trips data:", err);
    }




  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">
      <div className="relative overflow-hidden p-4 pt-16 flex flex-col gap-8">
        <div className="flex items-stretch justify-center gap-4 flex-wrap">
          <Totaltripscard 
            title={"Total Trips Completed"} 
            desc={dataFromFetch[0] && dataFromFetch[0].length ? dataFromFetch[0].length.toString() : "0"} 
            icon={IoIosRocket} 
          />
          <Totaltripscard title={"Most Visited City"} desc={dataFromFetch[2].cityName} icon={FaCity} />
          <Totaltripscard title={"Most Trips In A Single Year"} desc={dataFromFetch[3].count} icon={FaGlobeAmericas} />
          <Totaltripscard title={"Most Travelled Airline"} desc={dataFromFetch[1].airline} icon={MdAirlines} />
        </div>
        <div className="flex justify-center items-center gap-2">
        </div>
        <div className="w-full">
          <Datatable userTrips={dataFromFetch[0]} />
        </div>
      </div>
    </div>
  )
}