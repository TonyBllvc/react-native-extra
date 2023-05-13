import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

const ExampleSearch = ({ locationName }) => {
    const [cityName, setCityName] = useState('')

    const search = (e) => {
        e.preventDefault()
        locationName(cityName)
    }

    return (
        <View style={styles.searchBar} >
            <TextInput
                placeholder='Search City'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <EvilIcons name='search' size={20} color='black' onPress={ search } />
        </View>
    )
}

export default ExampleSearch

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: Dimensions.get('screen').width -20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray'
    }
})