import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function PeopleItem({ item }) {
  return (
    <Card>
      <Card.Content>
        <Title>
          {item.firstName} {item.lastName}
        </Title>
        <Paragraph>{item.company}</Paragraph>
      </Card.Content>
    </Card>
  );
}
