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

type Taxi = {
  id: number
  plat_nomor: string
  model: string
  tahun: string
  status: "tersedia" | "digunakan" | "perbaikan"
  id_pengemudi: number | null
  area: string
}

const dummyTaxis: Taxi[] = [
  { id: 1, plat_nomor: "B 1234 ABC", model: "Toyota Avanza", tahun: "2020", status: "tersedia", id_pengemudi: null, area: "Jakarta Pusat" },
  { id: 2, plat_nomor: "B 2345 BCD", model: "Honda Brio", tahun: "2021", status: "digunakan", id_pengemudi: 2, area: "Jakarta Selatan" },
  { id: 3, plat_nomor: "B 3456 CDE", model: "Daihatsu Xenia", tahun: "2019", status: "perbaikan", id_pengemudi: null, area: "Jakarta Barat" },
  { id: 4, plat_nomor: "B 4567 DEF", model: "Suzuki Ertiga", tahun: "2022", status: "tersedia", id_pengemudi: null, area: "Jakarta Timur" },
  { id: 5, plat_nomor: "B 5678 EFG", model: "Mitsubishi Xpander", tahun: "2020", status: "digunakan", id_pengemudi: 5, area: "Jakarta Utara" },
  { id: 6, plat_nomor: "B 6789 FGH", model: "Toyota Innova", tahun: "2021", status: "tersedia", id_pengemudi: null, area: "Tangerang" },
  { id: 7, plat_nomor: "B 7890 GHI", model: "Honda Mobilio", tahun: "2019", status: "perbaikan", id_pengemudi: null, area: "Bekasi" },
  { id: 8, plat_nomor: "B 8901 HIJ", model: "Daihatsu Sigra", tahun: "2022", status: "digunakan", id_pengemudi: 8, area: "Depok" },
  { id: 9, plat_nomor: "B 9012 IJK", model: "Suzuki Ignis", tahun: "2020", status: "tersedia", id_pengemudi: null, area: "Bogor" },
  { id: 10, plat_nomor: "B 0123 JKL", model: "Toyota Calya", tahun: "2021", status: "digunakan", id_pengemudi: 10, area: "Bandung" },
]

export default function Taxis() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTaxis = dummyTaxis.filter((taxi) =>
    taxi.plat_nomor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    taxi.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    taxi.area.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Taksi</h1>
      <Input
        placeholder="Cari taksi berdasarkan plat nomor, model, atau area..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Plat Nomor</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Tahun</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>ID Pengemudi</TableHead>
            <TableHead>Area</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTaxis.map((taxi) => (
            <TableRow key={taxi.id}>
              <TableCell>{taxi.id}</TableCell>
              <TableCell className="font-medium">{taxi.plat_nomor}</TableCell>
              <TableCell>{taxi.model}</TableCell>
              <TableCell>{taxi.tahun}</TableCell>
              <TableCell>
                <Badge 
                  className={
                    taxi.status === "tersedia" ? "bg-green-500" : 
                    taxi.status === "digunakan" ? "bg-[#2F5296]" : "bg-red-500"
                  }
                >
                  {taxi.status}
                </Badge>
              </TableCell>
              <TableCell>{taxi.id_pengemudi || "N/A"}</TableCell>
              <TableCell>{taxi.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

