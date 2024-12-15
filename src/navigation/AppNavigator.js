import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import AddUsersScreen from '../screens/AddUsersScreen';


const Tab = createBottomTabNavigator();

const getTabBarIcon = (iconName,focused,size)=>(
  <MaterialCommunityIcons
  name={iconName}
  size={size}
  color={focused ? '#6851a4' : '#919091'}
  />
);

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator
    screenOptions={({route,navigation})=>({
      headerShown:false,
      tabBarLabelStyle:{
        color:navigation.isFocused() ? '#6851a4' : '#919091',
      },
      tabBarIcon:({focused,size}) => {
           const iconName = route.name === 'Home' ? 'home' : route.name === 'Add Task' ? 'plus-circle' : 'account-plus';
           return getTabBarIcon(iconName,focused,size);
      },
    })}
    >
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      />
   <Tab.Screen
      name="Add Task"
      component={AddTaskScreen}
      />
         <Tab.Screen
      name="Add Users"
      component={AddUsersScreen}
      />

    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default AppNavigator;
