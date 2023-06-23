import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import { Categories, Featured } from '../components'
import { featured } from '../contants/categories'




const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-blue-900">
      <StatusBar barStyle="dark-content"/>
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Feather name="search" size={25} color="white" />
          <TextInput placeholder='Restaurants'  className="text-white flex-1 ml-2"/>
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Feather name="map-pin" color="white" size={25} />
            <Text className="text-white">Bintaro, Tangerang Selatan</Text>
          </View> 
        </View>
        <View  className="p-3 rounded-full bg-blue-500">
                <Feather name='sliders' color="white" size={20}/>
            </View>
      </View>


      {/* Main Components */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
      {/* Categories  Component*/}
      <Categories />


      {/* Featured Component */}
      <View className="mt-9 mb-10">
          {
            [featured,].map((item, index) => {
              return (
                <Featured 
                key={index} 
                title={item.title} 
                restaurants={item.restaurants}
                description={item.description}
                />
              )
            })
          }
      </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen