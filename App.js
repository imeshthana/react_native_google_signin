import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailsScreen from './screens/userDetailScreen';
import Home from './screens/homeScreen';

WebBrowser.maybeCompleteAuthSession();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: "Google Sign In", headerStyle: { backgroundColor: '#3366FF' } }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ headerTitle: "User Details", headerStyle: { backgroundColor: '#3366FF' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}