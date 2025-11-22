import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Appsidebar from "../components/Appsidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Appsidebar />
      <main>
        <SidebarTrigger className={"cursor-pointer"} />
        {children}
      </main>
    </SidebarProvider>
  )
}