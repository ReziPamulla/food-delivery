import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { featured } from '../contants/categories';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';
const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">Estimated Delivery Time</Text>
            <Text className="text-gray-700 text-3xl font-extrabold">30-45 min</Text>
            <Text className="text-gray-700 mt-2 font-semibold">Your order is own its way to be delivered</Text>
          </View>
          <Image className="w-24 h-24" source={require('../assets/image/bikeGuy2.gif')} />
        </View>
        <View className="bg-green-600 p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View className="p-1 rounded-full bg-green-400">
            <Image className="h-16 w-16 rounded-full" source={require('../assets/image/user_avatar.png')} />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-white text-lg font-bold">Rezi Pamulla</Text>
            <Text className="text-white font-semibold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather name="phone" size={25}  color="green" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather name="x" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
