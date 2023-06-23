import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Display } from '../utils'
import {Images} from '../contants'


const WelcomeCard = ({title, content, image}) => {
  return (
    <View className={`w-[400]  justify-center items-center`}>
        <Image className="w-80 h-44" source={Images[image]} resizeMode='contain'/>
        <Text className="text-[22px] font-bold">{title}</Text>
        <Text className="text-center mx-12 text-[18px]" >{content}</Text>
    </View>
  )
}



export default WelcomeCard