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
  return (
    <Card className="w-[350px] bg-zinc-800 border-black">
  <CardHeader>
    <CardTitle className="text-center text-white">Log in</CardTitle>
    <CardDescription className="text-center text-white">Enter Your Volare Account via Google </CardDescription>
  </CardHeader>
  <CardContent>
   <Button variant="default" className="w-full mb-4 hover:bg-white hover:text-black cursor-pointer">Sign In <FcGoogle/></Button>
  </CardContent>
  <CardFooter>
  <p className="text-muted-foreground text-sm text-center text-white">By Signing in, <a href="/" className="underline">You Agree to All Terms and Conditions</a> </p>
  </CardFooter>
</Card>
  )
}