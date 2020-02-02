import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PeopleItem from './PeopleItem';
import PersonDetail from './PersonDetail';

class PeopleList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { people, detailView, selectPerson } = this.props;

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
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    detailView: state.detailView,
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
)(PeopleList);
