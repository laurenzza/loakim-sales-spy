import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  TrendingUp,
  Brain,
  BarChart3,
  Calendar,
  Target,
  Download,
  RefreshCw,
  Play,
  Zap,
  Activity,
  ArrowUp,
  ArrowDown
} from "lucide-react"

export default function Predictions() {
  const predictionComparison = [
    { day: 1, date: "2024-12-10", lstm: 216666, arima: 215800, actual: null },
    { day: 2, date: "2024-12-11", lstm: 216566, arima: 215900, actual: null },
    { day: 3, date: "2024-12-12", lstm: 216368, arima: 216100, actual: null },
    { day: 4, date: "2024-12-13", lstm: 216074, arima: 216000, actual: null },
    { day: 5, date: "2024-12-14", lstm: 215710, arima: 215850, actual: null },
    { day: 6, date: "2024-12-15", lstm: 215228, arima: 215700, actual: null },
    { day: 7, date: "2024-12-16", lstm: 215041, arima: 215600, actual: null }
  ];

  const modelMetrics = [
    {
      model: "LSTM",
      mae: "0.0025",
      rmse: "0.0106", 
      accuracy: "95.2%",
      confidence: "High",
      trend: "stable"
    },
    {
      model: "ARIMA",
      mae: "861.40",
      rmse: "861.40",
      accuracy: "92.8%", 
      confidence: "Medium",
      trend: "declining"
    }
  ];

  const quickPredictions = [
    { period: "Next 7 Days", lstm: "Rp 1.51M", arima: "Rp 1.49M", confidence: "95%" },
    { period: "Next 30 Days", lstm: "Rp 6.18M", arima: "Rp 6.05M", confidence: "88%" },
    { period: "Next Quarter", lstm: "Rp 18.5M", arima: "Rp 18.1M", confidence: "75%" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Predictions</h1>
          <p className="text-muted-foreground">Prediksi penjualan dengan model ARIMA vs LSTM</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            New Prediction
          </Button>
        </div>
      </div>

      {/* Quick Predictions Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickPredictions.map((prediction, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{prediction.period}</span>
                  <Badge variant="outline" className="border-success/30 text-success">
                    {prediction.confidence}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">LSTM</span>
                    <span className="text-lg font-bold text-primary">{prediction.lstm}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ARIMA</span>
                    <span className="text-lg font-bold text-info">{prediction.arima}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Model Performance Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modelMetrics.map((model, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {model.model === 'LSTM' ? (
                    <Brain className="w-5 h-5 text-primary" />
                  ) : (
                    <BarChart3 className="w-5 h-5 text-info" />
                  )}
                  <span>{model.model} Model</span>
                </div>
                <Badge variant={model.confidence === 'High' ? 'default' : 'secondary'}
                       className={model.confidence === 'High' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}>
                  {model.confidence}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">MAE</span>
                  </div>
                  <p className="text-xl font-bold">{model.mae}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-info" />
                    <span className="text-sm text-muted-foreground">RMSE</span>
                  </div>
                  <p className="text-xl font-bold">{model.rmse}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-xl font-bold text-success">{model.accuracy}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Trend</span>
                    {model.trend === 'stable' ? (
                      <ArrowUp className="w-4 h-4 text-success" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-warning" />
                    )}
                  </div>
                  <p className="text-xl font-bold capitalize">{model.trend}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Predictions Table */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Prediksi 7 Hari Mendatang</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hari</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead className="text-right">LSTM Prediction</TableHead>
                <TableHead className="text-right">ARIMA Prediction</TableHead>
                <TableHead className="text-right">Selisih</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {predictionComparison.map((pred, index) => {
                const difference = pred.lstm - pred.arima;
                const isLstmHigher = difference > 0;
                
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">Hari {pred.day}</TableCell>
                    <TableCell>{pred.date}</TableCell>
                    <TableCell className="text-right font-semibold text-primary">
                      Rp {pred.lstm.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-info">
                      Rp {pred.arima.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={isLstmHigher ? 'text-success' : 'text-warning'}>
                        {isLstmHigher ? '+' : ''}Rp {difference.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className="border-info/30 text-info">
                        Pending
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Rata-rata selisih: Rp {Math.abs(predictionComparison.reduce((sum, pred) => sum + (pred.lstm - pred.arima), 0) / predictionComparison.length).toLocaleString()}
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Zap className="w-4 h-4 mr-2" />
                Analyze Patterns
              </Button>
              <Button size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Extended Forecast
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}