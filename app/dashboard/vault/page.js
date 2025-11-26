import Totaltripscard from '@/app/components/Totaltripscard'
import { IoIosRocket } from "react-icons/io";
import { FaCity } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { MdAirlines } from "react-icons/md";




import React from 'react'
import Datatable from '@/app/components/Datatable';
import { MD } from 'country-flag-icons/react/3x2';

export default function Page() {
  return (
    <div className="w-full min-h-screen text-white relative overflow-hidden">
    <div className="relative overflow-hidden p-4 pt-16 flex flex-col gap-8">
      <div className="flex items-stretch justify-center gap-4 flex-wrap">
        <Totaltripscard title={"Total Trips Completed"} desc={"25"} icon={IoIosRocket} />
        <Totaltripscard title={"Most Visited City"} desc={"Dallas"} icon={FaCity} />
        <Totaltripscard title={"Most Trips In A Single Year"} desc={"12"} icon={FaGlobeAmericas} />
        <Totaltripscard title={"Most Travelled Airline"} desc={"American"} icon={MdAirlines} />
      </div>
      <div className="w-full">
        <Datatable /> 
      </div>
    </div>
  </div>

    

  )
}
