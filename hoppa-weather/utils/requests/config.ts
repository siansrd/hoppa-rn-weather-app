import { API_KEY } from "../keys"

export const BASE_URL = "http://api.weatherapi.com/v1/forecast.json"

export type RequestConfig = {
  url: string
  method: string
  params: {
    key: string
    q: string
    days: number
  }
}

export const config: RequestConfig = {
  url: BASE_URL,
  method: "GET",
  params: {
    key: API_KEY,
    q: "Nottingham",
    days: 7,
  },
}
