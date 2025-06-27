import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ChartOverview } from "@/components/dashboard/chart-overview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Visão geral das métricas e atividades da plataforma</p>
        </div>

        {/* Stats Cards */}
        <Suspense fallback={<div className="animate-pulse">Carregando estatísticas...</div>}>
          <StatsCards />
        </Suspense>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Chart Overview */}
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="animate-pulse h-96 bg-white rounded-lg"></div>}>
              <ChartOverview />
            </Suspense>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div className="animate-pulse h-96 bg-white rounded-lg"></div>}>
              <RecentActivity />
            </Suspense>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +2.1% desde o último mês
              </div>
              <Progress value={12.5} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio de Sessão</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                -0.5% desde o último mês
              </div>
              <Progress value={75} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status do Sistema</CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.9%</div>
              <p className="text-xs text-muted-foreground">Uptime nos últimos 30 dias</p>
              <Progress value={99.9} className="mt-3" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
