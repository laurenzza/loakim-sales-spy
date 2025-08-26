import { MetricCard } from "@/components/ui/metric-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Package, 
  Users, 
  Activity,
  Brain,
  BarChart3,
  Download,
  RefreshCw,
  PlayCircle,
  ShoppingCart
} from "lucide-react"

export default function Dashboard() {
  // Sample data based on your dataset structure
  const topProducts = [
    {
      name: "AS DINAMO KIPAS ANGIN MODEL COSMOS,MIYAKO,UMUM-RRT.",
      quantity: 2850,
      sales: "Rp 485,200",
      percentage: "18.2%"
    },
    {
      name: "KAPASITOR POMPA AIR 14 UF 450VAC CAPASITOR BULET",
      quantity: 1245,
      sales: "Rp 312,500",
      percentage: "11.7%"
    },
    {
      name: "bushing boshing bos bearing kipas angin Rrt/umum",
      quantity: 980,
      sales: "Rp 215,600",
      percentage: "8.1%"
    },
    {
      name: "OTOMATIS PM5 PRESSURE SWITCH JETPUMP POMPA AIR",
      quantity: 875,
      sales: "Rp 192,500",
      percentage: "7.2%"
    },
    {
      name: "Sepasang Kopel Konektor Blender Miyako Gigi Gear",
      quantity: 650,
      sales: "Rp 156,000",
      percentage: "5.8%"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sales Prediction Dashboard</h1>
          <p className="text-muted-foreground">
            Analisis perbandingan algoritma ARIMA dan LSTM untuk prediksi penjualan Toko Loa Kim Jong
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Update Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Penjualan"
          value="Rp 3.5M"
          description="32,570 transaksi"
          icon={<DollarSign className="w-5 h-5" />}
          variant="primary"
          trend={{ value: 12.5, label: "vs bulan lalu" }}
        />
        <MetricCard
          title="Rata-rata Harian"
          value="Rp 69,016"
          description="Per hari"
          icon={<Activity className="w-5 h-5" />}
          variant="success"
          trend={{ value: 8.2, label: "minggu ini" }}
        />
        <MetricCard
          title="Produk Terjual"
          value="185,432"
          description="Unit produk"
          icon={<Package className="w-5 h-5" />}
          variant="info"
          trend={{ value: -2.1, label: "vs target" }}
        />
        <MetricCard
          title="Akurasi Model"
          value="94.2%"
          description="LSTM vs ARIMA"
          icon={<Brain className="w-5 h-5" />}
          variant="warning"
          trend={{ value: 5.3, label: "improvement" }}
        />
      </div>

      {/* Model Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-primary" />
                <span>Model LSTM</span>
              </CardTitle>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">MAE</p>
                <p className="text-lg font-semibold text-foreground">0.0025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">RMSE</p>
                <p className="text-lg font-semibold text-foreground">0.0106</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Loss</p>
                <p className="text-lg font-semibold text-foreground">5.8e-05</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Epochs</p>
                <p className="text-lg font-semibold text-foreground">100</p>
              </div>
            </div>
            <div className="pt-2">
              <Button className="w-full" size="sm">
                <PlayCircle className="w-4 h-4 mr-2" />
                Retrain Model
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-success" />
                <span>Model ARIMA</span>
              </CardTitle>
              <Badge variant="outline" className="border-success/30 text-success">
                Standby
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">MAE</p>
                <p className="text-lg font-semibold text-foreground">861.40</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">RMSE</p>
                <p className="text-lg font-semibold text-foreground">861.40</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Order</p>
                <p className="text-lg font-semibold text-foreground">(1,1,1)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ADF p-value</p>
                <p className="text-lg font-semibold text-foreground">0.0</p>
              </div>
            </div>
            <div className="pt-2">
              <Button variant="outline" className="w-full" size="sm">
                <PlayCircle className="w-4 h-4 mr-2" />
                Train Model
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Selling Products */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span>Produk Terlaris</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Produk</TableHead>
                <TableHead className="text-center">Jumlah Terjual</TableHead>
                <TableHead className="text-right">Total Penjualan</TableHead>
                <TableHead className="text-right">Persentase</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium max-w-md">
                    <div className="truncate" title={product.name}>
                      {product.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="bg-info/20 text-info">
                      {product.quantity.toLocaleString()} unit
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {product.sales}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="border-success/30 text-success">
                      {product.percentage}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 pt-4 border-t border-border">
            <Button variant="outline" className="w-full md:w-auto">
              <Package className="w-4 h-4 mr-2" />
              Lihat Semua Produk
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Predictions */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Prediksi 30 Hari Mendatang</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Prediksi Hari 1</p>
              <p className="text-2xl font-bold text-primary">Rp 216,666</p>
              <p className="text-xs text-muted-foreground">LSTM Model</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Prediksi Hari 30</p>
              <p className="text-2xl font-bold text-success">Rp 203,303</p>
              <p className="text-xs text-muted-foreground">Trend menurun</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Rata-rata</p>
              <p className="text-2xl font-bold text-warning">Rp 209,850</p>
              <p className="text-xs text-muted-foreground">30 hari</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-border">
            <Button className="w-full md:w-auto">
              <TrendingUp className="w-4 h-4 mr-2" />
              Lihat Detail Prediksi
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">Data Connection</p>
                <p className="text-sm text-muted-foreground">Google Sheets connected</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">Last Update</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-info/5 to-info/10 border-info/20">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-info rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">Data Quality</p>
                <p className="text-sm text-muted-foreground">97.8% complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}