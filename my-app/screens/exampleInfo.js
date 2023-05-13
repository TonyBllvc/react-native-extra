import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import ExampleSearch from "./exampleSearch";
// import Icon from 'react-native-vector-icons/FontAwesome'

// The component containing the info 
export default function ExampleInfo({ data, iconPick, location }) {
    const {
        name,
        visibility,
        main: { temp, humidity, feels_like },
        weather: [{ icon, description, }],
        wind: { speed },
        sys: { sunrise, sunset },
        id,
    } = data

    return (
        // <SafeAreaView>
        <ScrollView style={styles.container}>
        <ExampleSearch locationName={location} />
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>
                    {name}
                </Text>
            </View>
            <View style={styles.logo}>
                <Image style={styles.largeIcon}
                    source={{ uri: `https://openweathermap.org/img/wn/${iconPick}.png` }}
                />

                <Text style={styles.currentTemp}>
                    {temp} °C
                </Text>
            </View>
            <Text style={styles.description}>
                {description}
            </Text>
            <View style={styles.extraInfo}>

                <View style={styles.info}>
                    {/* <Image
                            style={styles.smallIcon}
                            source={require('../assets/rating-2.png')}
                        /> */}
                    <Icon name='thermometer' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        {feels_like} °C
                    </Text>
                    <Text style={styles.infoText}>
                        Feels like
                    </Text>
                </View>

                <View style={styles.info}>
                    {/* <Image
                            style={styles.smallIcon}
                            source={require('../assets/rating-2.png')}
                        /> */}
                    <Icon name='eye' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        {humidity} %
                    </Text>
                    <Text style={styles.infoText}>
                        Humidity
                    </Text>
                </View>
            </View>

            <View style={styles.extraInfo}>

                <View style={styles.info}>
                    <Icon name='eye' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        { visibility }
                    </Text>
                    <Text style={styles.infoText}>
                        Visibility
                    </Text>
                </View>

                <View style={styles.info}>
                    <Icon name='cloud' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        { speed } m/s
                    </Text>
                    <Text style={styles.infoText}>
                        Wind Speed
                    </Text>
                </View>

            </View>
            
            <View style={styles.extraInfo}>

                <View style={styles.info}>
                    <Icon name='sun' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        { new Date(sunrise*1000).toLocaleString() }
                    </Text>
                    <Text style={styles.infoText}>
                        Sunrise
                    </Text>
                </View>

                <View style={styles.info}>
                    <Icon name='cloud-sun' style={styles.iconStyle} size={30} />
                    <Text style={styles.infoText}>
                        { new Date(sunset*1000).toLocaleString() }
                    </Text>
                    <Text style={styles.infoText}>
                        Sunset
                    </Text>
                </View>

            </View>
        </ScrollView>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 25
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e96e50',
        marginTop: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    largeIcon: {
        width: 150,
        height: 150,
        color: 'white'
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconStyle: {
        marginLeft: 30
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extraInfo: {
        // grid: 2,
        // gridTemplateColumns: 2,

        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: '#d0eafa',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        marginLeft: 50
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18,
    }
})