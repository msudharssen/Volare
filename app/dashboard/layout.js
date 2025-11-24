import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Appsidebar from "../components/Appsidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider className="border-black">
      <Appsidebar />
      <main className="flex-1 w-full">
        {children}
      </main>
    </SidebarProvider>
  )
}