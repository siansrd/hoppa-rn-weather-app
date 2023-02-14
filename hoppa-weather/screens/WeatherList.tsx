import { Text, FlatList, View } from "react-native"
import WeatherListItem from "../components/WeatherListItem"
import { config } from "../utils/requests/config"
import useRequest, { DayWeather } from "../utils/requests/useRequest"

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
