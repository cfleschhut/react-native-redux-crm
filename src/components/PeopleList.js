import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PeopleItem from './PeopleItem';
import PersonDetail from './PersonDetail';

function PeopleList({ people, detailView, selectPerson }) {
  if (detailView) {
    return <PersonDetail />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <PeopleItem item={item} selectPerson={selectPerson} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPerson: id => dispatch(actions.selectPerson(id)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleList);
