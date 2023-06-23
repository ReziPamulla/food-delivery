import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { RestaurantCard } from '../components'


const Featured = ({title, description, restaurants}) => {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-sm">{description}</Text>
                <Text></Text>
            </View>
            <TouchableOpacity>
                <Text className="text-green-500 font-semibold text-lg">See All</Text>
            </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible py-5" contentContainerStyle={{ 
            paddingHorizontal: 15,
         }}>  
            
        
        {
            restaurants.map((restaurant, index) => {
                return (
                    <RestaurantCard
                        item={restaurant}
                        key={index}

                    />
                )
            })
        }
        </ScrollView>
    </View>
  )
}

export default Featured