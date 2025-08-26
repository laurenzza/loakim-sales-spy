import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Settings as SettingsIcon,
  Database,
  Brain,
  Bell,
  Shield,
  Monitor,
  Palette,
  Cloud,
  Key,
  Save,
  RefreshCw,
  Download,
  Upload,
  User,
  Mail,
  Globe
} from "lucide-react"

export default function Settings() {
  const systemSettings = [
    {
      category: "Model Configuration",
      icon: Brain,
      settings: [
        { name: "Auto-retrain models", description: "Automatically retrain when new data is available", enabled: true },
        { name: "Real-time predictions", description: "Enable real-time prediction updates", enabled: true },
        { name: "Model comparison", description: "Always compare ARIMA vs LSTM results", enabled: true },
        { name: "Advanced logging", description: "Detailed logging for model training", enabled: false }
      ]
    },
    {
      category: "Data Management",
      icon: Database,
      settings: [
        { name: "Auto-import", description: "Automatically import new sales data", enabled: true },
        { name: "Data validation", description: "Validate data quality on import", enabled: true },
        { name: "Outlier detection", description: "Automatically detect and flag outliers", enabled: true },
        { name: "Data backup", description: "Daily backup of dataset", enabled: false }
      ]
    },
    {
      category: "Notifications",
      icon: Bell,
      settings: [
        { name: "Training completion", description: "Notify when model training completes", enabled: true },
        { name: "Prediction alerts", description: "Alert for significant prediction changes", enabled: false },
        { name: "Data quality alerts", description: "Notify about data quality issues", enabled: true },
        { name: "Weekly reports", description: "Send weekly performance reports", enabled: false }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      settings: [
        { name: "Two-factor authentication", description: "Enable 2FA for admin access", enabled: false },
        { name: "API key rotation", description: "Automatically rotate API keys monthly", enabled: true },
        { name: "Audit logging", description: "Log all system access and changes", enabled: true },
        { name: "Session timeout", description: "Auto-logout after 30 minutes of inactivity", enabled: true }
      ]
    }
  ];

  const modelParameters = [
    {
      model: "LSTM",
      parameters: [
        { name: "Epochs", value: "100", range: "50-200" },
        { name: "Batch Size", value: "32", range: "16-64" },
        { name: "Learning Rate", value: "1e-4", range: "1e-5 to 1e-3" },
        { name: "Hidden Units", value: "50", range: "25-100" },
        { name: "Dropout", value: "0.2", range: "0.1-0.5" }
      ]
    },
    {
      model: "ARIMA",
      parameters: [
        { name: "AR Order (p)", value: "1", range: "0-5" },
        { name: "Diff Order (d)", value: "1", range: "0-2" },
        { name: "MA Order (q)", value: "1", range: "0-5" },
        { name: "Seasonal Periods", value: "12", range: "1-52" },
        { name: "Trend", value: "Linear", range: "None/Linear/Log" }
      ]
    }
  ];

  const systemInfo = [
    { label: "Version", value: "v2.1.0" },
    { label: "Last Update", value: "2024-12-09" },
    { label: "Database Size", value: "2.3 GB" },
    { label: "Model Storage", value: "456 MB" },
    { label: "Uptime", value: "15 days" },
    { label: "Total Users", value: "3" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Konfigurasi sistem prediksi penjualan</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Config
          </Button>
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Config
          </Button>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* System Information */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-primary" />
            <span>Informasi Sistem</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {systemInfo.map((info, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">{info.label}</p>
                <p className="font-semibold">{info.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Model Parameters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modelParameters.map((model, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-primary" />
                <span>{model.model} Parameters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {model.parameters.map((param, paramIndex) => (
                <div key={paramIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">{param.name}</p>
                    <p className="text-sm text-muted-foreground">Range: {param.range}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {param.value}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Adjust Parameters
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Settings */}
      <div className="space-y-6">
        {systemSettings.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <Card key={categoryIndex} className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <IconComponent className="w-5 h-5 text-primary" />
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{setting.name}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 text-primary" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <RefreshCw className="w-5 h-5" />
              <span>Reset Models</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Database className="w-5 h-5" />
              <span>Clear Cache</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Key className="w-5 h-5" />
              <span>Generate API Key</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col space-y-2">
              <Cloud className="w-5 h-5" />
              <span>Backup Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Profile */}
      <Card className="bg-gradient-to-br from-card to-card/50 border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-primary" />
            <span>User Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-semibold">Administrator</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <Badge variant="default" className="bg-primary/20 text-primary">
                  System Admin
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">admin@loakimjong.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Login</p>
                <p className="font-semibold">2024-12-09 14:30</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Timezone</p>
                <p className="font-semibold">Asia/Jakarta</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Language</p>
                <p className="font-semibold">Indonesian</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Change Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}