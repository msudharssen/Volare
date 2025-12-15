import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Appsidebar from "../components/Appsidebar"
import { se } from "date-fns/locale";

export default function Layout({ children }) {
  const [toRedirect, setToRedirect] = React.useState(true);
  async function checkCookie(){
    const res = fetch("http://localhost:8080/api/session/check", {
    method: "GET",
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
  })
  if (res.status === 401) {
    redirect("/login");
  }
  else{
    setToRedirect(false);
  }};

  if (!toRedirect){
  return (
    <SidebarProvider className="border-black">
      <Appsidebar />
      <main className="flex-1 w-full">
        {children}
      </main>
    </SidebarProvider>
  )
  } else {
    return null;
  }
}