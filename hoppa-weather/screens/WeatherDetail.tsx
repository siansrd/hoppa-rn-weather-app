import { View, Text, Image, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"

type WeatherDetailProps = NativeStackScreenProps<RootStackParamList, "Day">

const WeatherDetail = (props: WeatherDetailProps) => {
  const weather = props.route.params

  return (
    <View style={styles.weatherContainer}>
      <View>
        <Image source={{ uri: weather?.image }} style={styles.weatherImg} />
      </View>
      <Text style={styles.description}>{weather?.description}</Text>
      <Text>
        min {weather?.minTemp}°C max {weather?.maxTemp}°C
      </Text>
      <Text>{weather?.chanceOfRain}% chance of rain</Text>
    </View>
  )
}

export default WeatherDetail

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherImg: {
    height: 80,
    width: 80,
  },
  description: {
    fontSize: 24,
  },
})
