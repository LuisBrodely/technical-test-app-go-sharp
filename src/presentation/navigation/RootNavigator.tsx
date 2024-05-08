import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type RootStackParamList } from '../../../types';
import { LoginScreen } from '../screens/LoginScreen';
import { MainTabsNavigator } from './MainTabsNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MainTabsNavigator} />
    </Stack.Navigator>
  );
};
