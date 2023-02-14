import { DayWeather } from "../useRequest"

const getWeatherData = (data: any): DayWeather[] => {
  return data?.forecast?.forecastday || []
}

export default getWeatherData
