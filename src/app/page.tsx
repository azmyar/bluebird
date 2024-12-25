import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Car, UserCheck, CarFront } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Selamat Datang di Dashboard Admin Bluebird</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-t-4 border-t-[#2F5296]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pengemudi</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#2F5296]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Taksi</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">180</div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#2F5296]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pengemudi Aktif</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200</div>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-[#2F5296]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taksi Aktif</CardTitle>
            <CarFront className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

