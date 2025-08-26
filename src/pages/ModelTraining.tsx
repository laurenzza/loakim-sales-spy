import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain,
  Settings,
  Play,
  Square,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap,
  Target,
  Activity
} from "lucide-react"

export default function ModelTraining() {
  const modelStatus = [
    {
      name: "LSTM Model",
      status: "trained",
      accuracy: "95.2%",
      loss: "0.000056",
      epochs: 100,
      trainingTime: "15 min",
      lastTrained: "2024-12-09"
    },
    {
      name: "ARIMA Model", 
      status: "training",
      accuracy: "92.8%",
      loss: "861.40",
      parameters: "(1,1,1)",
      trainingTime: "3 min",
      lastTrained: "2024-12-09"
    }
  ];

  const trainingMetrics = [
    { metric: "Total Epochs", value: "100", change: "+5%" },
    { metric: "Batch Size", value: "32", change: "0%" },
    { metric: "Learning Rate", value: "1e-4", change: "-10%" },
    { metric: "Time Step", value: "30", change: "0%" }
  ];

  const hyperparameters = {
    lstm: [
      { param: "LSTM Layers", value: "3", optimal: "2-4" },
      { param: "Hidden Units", value: "50", optimal: "50-100" },
      { param: "Dropout Rate", value: "0.2", optimal: "0.1-0.3" },
      { param: "Optimizer", value: "SGD", optimal: "Adam/SGD" }
    ],
    arima: [
      { param: "AR Order (p)", value: "1", optimal: "1-3" },
      { param: "Diff Order (d)", value: "1", optimal: "0-2" },
      { param: "MA Order (q)", value: "1", optimal: "1-3" },
      { param: "Seasonal", value: "No", optimal: "Auto" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Model Training</h1>
          <p className="text-muted-foreground">Latih dan konfigurasi model ARIMA vs LSTM</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            Start Training
          </Button>
        </div>
      </div>

      {/* Training Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {trainingMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.metric}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                </div>
                <Badge variant={metric.change.startsWith('+') ? 'default' : 'secondary'}
                       className={metric.change.startsWith('+') ? 'bg-success/20 text-success' : 'bg-muted/50'}>
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Model Status Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modelStatus.map((model, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>{model.name}</span>
                </div>
                <Badge variant={model.status === 'trained' ? 'default' : 'secondary'}
                       className={model.status === 'trained' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}>
                  {model.status === 'trained' ? 'Trained' : 'Training'}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{model.accuracy}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-info" />
                    <span className="text-sm text-muted-foreground">Loss</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{model.loss}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Training Time</p>
                  <p className="font-semibold">{model.trainingTime}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Trained</p>
                  <p className="font-semibold">{model.lastTrained}</p>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
                <Button size="sm" className="flex-1">
                  {model.status === 'trained' ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Retrain
                    </>
                  ) : (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Stop
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hyperparameters Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LSTM Hyperparameters */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>LSTM Hyperparameters</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hyperparameters.lstm.map((param, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">{param.param}</p>
                  <p className="text-sm text-muted-foreground">Optimal: {param.optimal}</p>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {param.value}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              <Settings className="w-4 h-4 mr-2" />
              Adjust Parameters
            </Button>
          </CardContent>
        </Card>

        {/* ARIMA Hyperparameters */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>ARIMA Parameters</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {hyperparameters.arima.map((param, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">{param.param}</p>
                  <p className="text-sm text-muted-foreground">Optimal: {param.optimal}</p>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary">
                  {param.value}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              <Settings className="w-4 h-4 mr-2" />
              Auto-Select Order
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Training Progress */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>Training Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* LSTM Training Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">LSTM Training</span>
                <Badge variant="default" className="bg-success/20 text-success">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full" style={{ width: '100%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Epoch 100/100</span>
                <span>Loss: 0.000056</span>
              </div>
            </div>

            {/* ARIMA Training Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">ARIMA Training</span>
                <Badge variant="secondary" className="bg-warning/20 text-warning">
                  <Clock className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="h-3 bg-gradient-to-r from-warning to-warning/80 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fitting model parameters...</span>
                <span>75% Complete</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}