import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import ExampleInfo from "./exampleInfo";


// API key called and passed
const API_KEYS = '78b7537d812b354487ebc0f55ccd318a'

// The component passing the api
export default function Linked() {
    const [weather, setWeather] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');
    const [loaded, setLoaded] = useState(false)
    // a function to fetch the weather data
    // for button
    const fetchWeather = async (cityName) => {

        try {
            setLoaded(false)
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`)
            if (response.status == 200) {
                const data = await response.json()
                setWeather(data)
                setWeatherIcon(data.weather[0].icon)
                console.log('correct')
                console.log(data.name)
                console.log(data.visibility)
                console.log(data.weather[0].description)
                console.log(data.weather[0].icon)
                // console.log(data.id)
            } else {
                setWeather(null)
                console.log('wrong')
            }
            setLoaded(true)
        } catch (error) {
            console.log(error.message, 'please, make sure connection is stable')
            // fetchWeather(error.message, 'please, make sure connection is stable')
        }
    }

    // remember my city name
    useEffect(() => {
        setTimeout(() => {

            fetchWeather('Nigeria');
        }, 3000);
    }, [])

    if (!loaded) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ActivityIndicator size='large' color='red' />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Text> Weather App </Text>
            </View> */}
            <ExampleInfo data={weather} iconPick={weatherIcon} location={fetchWeather} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF508',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#c5d2ef',
        height: 80,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold',
    }
})