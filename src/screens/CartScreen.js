import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { featured } from '../contants/categories';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 mt-4">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity className="bg-blue-600 absolute z-10 p-1 rounded-full shadow top-5 left-2" onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      <View className="bg-blue-300 flex-row px-4 items-center">
        <Image className="w-20 h-20 rounded-full" source={require('../assets/image/bikeGuy.png')} />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold text-blue-600">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="pt-5 bg-white"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View key={index} className="flex-row py-2 px-4 space-x-3 items-center bg-sky-50 rounded-3xl mx-2 mb-3 shadow-md">
              <Text className="text-blue-600 font-bold">2 x</Text>
              <Image className="w-14 h-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity className="p-1 rounded-full bg-blue-600">
                <Feather name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Totals */}
      <View className="bg-blue-300 p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-black-700">Subtotal</Text>
          <Text className="text-black-700">$20</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-black-700">Delivery Fee</Text>
          <Text className="text-black-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-black-700 font-extrabold">Order Total</Text>
          <Text className="text-black-700 font-extrabold">$30</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPrepare')}
           className="bg-blue-600 py-3 rounded-3xl">
            <Text className="text-center text-white font-bold text-lg">Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
