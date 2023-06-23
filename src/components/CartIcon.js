import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
         className="bg-blue-800 flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
          <View className="p-2 px-4 rounded-full bg-blue-500">
            <Text className="text-white text-lg font-extrabold">3</Text>
          </View>
          <Text className="flex-1 text-center font-extrabold text-white text-lg">
            View Cart
          </Text>

          <Text className="font-extrabold text-white text-lg">
            ${23}
          </Text>
          
        </TouchableOpacity>
    </View>
  )
}

export default CartIcon