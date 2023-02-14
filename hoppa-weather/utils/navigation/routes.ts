import { DayWeather } from "../requests/useRequest"

export const WEEK_WEATHER_ROUTE = "Week"
export const DAY_WEATHER_ROUTE = "Day"

export type RootStackParamList = {
  [WEEK_WEATHER_ROUTE]: undefined
  [DAY_WEATHER_ROUTE]: DayWeather | undefined
}
