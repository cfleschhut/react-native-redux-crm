import React from 'react';
import { View, Text } from 'react-native';

const PeopleItem = ({ item }) => {
  return (
    <View>
      <Text>{item.firstName}</Text>
    </View>
  );
};

export default PeopleItem;
