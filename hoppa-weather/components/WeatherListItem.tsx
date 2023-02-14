import { useNavigation } from "@react-navigation/native"
import { Pressable, View, Text, Image, StyleSheet } from "react-native"
import { DAY_WEATHER_ROUTE } from "../utils/navigation/routes"
import { DayWeather } from "../utils/requests/useRequest"

const WeatherListItem = ({ weather }: { weather: DayWeather }) => {
  const navigation = useNavigation()

  const pressHandler = () => {
    navigation.navigate(DAY_WEATHER_ROUTE as never, weather as never)
  }

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.itemContainer}>
        <View>
          <Image source={{ uri: weather.image }} style={styles.weatherImg} />
        </View>
        <View style={styles.centralSection}>
          <Text style={styles.decription}>{weather.description}</Text>
          <Text>
            min {weather.minTemp}°C max {weather.maxTemp}°C
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Text>{weather.chanceOfRain}%</Text>
          <Text>Chance of Rain</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default WeatherListItem

const styles = StyleSheet.create({
  weatherImg: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    margin: 20,
    flexDirection: "row",
  },
  centralSection: {
    paddingLeft: 20,
    flexDirection: "column",
    flex: 1,
  },
  rightSection: {
    alignItems: "center",
  },
  decription: {
    fontSize: 20,
  },
})
