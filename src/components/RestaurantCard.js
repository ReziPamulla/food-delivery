import { View, Text, TouchableWithoutFeedback, Image, } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'


const RestaurantCard = ({item}) => {
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Restaurant', {...item})}
    >
        <View
        style={{
            shadowColor: "#000",
            shadowRadius: 7,
        }}
         className="bg-sky-100 shadow-lg rounded-3xl mr-6 mb-4">
            <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2">{item.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image className="h-4 w-4" source={require('../assets/image/fullStar.png')}/>
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.stars}</Text>
                        <Text className="text-gray-700">
                            ({item.reviews} Reviews) - <Text className="font-semibold">{item.category}</Text>
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Feather name="map-pin" size={15} color="gray" />
                    <Text className="text-gray-700 text-xs">Bintaro - {item.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard