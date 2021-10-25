import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../config/theme';
import {NAVIGATION_SCREENS} from '../config/constants';

import HomeScreen from '../screens/Home';
import LessonContentScreen from '../screens/LessonContent';
import FeedbackScreen from '../screens/Feedback';

const HomeStack = createStackNavigator();
const {colors} = theme;

// Home stack
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primaryHeaderBackgroundColor,
      },
      headerTintColor: colors.primaryHeaderTintColor,
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.HOME}
      component={HomeScreen}
      options={{title: 'Your Lessons'}}
    />
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.LESSON_CONTENT}
      component={LessonContentScreen}
      options={{title: 'Content'}}
    />
    <HomeStack.Screen
      name={NAVIGATION_SCREENS.FEEDBACK}
      component={FeedbackScreen}
      options={{title: 'Your Feed Back'}}
    />
  </HomeStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
