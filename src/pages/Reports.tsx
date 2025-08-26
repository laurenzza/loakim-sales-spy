import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  FileText,
  Download,
  Calendar,
  BarChart3,
  TrendingUp,
  Clock,
  Filter,
  Share,
  Eye,
  Edit,
  Trash2,
  Plus,
  FileSpreadsheet,
  FileImage,
  File
} from "lucide-react"

export default function Reports() {
  const recentReports = [
    {
      id: 1,
      name: "Laporan Prediksi Penjualan Desember 2024",
      type: "Prediction Report",
      created: "2024-12-09",
      status: "ready",
      size: "2.3 MB",
      format: "PDF",
      downloads: 12
    },
    {
      id: 2,
      name: "Analisis Perbandingan ARIMA vs LSTM",
      type: "Model Comparison",
      created: "2024-12-08",
      status: "generating",
      size: "1.8 MB",
      format: "PDF",
      downloads: 8
    },
    {
      id: 3,
      name: "Dataset Summary November 2024",
      type: "Data Summary",
      created: "2024-12-01",
      status: "ready",
      size: "892 KB",
      format: "Excel",
      downloads: 25
    },
    {
      id: 4,
      name: "Monthly Sales Visualization",
      type: "Visualization",
      created: "2024-11-30",
      status: "ready",
      size: "3.1 MB",
      format: "PNG",
      downloads: 18
    },
    {
      id: 5,
      name: "Model Training Performance Q4",
      type: "Performance Report",
      created: "2024-11-28",
      status: "ready",
      size: "1.5 MB",
      format: "PDF",
      downloads: 15
    }
  ];

  const reportTemplates = [
    {
      name: "Sales Prediction Report",
      description: "Comprehensive prediction analysis with model comparison",
      fields: ["Predictions", "Accuracy", "Confidence Intervals"],
      frequency: "Monthly"
    },
    {
      name: "Model Performance Report",
      description: "Detailed model training and validation metrics",
      fields: ["MAE", "RMSE", "Training Loss", "Validation Scores"],
      frequency: "Weekly"
    },
    {
      name: "Data Quality Report",
      description: "Dataset completeness and quality assessment",
      fields: ["Missing Values", "Outliers", "Data Distribution"],
      frequency: "Daily"
    },
    {
      name: "Business Intelligence Report",
      description: "Executive summary with key business insights",
      fields: ["Revenue Trends", "Top Products", "Growth Metrics"],
      frequency: "Quarterly"
    }
  ];

  const reportStats = [
    { label: "Total Reports", value: "127", change: "+12" },
    { label: "This Month", value: "23", change: "+8" },
    { label: "Downloads", value: "1,892", change: "+156" },
    { label: "Scheduled", value: "8", change: "+2" }
  ];

  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return <File className="w-4 h-4 text-destructive" />;
      case 'excel':
        return <FileSpreadsheet className="w-4 h-4 text-success" />;
      case 'png':
        return <FileImage className="w-4 h-4 text-info" />;
      default:
        return <FileText className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate dan kelola laporan sistem prediksi</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reportStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <Badge variant="outline" className="border-success/30 text-success">
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Templates */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-primary" />
            <span>Template Laporan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{template.name}</h3>
                  <Badge variant="outline" className="border-info/30 text-info">
                    {template.frequency}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{template.description}</p>
                <div className="flex flex-wrap gap-1">
                  {template.fields.map((field, fieldIndex) => (
                    <Badge key={fieldIndex} variant="secondary" className="text-xs">
                      {field}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-3">
                  <Plus className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports Table */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span>Laporan Terbaru</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Laporan</TableHead>
                <TableHead>Tipe</TableHead>
                <TableHead>Tanggal Dibuat</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ukuran</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getFileIcon(report.format)}
                      <span className="font-medium">{report.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {report.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{report.created}</TableCell>
                  <TableCell>
                    <Badge variant={report.status === 'ready' ? 'default' : 'secondary'}
                           className={report.status === 'ready' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}>
                      {report.status === 'ready' ? 'Ready' : 'Generating'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{report.size}</TableCell>
                  <TableCell>
                    <span className="font-semibold">{report.downloads}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center space-x-1">
                      <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" disabled={report.status !== 'ready'}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Menampilkan 5 dari 127 laporan</p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Reports
              </Button>
              <Button size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}