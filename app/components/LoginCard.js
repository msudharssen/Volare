'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";


export default function Page() {
  function handleGoogleSignIn() {
    // Implement Google Sign-In logic here
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
    console.log("Google Sign-In clicked");
  }
  return (
    <Card className="w-[350px] bg-zinc-800 border-black">
  <CardHeader>
    <CardTitle className="text-center text-white">Log in</CardTitle>
    <CardDescription className="text-center text-white">Enter Your Volare Account via Google</CardDescription>
  </CardHeader>
  <CardContent>
   <Button onClick={handleGoogleSignIn} variant="default" className="w-full mb-4 hover:bg-white hover:text-black cursor-pointer">Sign In <FcGoogle/></Button>
  </CardContent>
  <CardFooter>
  <p className=" text-sm text-center text-white">By clicking continue, you agree to our <a href="/" className="underline">Terms of Service</a></p>
  </CardFooter>
</Card>
  )
}