import React, { Component } from 'react';
import { Image, StyleSheet, View, StatusBar, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import BemVindoScreen from './BemVindoScreen';
import styles from './style/SplashEstilos';

const splashImg = require('../../../assets/images/splash1.png');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSplash1: true, showSplash2: false };
    this.loadingAnimation = new Animated.Value(0); // Valor inicial da animação
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash1: false, showSplash2: true });
      this.startLoadingAnimation();
      setTimeout(() => {
        this.setState({ showSplash2: false });
      }, 2000);
    }, 2000);
  }

  startLoadingAnimation() {
    Animated.timing(this.loadingAnimation, {
      toValue: 4,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const loadingDot1Scale = this.loadingAnimation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 0.8, 0.6, 0.4],
    });

    const loadingDot2Scale = this.loadingAnimation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0.8, 1, 0.8, 0.6],
    });

    const loadingDot3Scale = this.loadingAnimation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0.6, 0.8, 1, 0.8],
    });

    const loadingDot4Scale = this.loadingAnimation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0.4, 0.6, 0.8, 1],
    });

    const activeDotScale = this.loadingAnimation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [1, 1.2, 1.2, 1.2],
    });

    if (this.state.showSplash1) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B' }]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("../../../assets/images/splash1.png")} style={styles.splashImage} />
        </View>
      );
    } else if (this.state.showSplash2) {
      return (
        <View style={[styles.container, { backgroundColor: '#D6001B' }]}>
          <StatusBar barStyle="light-content" backgroundColor="#D6001B" />
          <Image source={require("../../../assets/images/splash2.png")} style={styles.splashImage2} />
          <View style={styles.loadingContainer}>
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: loadingDot1Scale }] }]} />
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: loadingDot2Scale }] }]} />
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: loadingDot3Scale }] }]} />
            <Animated.View style={[styles.loadingDot, { transform: [{ scale: loadingDot4Scale }] }]} />
            <Animated.View style={[styles.activeDot, { transform: [{ scale: activeDotScale }] }]} />
          </View>
        </View>
      );
    } else {
      return <BemVindoScreen />;
    }
  }
}
