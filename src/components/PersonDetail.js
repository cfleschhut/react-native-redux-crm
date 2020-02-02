import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PersonCard from './PersonCard';

const PersonDetail = ({ person, noneSelected }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <PersonCard person={person} noneSelected={noneSelected} />
    </ScrollView>
  </SafeAreaView>
);

const mapStateToProps = state => {
  return {
    person: state.people.find(person => person.id === state.personSelected),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonDetail);
