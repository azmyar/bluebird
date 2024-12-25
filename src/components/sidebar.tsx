"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Car } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="pb-12 w-64 bg-[#2F5296] text-white">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin Bluebird
          </h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/" ? "secondary" : "ghost"} className={` ${pathname === "/" ? "text-[#2F5296]" : "text-white"} w-full justify-start  hover:text-[#2F5296] hover:bg-white`}>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Beranda
              </Link>
            </Button>
            <Button asChild variant={pathname === "/drivers" ? "secondary" : "ghost"} className={` ${pathname === "/drivers" ? "text-[#2F5296]" : "text-white"} w-full justify-start  hover:text-[#2F5296] hover:bg-white`}>
              <Link href="/drivers">
                <Users className="mr-2 h-4 w-4" />
                Pengemudi
              </Link>
            </Button>
            <Button asChild variant={pathname === "/taxis" ? "secondary" : "ghost"} className={` ${pathname === "/taxis" ? "text-[#2F5296]" : "text-white"} w-full justify-start  hover:text-[#2F5296] hover:bg-white`}>
              <Link href="/taxis">
                <Car className="mr-2 h-4 w-4" />
                Taksi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
