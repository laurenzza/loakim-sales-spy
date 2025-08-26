import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Activity,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Target,
  Zap,
  Clock,
  Users
} from "lucide-react"

export default function Analytics() {
  const salesMetrics = [
    { 
      label: "Total Penjualan", 
      value: "Rp 3.5M", 
      change: "+12.5%", 
      trend: "up",
      period: "30 hari terakhir"
    },
    { 
      label: "Rata-rata Harian", 
      value: "Rp 107.5K", 
      change: "+8.2%", 
      trend: "up",
      period: "vs bulan lalu"
    },
    { 
      label: "Transaksi", 
      value: "31,880", 
      change: "+15.3%", 
      trend: "up",
      period: "total selesai"
    },
    { 
      label: "Produk Terjual", 
      value: "8,542", 
      change: "-2.1%", 
      trend: "down",
      period: "unit total"
    }
  ];

  const topCategories = [
    { name: "Kipas Angin Parts", sales: "Rp 1.2M", percentage: "34%", color: "primary" },
    { name: "Kapasitor", sales: "Rp 890K", percentage: "25%", color: "success" },
    { name: "Blender Parts", sales: "Rp 654K", percentage: "19%", color: "info" },
    { name: "Pompa Air", sales: "Rp 432K", percentage: "12%", color: "warning" },
    { name: "Lainnya", sales: "Rp 324K", percentage: "10%", color: "muted" }
  ];

  const monthlyTrends = [
    { month: "Jan", sales: 2.1, growth: "+5%" },
    { month: "Feb", sales: 2.3, growth: "+9%" },
    { month: "Mar", sales: 2.8, growth: "+22%" },
    { month: "Apr", sales: 3.1, growth: "+11%" },
    { month: "May", sales: 2.9, growth: "-6%" },
    { month: "Jun", sales: 3.2, growth: "+10%" },
    { month: "Jul", sales: 3.6, growth: "+13%" },
    { month: "Aug", sales: 3.4, growth: "-6%" },
    { month: "Sep", sales: 3.7, growth: "+9%" },
    { month: "Oct", sales: 3.5, growth: "-5%" },
    { month: "Nov", sales: 3.8, growth: "+9%" },
    { month: "Dec", sales: 3.5, growth: "-8%" }
  ];

  const predictionAccuracy = [
    { model: "LSTM", accuracy: "95.2%", mae: "0.0025", trend: "improving" },
    { model: "ARIMA", accuracy: "92.8%", mae: "861.40", trend: "stable" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Analisis mendalam data penjualan dan performa model</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Sales Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {salesMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.period}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-5 h-5 text-success" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-destructive" />
                  )}
                  <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}
                         className={metric.trend === 'up' ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'}>
                    {metric.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Product Categories */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-primary" />
              <span>Kategori Produk Teratas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{category.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">{category.sales}</span>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {category.percentage}
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      category.color === 'primary' ? 'bg-primary' :
                      category.color === 'success' ? 'bg-success' :
                      category.color === 'info' ? 'bg-info' :
                      category.color === 'warning' ? 'bg-warning' : 'bg-muted-foreground'
                    }`}
                    style={{ width: category.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Model Performance Comparison */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Performa Model</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {predictionAccuracy.map((model, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{model.model}</span>
                  <Badge variant={model.trend === 'improving' ? 'default' : 'secondary'}
                         className={model.trend === 'improving' ? 'bg-success/20 text-success' : 'bg-info/20 text-info'}>
                    {model.trend}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                    <p className="text-xl font-bold text-success">{model.accuracy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">MAE</p>
                    <p className="text-xl font-bold text-info">{model.mae}</p>
                  </div>
                </div>

                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full"
                    style={{ width: model.accuracy }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Monthly Sales Trend */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span>Tren Penjualan Bulanan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {monthlyTrends.map((trend, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="h-20 bg-muted/30 rounded-lg flex items-end justify-center p-2">
                  <div 
                    className="w-6 bg-gradient-to-t from-primary to-primary-glow rounded-t"
                    style={{ height: `${(trend.sales / 4) * 100}%` }}
                  ></div>
                </div>
                <div>
                  <p className="text-sm font-medium">{trend.month}</p>
                  <p className="text-xs text-muted-foreground">{trend.sales}M</p>
                  <Badge variant={trend.growth.startsWith('+') ? 'default' : 'secondary'}
                         className={trend.growth.startsWith('+') ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'}>
                    {trend.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-success" />
              <div>
                <p className="font-semibold text-success">Peak Sales Day</p>
                <p className="text-sm text-muted-foreground">9 Agustus 2023 - 35 transaksi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/5 to-info/10 border-info/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-info" />
              <div>
                <p className="font-semibold text-info">Best Quarter</p>
                <p className="text-sm text-muted-foreground">Q3 2023 - Rp 11.2M total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-warning" />
              <div>
                <p className="font-semibold text-warning">Cancellation Rate</p>
                <p className="text-sm text-muted-foreground">2.1% - Dalam batas normal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}