import { Text } from "react-native"
import { API_KEY } from "../utils/keys"
import useRequest, { RequestConfig } from "../utils/requests/useRequest"

const config: RequestConfig = {
  url: "http://api.weatherapi.com/v1/forecast.json",
  method: "GET",
  params: {
    key: API_KEY,
    q: "Nottingham",
    days: 7,
  },
}

const WeatherList = () => {
  const response = useRequest(config)
  return <Text>Weather List</Text>
}

export default WeatherList
