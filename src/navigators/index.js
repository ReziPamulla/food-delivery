import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import OrderPrepareScreen from '../screens/OrderPrepareScreen';
import DeliveryScreen from '../screens/DeliveryScreen';




const stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="Splash" component={SplashScreen} />
          <stack.Screen name="Welcome" component={WelcomeScreen} />
          <stack.Screen name="Signin" component={SigninScreen} />
          <stack.Screen name="Signup" component={SignupScreen} />
          <stack.Screen name="Home" component={HomeScreen} />
          <stack.Screen name="Restaurant" component={RestaurantScreen} />
          <stack.Screen name="Cart" options={{ presentation:'modal' }} component={CartScreen} />
          <stack.Screen name="OrderPrepare" options={{ presentation:'fullScreenModal' }} component={OrderPrepareScreen} />
          <stack.Screen name="Delivery" options={{ presentation:'fullScreenModal' }} component={DeliveryScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default Navigators;
