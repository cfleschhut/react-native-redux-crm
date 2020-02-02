import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Avatar, Button } from 'react-native-paper';
import * as actions from '../actions';

function PersonDetail({ person, noneSelected }) {
  const { first_name, last_name, email } = person;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title
            title={`${first_name} ${last_name}`}
            subtitle={email}
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
  return bindActionCreators(actions, dispatch);
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
