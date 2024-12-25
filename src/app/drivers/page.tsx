"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type Driver = {
  id: number
  name: string
  phone: string
  license_number: string
  status: "aktif" | "tidak aktif" | "dalam perjalanan"
}

const dummyDrivers: Driver[] = [
  { id: 1, name: "Budi Santoso", phone: "0812-3456-7890", license_number: "B 1234 ABC", status: "aktif" },
  { id: 2, name: "Siti Rahayu", phone: "0813-2345-6789", license_number: "B 2345 BCD", status: "dalam perjalanan" },
  { id: 3, name: "Ahmad Hidayat", phone: "0814-3456-7890", license_number: "B 3456 CDE", status: "tidak aktif" },
  { id: 4, name: "Rina Wulandari", phone: "0815-4567-8901", license_number: "B 4567 DEF", status: "aktif" },
  { id: 5, name: "Dedi Kurniawan", phone: "0816-5678-9012", license_number: "B 5678 EFG", status: "aktif" },
  { id: 6, name: "Lina Susanti", phone: "0817-6789-0123", license_number: "B 6789 FGH", status: "dalam perjalanan" },
  { id: 7, name: "Agus Setiawan", phone: "0818-7890-1234", license_number: "B 7890 GHI", status: "tidak aktif" },
  { id: 8, name: "Maya Indah", phone: "0819-8901-2345", license_number: "B 8901 HIJ", status: "aktif" },
  { id: 9, name: "Rudi Hartono", phone: "0820-9012-3456", license_number: "B 9012 IJK", status: "dalam perjalanan" },
  { id: 10, name: "Dewi Safitri", phone: "0821-0123-4567", license_number: "B 0123 JKL", status: "aktif" },
]

export default function Drivers() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDrivers = dummyDrivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.license_number.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Pengemudi</h1>
      <Input
        placeholder="Cari pengemudi berdasarkan nama atau nomor SIM..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Telepon</TableHead>
            <TableHead>Nomor SIM</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDrivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.id}</TableCell>
              <TableCell className="font-medium">{driver.name}</TableCell>
              <TableCell>{driver.phone}</TableCell>
              <TableCell>{driver.license_number}</TableCell>
              <TableCell>
                <Badge 
                  className={
                    driver.status === "aktif" ? "bg-green-500" : 
                    driver.status === "dalam perjalanan" ? "bg-[#2F5296]" : "bg-red-500"
                  }
                >
                  {driver.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

