import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import AddPerson from './AddPerson';
import CompaniesList from './CompaniesList';

const TabNavigator = createBottomTabNavigator(
  {
    People: {
      screen: PeopleList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={42} color={tintColor} />
        ),
      },
    },
    Add: {
      screen: AddPerson,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="plus" size={42} color={tintColor} />
        ),
      },
    },
    Companies: {
      screen: CompaniesList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="archive" size={42} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
