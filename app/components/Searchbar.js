'use client'
import { IoPlanet } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Flightdata from "./Flightdata"
import { Calendar } from "@/components/ui/calendar"
import React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

export default function Searchbar() {
    const [fnum, setFnum] = useState("");
    const [results, setResults] = useState(null);
    const [date, setDate] = useState(new Date())
    


    function getInfo(word){
        setFnum(word);
        console.log(fnum);
    }


    async function sendResult(){
      console.log("=== INSIDE sendResult ===");
      console.log("Date at fetch time:", date);
      console.log("Formatted date:", format(date, "yyyy-MM-dd"));
      console.log("Flight number:", fnum);
      
      try {
          let path = `http://localhost:8080/flight/findflight/${fnum}/${format(date, "yyyy-MM-dd")}`;
          console.log("Full path being fetched:", path);
            const response =  await fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include' 
            }) ;
            let data = await response.json()
            setResults(data);
            console.log(data)
            console.log(format(date, "yyyy-MM-dd"))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    return (
        <div className="w-full min-h-screen  text-black">
          <div className="w-full space-y-8 p-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-stone-700 inline-flex items-center gap-3">
                VOLARE
                <IoPlanet className="text-stone-700 animate-pulse" size={48} />
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3">      
                <Input
                  name="flightNumberInput"
                  type="search"
                  placeholder="Enter Flight Number"
                  className="h-12 flex-1 text-black placeholder:text-gray-500 border-stone-700 bg-white "
                  onChange={(e) => getInfo(e.target.value)}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-12 px-4 bg-white text-black hover:bg-gray-100 border-stone-700 justify-start font-normal min-w-[200px]"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar 
                      mode="single" 
                      selected={date} 
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
                <Button 
                  className="h-12 px-6 cursor-pointer bg-slate-600 text-white hover:bg-white hover:text-black hover:border-black" 
                  onClick={sendResult}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="w-full">
              {results && <Flightdata data={results} />}
            </div>
          </div>
        </div>
      )
}