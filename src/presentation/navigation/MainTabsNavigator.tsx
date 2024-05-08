import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TasksScreen } from '../screens/TasksScreen';
import { AddTaskScreen } from '../screens/AddTaskScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export const MainTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
				tabBarActiveTintColor: '#EF3166',
      }}>
      <Tab.Screen name="Tasks" component={TasksScreen} 
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="list" size={24} color={color} />
					),
				}}
			/>
      <Tab.Screen name="AddTask" component={AddTaskScreen} 
				options={{
					tabBarIcon: ({ color }) => (
						<Icon name="add" size={24} color={color} />
					),
				}}
			/>
    </Tab.Navigator>
  );
};
