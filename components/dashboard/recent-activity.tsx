import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "João Silva",
    action: "criou uma nova conta",
    time: "2 minutos atrás",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
  },
  {
    user: "Maria Santos",
    action: "atualizou o perfil",
    time: "5 minutos atrás",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MS",
  },
  {
    user: "Pedro Costa",
    action: "fez login no sistema",
    time: "10 minutos atrás",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PC",
  },
  {
    user: "Ana Oliveira",
    action: "enviou um relatório",
    time: "15 minutos atrás",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AO",
  },
  {
    user: "Carlos Lima",
    action: "alterou configurações",
    time: "20 minutos atrás",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "CL",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>Últimas ações realizadas na plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
