import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPrepareScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            // move to delivery screen
            navigation.navigate('Delivery')
        }, 3000)
    }, [])
  return (
    <View className="flex-1 justify-center items-center">
     <Image source={require('../assets/image/delivery.gif')}
        className="w-80 h-80"
     />
    </View>
  )
}

export default OrderPrepareScreen