import { Text } from "react-native"
import { DayWeather } from "../utils/requests/useRequest"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"

type WeatherDetailProps = NativeStackScreenProps<RootStackParamList, "Day">

const WeatherDetail = (props: WeatherDetailProps) => {
  return <Text>{props.route.params?.date}</Text>
}

export default WeatherDetail
