import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import { Svg } from 'expo';

import { 
  colorSwatch,
  fontSize,
  fontFamily,
} from '../../styles/Theme';

export default class PrimeButton extends Component {
  render = () => {
    // Get the shadow settings and give them default values
    const {
      setting: {
        btnWidth = 0,
        btnHeight = 0,
        shadowHeight = 100,
        backgroundColor = '#4b66ea',
        color = "#fff",
        realColor = "#fff",
        fontSize = 18,
        style = {}
      },
      onPressButton,
      btnText,
    } = this.props;

    // Define button style
    const styles = StyleSheet.create({
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: btnWidth,
        height: btnHeight,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        backgroundColor: backgroundColor,
      },
      text: {
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize,
        color: color,
      },
    });

    // Return a view ,whose background is a svg picture
    return (
        <TouchableHighlight
          underlayColor={colorSwatch.persianGreen}
          style={styles.button}
          onPress={onPressButton}
          >
          <Text style={styles.text}>{btnText}</Text>
        </TouchableHighlight>
    )
  }
}
