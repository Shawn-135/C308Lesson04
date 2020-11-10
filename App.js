/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return (
      <Text>Welcome to C308 Web Frameworks!</Text>
  );
}

class MyFirstApp extends React.Component {
  render() {
    return(
        <Text>My first React Native app</Text>
    );
  }
}

const SemModule = (props) => {
  return (
      <Text>{props.day} - {props.modCode}</Text>
  );
}

class Eats extends React.Component {
  render() {
    return(
        <Text>{this.props.name} {this.props.location}</Text>
    );
  }
}

class Clock extends React.Component {
  render() {
    return(
        <Text>{this.props.moment.timeZone}</Text>
    );
  }
}

class WorldClock extends React.Component {
  render() {
    return(
        <Text>{this.props.city} - {this.props.time}</Text>
    );
  }
}


const App: () => React$Node = () => {
  console.log("I'm a console statement!")
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome/>
              <MyFirstApp/>
              <Text>{'\n'}My Modules this Semster:</Text>
              <SemModule day="Monday" modCode="C273"/>
              <SemModule day="Tuesday" modCode="C308"/>
              <SemModule day="Thursday" modCode="C348"/>
              <Text>{'\n'}Recommended Eats @RP:</Text>
              <Eats name="Sweet Tooth Waffles" location="W6 Level 1, E-canteen"/>
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen"/>
              <Eats name="Western Cuisine" location="E1 Level 1, Koufu"/>
              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen"/>
              <Text>{'\n'}World Clock</Text>
              <WorldClock city="Asia/Singapore" time="16:12 +08:00"/>
              <WorldClock city="Europe/London" time="08:12 +00:00"/>
              <WorldClock city="America/New_York" time="03:12 +05:00"/>
              <WorldClock city="Europe/Oslo" time="09:12 +01:00"/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
