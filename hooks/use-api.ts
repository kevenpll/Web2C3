"use client"

import { useState, useEffect } from "react"

export function useApi<T>(endpoint: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      // Esta é uma implementação simplificada
      // Na prática, você usaria o apiClient aqui
      const response = await fetch(endpoint, options)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [endpoint])

  return { data, loading, error, refetch: () => fetchData() }
}

export function useUsers() {
  return useApi<{ data: any[]; pagination: any }>("/api/users")
}

export function useDashboardStats() {
  return useApi<any>("/api/analytics/dashboard")
}
