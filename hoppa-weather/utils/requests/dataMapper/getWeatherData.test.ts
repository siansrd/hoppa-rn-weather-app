import { DayWeather } from "../useRequest"
import getWeatherData from "./getWeatherData"

describe("getWeatherData", () => {
  test("returns array of forecasts", () => {
    const weekForecast: DayWeather[] = []
    const response = {
      forecast: { forecasteday: weekForecast },
    }
    expect(getWeatherData(response)).toBe(weekForecast)
  })

  test("returns empty array if forecasteday is undefined", () => {
    const response = {
      forecaste: {},
    }
    expect(getWeatherData(response)).toEqual([])
  })

  test("returns empty array if forcaste is undefined", () => {
    const response = {}
    expect(getWeatherData(response)).toEqual([])
  })

  test("returns empty array if response is undefined", () => {
    expect(getWeatherData(undefined)).toEqual([])
  })
})
