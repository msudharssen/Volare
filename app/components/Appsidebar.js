'use client'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar"
import { IoMdAirplane } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { PiVaultBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenu } from "../../components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    { label: "Search Flights", icon: <IoMdAirplane className="text-red-400"></IoMdAirplane>, href: "/dashboard/search" },
    { label: "My Vault", icon: <PiVaultBold className="text-green-500"></PiVaultBold>, href: "/dashboard/vault" },
    { label: "Donate", icon: <FaBitcoin className="text-yellow-400"></FaBitcoin>, href: "/dashboard/donate" },
    { label: "Contact", icon: <MdOutlineMailOutline className="text-blue-400"></MdOutlineMailOutline>, href: "/dashboard/contact" },
    { label: "Sign Out", icon: <IoIosContact className="text-orange-300"></IoIosContact>, href: "/logout" },
]

export default function Appsidebar() {
    const pathname = usePathname();
  return (
    <Sidebar>
        <SidebarHeader className="items-center text-2xl font-bold">
        <span className="flex items-center gap-2">VOLARE <IoPlanet className="inline"/></span>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
                <SidebarMenu >
                    {items.map(element => (
                        <SidebarMenuItem key={element.label} >
                            <Link key={element.label} href={element.href}>
                            <SidebarMenuButton className={"cursor-pointer"} isActive={pathname === element.href}>
                                {element.icon}
                                {element.label}
                            </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="self-center">2025 © Volare</p>
      </SidebarFooter>
    </Sidebar>
  )
}