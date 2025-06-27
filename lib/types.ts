export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "moderator" | "user"
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
  lastLogin?: string
  avatar?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface DashboardStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  totalSales: number
  userGrowth: number
  revenueGrowth: number
  salesGrowth: number
  activityGrowth: number
}

export interface ChartData {
  name: string
  value: number
  date?: string
}

export interface Activity {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  action: string
  timestamp: string
  details?: Record<string, any>
}
