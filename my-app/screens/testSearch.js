import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Button, Card, Text, TextInput } from 'react-native-paper'

const API_KEY = '7195c3abd5f74336a4617b0b68cba5c4'
const TestSearch = () => {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])

  const fetchCities = async (text) => {
    setCity(text)
    try {
      if (text.length >= 3) {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&type=city&format=json&apiKey=${API_KEY}`)
        if (response.status == 200) {
          const data = await response.json()
          // setWeather(data)
          setCities(data.results.slice(0, 9))
          // console.log(data.results.slice(0,9))
          // setCity(data)
          console.log(data.place_id)
          // console.log(data.datasource)
          console.log(data)
          // console.log('correct')
        } else {
          // setCities(null)
          console.log('wrong')
        }
      } else {
        setCities(null)
      }
    } catch (error) {
      console.log(error.message, 'or bad connection')
    }
  }

  return (
    <View>
      <TextInput
        label='City name'
        theme={{ color: { primary: '#00aaff' } }}
        value={city}
        onChangeText={(text) => fetchCities(text)}
      />
      {/* <Button icon='content-save' mode='contained' onPress={() => console.log('Pressed')} theme={{ color: {primary: '#00aaff'}}} style={{margin: 20}} >
            <Text style={{color: 'white'}}> Press me</Text>
        </Button> */}
      <FlatList
        data={cities}
        renderItem={({ item }) => {
          return (
            <Card
              style={{ margin: 2, padding: 12 }}
            >
              <Text>{item.name} </Text>
            </Card>
          )
        }}
        keyExtractor={item => item.place_id}
      />
    </View>
  )
}

export default TestSearch