import { DayWeather } from "../useRequest"

const getWeatherData = (data: any): DayWeather[] => {
  return (
    data?.forecast?.forecastday.map((forecast: any) => {
      return {
        date: forecast.date,
        image: "https:" + forecast.day.condition.icon,
        description: forecast.day?.condition?.text,
        minTemp: forecast.day?.mintemp_c,
        maxTemp: forecast.day?.maxtemp_c,
        chanceOfRain: forecast.day?.daily_chance_of_rain,
      }
    }) || []
  )
}

export default getWeatherData
