import type { AxiosRequestConfig } from 'axios'

import { axiosInstance } from './axios'

function request<ResponseData, RequestData>(config: AxiosRequestConfig<RequestData>) {
  return axiosInstance.request<ResponseData>(config) as Promise<ResponseData>
}

function get<ResponseData>(url: string, params?: any) {
  return request<ResponseData, null>({
    url,
    method: 'GET',
    params,
  })
}

function post<ResponseData, RequestData = any>(url: string, data: RequestData) {
  return request<ResponseData, RequestData>({
    url,
    method: 'POST',
    data,
  })
}

export const apiFetcher = {
  get,
  post,
}
