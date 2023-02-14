import { DayWeather } from "../useRequest"

const getWeatherData = (data: any): DayWeather[] => {
  return data?.forecast?.forecasteday || []
}

export default getWeatherData
