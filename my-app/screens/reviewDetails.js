import { Button, StyleSheet, Header, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import { useRoute } from '@react-navigation/native';

// the i
import Card from '../shared/card';

//lesson number Y (along with home & homeStack) -- v6
export default function ReviewDetails({ navigation }) {

    const route = useRoute();
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText} >  {title} </Text>
                <Text style={globalStyles.titleText} > {body} </Text>
                <View style={styles.rating}>
                    <Text> GameZone rating: </Text>
                    <Image source={images.ratings[rating]} style={{ width: 89 , height: 21 }} />
                </View>
            </Card>
            {/* <Button title='Back to home screen' onPress={handler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
    }
})

// //lesson number Z(along with home & homeStack)

// import { Button, StyleSheet, Text, View } from 'react-native';
// import { globalStyles } from '../styles/global';

// export default function ReviewDetails({ navigation }) {

//     const handler = () => {
//         navigation.goBack();
//     }

//     return (
//         <View style={globalStyles.container}>
//             <Text style={globalStyles.titleText} > ReviewDetails Screen</Text>
//             <Button title='Back to home screen' onPress={handler} />
//         </View>
//     )
// }

