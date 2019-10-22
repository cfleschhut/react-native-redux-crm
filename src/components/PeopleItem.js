import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

export default function PeopleItem({ item }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title
        title={`${item.firstName} ${item.lastName}`}
        subtitle={item.company}
        left={props => <Avatar.Icon {...props} icon="folder" />}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
});
