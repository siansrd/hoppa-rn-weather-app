import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import WeatherDetail from "./screens/WeatherDetail"
import WeatherList from "./screens/WeatherList"
import { DayWeather } from "./utils/requests/useRequest"

export const WEEK_WEATHER_ROUTE = "Week"
export const DAY_WEATHER_ROUTE = "Day"

export type RootStackParamList = {
  [WEEK_WEATHER_ROUTE]: undefined
  [DAY_WEATHER_ROUTE]: DayWeather | undefined
}

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={WEEK_WEATHER_ROUTE}>
          <Stack.Screen
            name={WEEK_WEATHER_ROUTE}
            component={WeatherList}
            options={{ title: "This Week's Weather" }}
          />
          <Stack.Screen
            name={DAY_WEATHER_ROUTE}
            component={WeatherDetail}
            options={{ title: "Weather" }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
