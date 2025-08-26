import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Database,
  Upload,
  Download,
  FileSpreadsheet,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
  Search,
  RefreshCw
} from "lucide-react"

export default function DataManagement() {
  const datasetInfo = [
    { label: "Total Records", value: "32,570", status: "success" },
    { label: "Date Range", value: "2020-2024", status: "info" },
    { label: "Missing Values", value: "0", status: "success" },
    { label: "Outliers Detected", value: "1,450", status: "warning" },
    { label: "Last Updated", value: "9 Dec 2024", status: "info" }
  ];

  const recentUploads = [
    {
      filename: "sales_data_dec_2024.csv",
      date: "2024-12-09",
      records: 125,
      status: "processed"
    },
    {
      filename: "sales_data_nov_2024.csv", 
      date: "2024-11-30",
      records: 1245,
      status: "processed"
    },
    {
      filename: "sales_data_oct_2024.csv",
      date: "2024-10-31", 
      records: 987,
      status: "processing"
    }
  ];

  const dataQuality = [
    { metric: "Data Completeness", score: 100, color: "success" },
    { metric: "Data Consistency", score: 95, color: "success" },
    { metric: "Data Accuracy", score: 98, color: "success" },
    { metric: "Data Freshness", score: 85, color: "warning" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Data Management</h1>
          <p className="text-muted-foreground">Kelola dataset penjualan Toko Loa Kim Jong</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Data
          </Button>
        </div>
      </div>

      {/* Dataset Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {datasetInfo.map((info, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="text-2xl font-bold text-foreground">{info.value}</p>
                </div>
                <div className="flex items-center">
                  {info.status === 'success' && <CheckCircle className="w-5 h-5 text-success" />}
                  {info.status === 'warning' && <AlertCircle className="w-5 h-5 text-warning" />}
                  {info.status === 'info' && <Clock className="w-5 h-5 text-info" />}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Quality Metrics */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Kualitas Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dataQuality.map((quality, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{quality.metric}</span>
                  <Badge variant={quality.color === 'success' ? 'default' : 'secondary'} 
                         className={quality.color === 'success' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}>
                    {quality.score}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${quality.color === 'success' ? 'bg-success' : 'bg-warning'}`}
                    style={{ width: `${quality.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Data Uploads */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-5 h-5 text-primary" />
              <span>Upload Terbaru</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileSpreadsheet className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{upload.filename}</p>
                      <p className="text-xs text-muted-foreground">{upload.records.toLocaleString()} records</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={upload.status === 'processed' ? 'default' : 'secondary'}
                           className={upload.status === 'processed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}>
                      {upload.status === 'processed' ? 'Selesai' : 'Proses'}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{upload.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Preview Table */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-primary" />
              <span>Preview Dataset</span>
            </CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Nama Produk</TableHead>
                <TableHead>Jumlah</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">INV/20241209/.../832</TableCell>
                <TableCell>9 Dec 2024</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success/20 text-success">Selesai</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">KAPASITOR 1,5UF MIKRO CAPASITOR KIPAS ANGIN</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Rp 3,400</TableCell>
                <TableCell>Rp 3,400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">INV/20241207/.../439</TableCell>
                <TableCell>7 Dec 2024</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-destructive/20 text-destructive">Dibatalkan</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">Sepasang Kopel Konektor Blender Miyako</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Rp 6,000</TableCell>
                <TableCell>Rp 26,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">INV/20241206/.../482</TableCell>
                <TableCell>6 Dec 2024</TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success/20 text-success">Selesai</Badge>
                </TableCell>
                <TableCell className="max-w-xs truncate">OTOMATIS PM5 PRESSURE SWITCH JETPUMP</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Rp 55,000</TableCell>
                <TableCell>Rp 55,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Menampilkan 3 dari 32,570 records</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}