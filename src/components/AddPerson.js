import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

function AddPerson() {
  return (
    <SafeAreaView style={styles.container}>
      <Headline>AddPerson screen</Headline>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddPerson;
