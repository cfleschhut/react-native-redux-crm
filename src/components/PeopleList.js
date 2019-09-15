import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

function PeopleList({ people }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <PeopleItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    people: state.people,
  };
};

const styles = StyleSheet.create({
  container: {},
});

export default connect(mapStateToProps)(PeopleList);
