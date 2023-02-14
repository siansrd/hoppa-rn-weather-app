import { Text, FlatList, View } from "react-native"
import WeatherListItem from "../components/WeatherListItem"
import { API_KEY } from "../utils/keys"
import useRequest, {
  DayWeather,
  RequestConfig,
} from "../utils/requests/useRequest"

const config: RequestConfig = {
  url: "http://api.weatherapi.com/v1/forecast.json",
  method: "GET",
  params: {
    key: API_KEY,
    q: "Nottingham",
    days: 7,
  },
}

const renderItem = ({ item }: { item: DayWeather }) => {
  return (
    <View>
      <WeatherListItem weather={item} />
    </View>
  )
}

const WeatherList = () => {
  const response = useRequest(config)

  return response.data ? (
    <FlatList
      data={response.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.date}
    />
  ) : (
    <Text>Loading</Text>
  )
}

export default WeatherList
