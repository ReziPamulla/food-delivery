import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import {React, useState, useEffect} from 'react'
import { Separator } from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons' 
import Feather from 'react-native-vector-icons/Feather'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../database/firebase';


const SigninScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    setIsLoggedIn(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(!authUser){
        setIsLoggedIn(false);
      }
      if(authUser){
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  },[])

  const login = () => {

    if(email === "" || password === ""){
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }

    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
      console.log("user credential",userCredential);
      const user = userCredential.user;
      console.log("user details",user)
    })
  }

  if (isLoggedIn) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <View className="flex-1">
      <StatusBar  />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row items-center py-5 px-8">
        <Ionicons name='chevron-back-outline' size={30} onPress={() => navigation.goBack()} />
        <Text className="text-2xl font-medium text-center w-80">Sign In</Text>
      </View>
      <Text className="text-2xl font-medium mt-16 mx-10 mb-5">Welcome</Text>
      <Text className="text-2xl mt-5 mb-7 mx-10">Enter Your Email and Password, and enjoy ordering food</Text>
      <View className="bg-gray-200 p-3 mx-10 rounded-md border border-gray-300 justify-center mb-7">
        <View className="flex-row gap-2">
            <Feather name="user" size={22} className=" text-gray-500"/>
            <TextInput placeholder="Email" className="text-xl w-64" onChangeText={text => setEmail(text)}/>
        </View>
      </View>
      
      <View className="bg-gray-200 p-3 mx-10 rounded-md border border-gray-300 justify-center">
        <View className="flex-row gap-2">
            <Feather  name="lock" size={22} className=" text-gray-500"/>
            <TextInput placeholder="Password" className="text-xl w-64" secureTextEntry={passwordVisible} onChangeText={text => setPassword(text)}/>
            <Feather
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={22}
            onPress={togglePasswordVisibility}
          />
        </View>
      </View>

        <TouchableOpacity className="mx-10 mt-8 rounded-md justify-center items-center h-10 bg-sky-600 " onPress={login}>
            <Text className="text-white font-semibold text-xl" >Sign In</Text>
        </TouchableOpacity>
        <View className="mx-10 py-5 flex-row">
            <Text className="text-md text-gray-700 mr-1">Don't have an account?</Text>
            <Text className="Text-md text-blue-600" onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
        </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default SigninScreen