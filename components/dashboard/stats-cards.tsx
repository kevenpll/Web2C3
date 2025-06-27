import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Activity, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total de Usuários",
    value: "2,350",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Receita Total",
    value: "R$ 45,231",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Vendas",
    value: "+12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Usuários Ativos",
    value: "+573",
    change: "+201",
    changeType: "positive" as const,
    icon: Activity,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>{" "}
                desde o último mês
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
