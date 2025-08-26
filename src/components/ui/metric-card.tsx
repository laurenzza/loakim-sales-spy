import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

const metricCardVariants = cva(
  "relative overflow-hidden border-0 bg-gradient-to-br shadow-card transition-all duration-300 hover:shadow-glow",
  {
    variants: {
      variant: {
        primary: "from-primary/10 to-primary/5 border-primary/20",
        success: "from-success/10 to-success/5 border-success/20",
        warning: "from-warning/10 to-warning/5 border-warning/20",
        info: "from-info/10 to-info/5 border-info/20",
        destructive: "from-destructive/10 to-destructive/5 border-destructive/20"
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

interface MetricCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricCardVariants> {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    label: string
  }
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, variant, size, title, value, description, icon, trend, ...props }, ref) => {
    const formatValue = (val: string | number) => {
      if (typeof val === 'number') {
        return val.toLocaleString('id-ID')
      }
      return val
    }

    return (
      <Card
        ref={ref}
        className={cn(metricCardVariants({ variant, size }), className)}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold text-foreground">{formatValue(value)}</p>
              {trend && (
                <span className={cn(
                  "text-xs font-medium",
                  trend.value > 0 ? "text-success" : trend.value < 0 ? "text-destructive" : "text-muted-foreground"
                )}>
                  {trend.value > 0 ? "+" : ""}{trend.value}% {trend.label}
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {icon && (
            <div className={cn(
              "rounded-lg p-2",
              variant === "primary" && "bg-primary/20 text-primary",
              variant === "success" && "bg-success/20 text-success",
              variant === "warning" && "bg-warning/20 text-warning",
              variant === "info" && "bg-info/20 text-info",
              variant === "destructive" && "bg-destructive/20 text-destructive"
            )}>
              {icon}
            </div>
          )}
        </div>
      </Card>
    )
  }
)

MetricCard.displayName = "MetricCard"

export { MetricCard, metricCardVariants }