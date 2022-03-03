import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = [
  'Grace',
  'Caleb',
  'Jack',
  'Brooke',
  'Lei',
  'Craig',
  'Annie',
];
class SpinWheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 1000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./assets/splash.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({winnerValue: value, winnerIndex: index});
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => {
                this.buttonPress()
                this.child._tryAgain();
              }}

              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
              {participants[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              {/* <Text style={styles.tryAgainText}>TRY AGAIN</Text> */}
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default SpinWheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C'
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 35,
  },
  tryAgainButton: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});