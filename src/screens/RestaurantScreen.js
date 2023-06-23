import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { DishRow, CartIcon } from '../components';
import { StatusBar } from 'expo-status-bar';

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;
  //console.log(item.dishes)
  return (
    
    <View>
    <CartIcon/>
    <StatusBar style="light"/>
      <ScrollView>
        <View clasName="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity className="absolute p-2 top-14 left-4 bg-sky-50 rounded-full shadow" onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={25} color="green" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
          className="bg-blue-600 -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl text-white font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image className="h-4 w-4" source={require('../assets/image/fullStar.png')} />
                <Text className="text-xs">
                  <Text className="text-white">{item.stars}</Text>
                  <Text className="text-white">
                    ({item.reviews} Reviews) - <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Feather name="map-pin" size={15} color="white" />
                <Text className="text-white text-xs">Bintaro - {item.address}</Text>
              </View>
            </View>
            <Text className="text-white mt-2">{item.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-blue-600">
          <Text className="text-2xl text-white px-4 py-4 font-bold">Menu</Text>
          {/* Dishes */}
          {
            item.dishes.map((dish, index) => <DishRow item={{...dish}} key={index} /> )
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
