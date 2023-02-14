import { DayWeather } from "../useRequest"
import getWeatherData from "./getWeatherData"

describe("getWeatherData", () => {
  const forcasteResponse = [{ date: "0" }, { date: "1" }]

  test("returns empty array if response is undefined", () => {
    expect(getWeatherData(undefined)).toEqual([])
  })

  test("returns empty array if forcaste is undefined", () => {
    const response = {}
    expect(getWeatherData(response)).toEqual([])
  })

  test("returns empty array if forecasteday is undefined", () => {
    const response = {
      forecaste: {},
    }
    expect(getWeatherData(response)).toEqual([])
  })

  test("returns array of forecasts with date property", () => {
    const response = {
      forecast: { forecastday: forcasteResponse },
    }
    expect(getWeatherData(response)).toEqual(forcasteResponse)
  })
})
