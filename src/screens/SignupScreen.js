import { View,
   Text, 
   StatusBar, 
   TextInput, 
   TouchableOpacity, 
   Alert, 
   ActivityIndicator,
   StyleSheet } 
   from 'react-native';
import { React, useState } from 'react';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { db, auth } from '../database/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignupScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const register = () => {
    if (email === '' || password === '' || displayName === '') {
      Alert.alert(
        'Invalid Details',
        'Please fill all the details',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    } else {
      if (password.length < 6) {
        Alert.alert(
          'Invalid Password',
          'Password must be atleast 6 characters long',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        );
        navigation.navigate('Signup');
      } else {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          console.log('User credential', userCredential);
          const user = userCredential._tokenResponse.email;
          const myUserUid = auth.currentUser.uid;
          setDoc(doc(db, 'users', `${myUserUid}`), {
            email: user,
            displayName: displayName,
          });
        });
        navigation.navigate('Home');
      }
    }
  };

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View className="flex-1">
      <StatusBar />
      <Separator height={StatusBar.currentHeight} />
      <View className="flex-row items-center py-5 px-8">
        <Ionicons name="chevron-back-outline" size={30} onPress={() => navigation.goBack()} />
        <Text className="text-2xl font-medium text-center w-80">Sign Un</Text>
      </View>
      <Text className="text-2xl font-medium mt-16 mx-10 mb-5">Welcome</Text>
      <Text className="text-2xl mt-5 mb-7 mx-10">Register With Email, Username and Password, and enjoy ordering food</Text>

      <View className="bg-gray-200 p-3 mx-10 rounded-md border border-gray-300 justify-center mb-7">
        <View className="flex-row gap-2">
          <Entypo name="email" size={22} className=" text-gray-500" />
          <TextInput placeholder="Email" className="text-xl w-64" onChangeText={(text) => setEmail(text)} />
        </View>
      </View>

      <View className="bg-gray-200 p-3 mx-10 rounded-md border border-gray-300 justify-center mb-7">
        <View className="flex-row gap-2">
          <Feather name="user" size={22} className=" text-gray-500" />
          <TextInput placeholder="Username" className="text-xl w-64 " onChangeText={(text) => setDisplayName(text)} />
        </View>
      </View>

      <View className="bg-gray-200 p-3 mx-10 rounded-md border border-gray-300 justify-center">
        <View className="flex-row gap-2">
          <Feather name="lock" size={22} className=" text-gray-500" />
          <TextInput placeholder="Password" className="text-xl w-64" secureTextEntry={passwordVisible} onChangeText={(text) => setPassword(text)} maxLength={15} />
          <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={22} onPress={togglePasswordVisibility} />
        </View>
      </View>

      <TouchableOpacity className="mx-10 mt-8 rounded-md justify-center items-center h-10 bg-sky-600 " onPress={register}>
        <Text className="text-white font-semibold text-xl">Sign Up</Text>
      </TouchableOpacity>
      <View className="mx-10 py-5 flex-row">
        <Text className="text-md text-gray-700 mr-1">Do you have an account?</Text>
        <Text className="Text-md text-blue-600" onPress={() => navigation.navigate('Signin')}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SignupScreen;
