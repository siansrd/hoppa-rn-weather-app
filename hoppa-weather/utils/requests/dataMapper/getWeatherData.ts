import { DayWeather } from "../useRequest"

const getWeatherData = (data: any): DayWeather[] => {
  return (
    data?.forecast?.forecastday.map((forecast: any) => {
      return {
        date: forecast.date,
      }
    }) || []
  )
}

export default getWeatherData
