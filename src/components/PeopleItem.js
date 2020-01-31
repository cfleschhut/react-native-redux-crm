import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

export default function PeopleItem({ item, selectPerson }) {
  return (
    <TouchableOpacity onPress={() => selectPerson(item.id)}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title
          title={`${item.firstName} ${item.lastName}`}
          subtitle={item.company}
          left={props => <Avatar.Icon {...props} icon="folder" />}
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});
