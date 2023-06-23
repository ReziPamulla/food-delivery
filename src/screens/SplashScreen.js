import { View, Text, StatusBar, Image } from 'react-native';
import {React, useEffect} from 'react';
import { Images } from '../contants';
import { Display } from '../utils';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-red-600">
        <StatusBar barStyle="light-content" className="bg-[#0A8791]" translucent />
        <Image className={`w-[${Display.setWidth(60)}] h-[${Display.setheight(60)}]`} source={Images.PLATE} />
        <Text className="text-white text-2xl font-bold mt-5">FoodDelivery App</Text>
    </View>
  );
};

export default SplashScreen;
