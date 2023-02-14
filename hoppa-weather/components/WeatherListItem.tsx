import { useNavigation } from "@react-navigation/native"
import { Pressable, View, Text } from "react-native"
import { DAY_WEATHER_ROUTE } from "../App"
import { DayWeather } from "../utils/requests/useRequest"

const WeatherListItem = ({ weather }: { weather: DayWeather }) => {
  console.log("LIST ITEM", weather.date)
  const navigation = useNavigation()

  const pressHandler = () => {
    navigation.navigate(
      DAY_WEATHER_ROUTE as never,
      {
        date: weather.date,
      } as never
    )
  }

  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{weather.date}</Text>
      </View>
    </Pressable>
  )
}

export default WeatherListItem
