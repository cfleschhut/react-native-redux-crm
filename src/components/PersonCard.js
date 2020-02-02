import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar, Button } from 'react-native-paper';

const PersonCard = ({ person, noneSelected }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Title
      title={`${person.first_name} ${person.last_name}`}
      subtitle={person.email}
      left={props => <Avatar.Icon {...props} icon="folder" />}
    />

    {noneSelected && (
      <Card.Actions>
        <Button onPress={noneSelected}>Cancel</Button>
      </Card.Actions>
    )}
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default PersonCard;
