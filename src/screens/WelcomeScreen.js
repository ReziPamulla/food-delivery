import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { General } from '../contants';
import { WelcomeCard, Separator } from '../components';
import { Display } from '../utils';


const pageStyle = isActive =>
    isActive ? 'w-4 h-4 bg-gray-400 rounded-full mx-1' : 'w-4 h-4 bg-sky-100 rounded-full mx-1';

const Pagination = ({ index }) => {
  return (
    <View className="flex-row mt-10">

     {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View className={pageStyle(true)} key={i} />
        ) : (
          <View className={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({ changed }) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View className="flex-1 items-center justify-center h-full bg-white">
      <StatusBar barStyle="light-content" className="bg-[#0A8791]" translucent />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setheight(8)} />
      <View className="h-80">
        <FlatList
         ref={welcomeList}
         data={General.WELCOME_CONTENTS} keyExtractor={(item) => item.title} 
         horizontal
         showsHorizontalScrollIndicator={false} 
         overScrollMode="never" 
         pagingEnabled
         viewabilityConfig = {viewConfigRef.current}
         onViewableItemsChanged = {onViewRef.current}
         renderItem={({ item }) => <WelcomeCard {...item} />} />
      </View>
      <Separator height={Display.setheight(8)} />
      <Pagination index={welcomeListIndex}/>
      <Separator height={Display.setheight(8)} />
        {welcomeListIndex === 2 ? (
            <TouchableOpacity className="bg-sky-600 w-60 p-3 rounded-3xl" activeOpacity={0.7} onPress={() => navigation.navigate('Signin')}>
                <Text className="text-center text-white font-medium text-xl">Get Started</Text>
            </TouchableOpacity>
            ): (
             <View className="w-96 items-center flex-row justify-between">

            <TouchableOpacity className="ml-5" activeOpacity={0.7} onPress={() => welcomeList.current.scrollToEnd()}>
                <Text className="font-bold text-xl">SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-sky-100 p-5 w-24 h-24 items-center justify-center rounded-full" activeOpacity={0.7} onPress={() => pageScroll()} >
                <Text className="font-bold text-xl">NEXT</Text>
            </TouchableOpacity>
      </View>
        )}
    </View>
  );
};

export default WelcomeScreen;
