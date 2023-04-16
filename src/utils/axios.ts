import { UniverseResponse } from '@/types/api'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/api',
})

axiosInstance.interceptors.response.use((response) => {
  const universeResponse: UniverseResponse = response.data

  if (universeResponse.code === 0) {
    return universeResponse.data
  }

  return response.data
})
