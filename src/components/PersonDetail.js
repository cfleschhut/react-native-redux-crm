import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Avatar, Button } from 'react-native-paper';
import * as actions from '../actions';

function PersonDetail({ person, noneSelected }) {
  const { firstName, lastName, company } = person;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title
            title={`${firstName} ${lastName}`}
            subtitle={company}
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Actions>
            <Button onPress={noneSelected}>Cancel</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    person: state.people.find(person => person.id === state.personSelected),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    noneSelected: () => dispatch(actions.noneSelected()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonDetail);
