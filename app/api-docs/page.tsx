import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Documentação da API</h1>
          <p className="text-slate-600">Guia completo para integração com a API W2C3</p>
        </div>

        {/* API Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
            <CardDescription>
              A API W2C3 é uma REST API que permite integração completa com a plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Base URL</h3>
                <code className="bg-slate-100 px-3 py-1 rounded text-sm">https://api.w2c3.com/v1</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Autenticação</h3>
                <Badge variant="secondary">Bearer Token</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="auth">Autenticação</TabsTrigger>
            <TabsTrigger value="data">Dados</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      GET
                    </Badge>
                    /users
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </Button>
                </div>
                <CardDescription>Listar todos os usuários</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Parâmetros de Query</h4>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {`{
  "page": 1,
  "limit": 10,
  "search": "string",
  "status": "active|inactive"
}`}
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resposta de Exemplo</h4>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {`{
  "data": [
    {
      "id": "1",
      "name": "João Silva",
      "email": "joao@example.com",
      "status": "active",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      POST
                    </Badge>
                    /users
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </Button>
                </div>
                <CardDescription>Criar um novo usuário</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Body da Requisição</h4>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {`{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "role": "user"
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="auth" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      POST
                    </Badge>
                    /auth/login
                  </CardTitle>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar
                  </Button>
                </div>
                <CardDescription>Autenticar usuário</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Body da Requisição</h4>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {`{
  "email": "usuario@example.com",
  "password": "senha123"
}`}
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resposta de Sucesso</h4>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <code className="text-sm">
                        {`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "name": "João Silva",
    "email": "joao@example.com",
    "role": "user"
  }
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Endpoints de Dados</CardTitle>
                <CardDescription>Gerenciamento de dados da aplicação</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Documentação dos endpoints de dados em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Endpoints de Analytics</CardTitle>
                <CardDescription>Métricas e relatórios da plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Documentação dos endpoints de analytics em desenvolvimento...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
