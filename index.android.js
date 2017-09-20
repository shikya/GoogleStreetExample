/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StreetView from 'react-native-streetview';

export default class GoogleStreetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StreetView
          style={styles.streetView}
          allGesturesEnabled={true}
          coordinate={{
            'latitude': -33.852,
            'longitude': 151.211
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  streetView:{
    position: 'absolute',
    left: 50,
    right: 50,
    top: 20,
    bottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GoogleStreetExample', () => GoogleStreetExample);
