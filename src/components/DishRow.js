import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const DishRow = ({ item }) => {
  return (
    <View className="flex-row items-center bg-blue-300 p-3 rounded-3xl shadow-2xl mb-3 mx-4">
      <Image
        className=""
        style={{
          width: 120,
          height: 100,
        }}
        source={item.image}
      />
        <View className="flex flex-1 space-y-3">
            <View className="pl-3">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-black">{item.description}</Text>
            </View>
            <View className="flex-row justify-between pl-3 items-center">
                <Text className="text-black text-lg font-bold">
                    ${item.price}
                </Text>
                <View className="flex-row items-center">
                    <TouchableOpacity
                        className="p-1 rounded-full bg-blue-600"
                    >
                        <Feather name="minus" size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="px-3 text-lg font-bold">{2}</Text>
                    <TouchableOpacity
                        className="p-1 rounded-full bg-blue-600"
                    >
                        <Feather name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

export default DishRow;
