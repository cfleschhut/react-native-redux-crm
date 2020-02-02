import React from 'react';
import { TouchableOpacity } from 'react-native';
import PersonCard from './PersonCard';

const PeopleItem = ({ person, selectPerson }) => (
  <TouchableOpacity onPress={() => selectPerson(person.id)}>
    <PersonCard person={person} />
  </TouchableOpacity>
);

export default PeopleItem;
