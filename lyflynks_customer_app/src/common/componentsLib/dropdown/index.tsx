import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, TouchableOpacity, ScrollView, Animated, Easing, StyleSheet, Picker } from 'react-native';
import PropTypes from 'prop-types';
class DropdownMenu extends Component {

  constructor(props, context) {
    super(props, context);

    var selectIndex = new Array(this.props.data.length);
    for (var i = 0; i < selectIndex.length; i++) {
      selectIndex[i] = this.props.activeIndex[i];
    }
    this.state = {
      activityIndex: -1,
      selectIndex: selectIndex,
      rotationAnims: props.data.map(() => new Animated.Value(0))
    };

    this.defaultConfig = {
      bgColor: 'grey',
      tintColor: '#333333',
      activityTintColor: "red",
      arrowImg: require('./img/dropdown_arrow.png'),
      checkImage: null
    };

  }

  renderChcek(index, title) {
    var activityIndex = this.state.activityIndex;
    if (this.state.selectIndex[activityIndex] == index) {
      var checkImage = this.props.checkImage ? this.props.checkImage : this.defaultConfig.checkImage;
      return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", paddingHorizontal: 0, flexDirection: 'row' }} >
          <View style={{ height: '100%', width: 3, backgroundColor: this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor }}></View>
          <Text
            style={[
              styles.item_text_style,
              this.props.optionTextStyle,
              { color: this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor, marginLeft: 14 }
            ]} >
            {title}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", paddingHorizontal: 0, flexDirection: 'row' }} >
          <Text style={[
            styles.item_text_style,
            this.props.optionTextStyle,
            { color: this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor }
          ]} >{title}</Text>
        </View>
      );
    }
  }

  renderActivityPanel() {
    if (this.state.activityIndex >= 0) {

      var currentTitles = this.props.data[this.state.activityIndex];

      var heightStyle = {};
      if (this.props.maxHeight && this.props.maxHeight < currentTitles.length * 44) {
        heightStyle.height = this.props.maxHeight;
      }

      return (
        <View style={[{ height: '100%',shadowRadius: 3, shadowOpacity:0.3,  shadowOffset: { width: 0, height: 3 }, elevation: 6 , zIndex:100, position: 'absolute', left: 25, right: 25, top: 46, bottom: 0},this.props.panelAbsoluteStyle]}>
          {/* <TouchableOpacity onPress={() => this.openOrClosePanel(this.state.activityIndex)} activeOpacity={1} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
            <View style={{ opacity: 0.4, backgroundColor: 'black', flex: 1 }} />
          </TouchableOpacity> */}

          <ScrollView style={[{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'white', shadowRadius: 3, shadowOpacity:0.3,  shadowOffset: { width: 0, height: 3 }, elevation: 6 }, heightStyle]} >
            {
              currentTitles.map((title, index) =>
                <TouchableOpacity key={index} activeOpacity={1} style={{ flex: 1, height: 35 }} onPress={this.itemOnPress.bind(this, index)} >
                  {this.renderChcek(index, title)}
                  {/* <View style={{ backgroundColor: '#F6F6F6', height: 1, marginLeft: 15 }} /> */}
                </TouchableOpacity>
              )
            }
          </ScrollView>
        </View>
      );
    } else {
      return (null);
    }
  }

  openOrClosePanel(index) {

    this.props.bannerAction ? this.props.bannerAction() : null;

    // var toValue = 0.5;
    if (this.state.activityIndex == index) {
      this.closePanel(index);
      this.setState({
        activityIndex: -1,
      });
      // toValue = 0;
    } else {
      if (this.state.activityIndex > -1) {
        this.closePanel(this.state.activityIndex);
      }
      this.openPanel(index);
      this.setState({
        activityIndex: index,
      });
      // toValue = 0.5;
    }
    // Animated.timing(
    //   this.state.rotationAnims[index],
    //   {
    //     toValue: toValue,
    //     duration: 300,
    //     easing: Easing.linear
    //   }
    // ).start();
  }

  openPanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0.25,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  closePanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  itemOnPress(index) {   
    if (this.state.activityIndex > -1) {
      var selectIndex = this.state.selectIndex;
      selectIndex[this.state.activityIndex] = index;
      this.setState({
        selectIndex: selectIndex
      });
      if (this.props.handler) {
        this.props.handler(this.state.activityIndex, index);
      }
    }
    this.openOrClosePanel(this.state.activityIndex);
  }

  renderDropDownArrow(index) {
    var icon = this.props.arrowImg ? this.props.arrowImg : this.defaultConfig.arrowImg;
    return (
      <Animated.Image
        source={icon}
        style={{
          width: 15,
          height: 10,
          marginRight: 5,
          tintColor: (index === this.state.activityIndex) ? (this.props.activityTintColor ? this.props.activityTintColor : this.defaultConfig.activityTintColor) : (this.props.tintColor ? this.props.tintColor : this.defaultConfig.tintColor),
          transform: [{
            rotateZ: this.state.rotationAnims[index].interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }} />
    );
  }

  render() {

    return (
      <View style={[{ flexDirection: 'column', flex: 1 }]} >
        <View style={[this.props.style, {
          flexDirection: 'row',
          backgroundColor: this.props.bgColor ? this.props.bgColor : this.defaultConfig.bgColor
        }]} >
          {
            this.props.data.map((rows, index) =>
              <TouchableOpacity
                activeOpacity={1}
                onPress={this.openOrClosePanel.bind(this, index)}
                key={index}
                style={{ flex: 1, height: 35, alignItems: "flex-start", justifyContent: "center" }} >
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between",width:"100%" }} >
                  <Text
                    style={[
                      styles.title_style,
                      this.props.titleStyle,
                      this.state.activityIndex > -1 ? styles.pressedColor : null
                    ]}>
                    {rows[this.state.selectIndex[index]]}
                  </Text>
                  {this.renderDropDownArrow(index)}
                </View>
              </TouchableOpacity>
            )
          }
        </View>
        {this.props.children}

        {this.renderActivityPanel()}

      </View>
    );
  }

}

DropdownMenu.propTypes = {
  bgColor: PropTypes.string,
  tintColor: PropTypes.string,
  activityTintColor: PropTypes.string,
  arrowImg: PropTypes.number,
  checkImage: PropTypes.number,
  data: PropTypes.array,
  bannerAction: PropTypes.func,
  optionTextStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  maxHeight: PropTypes.number,
  style: PropTypes.any,
  activeIndex:PropTypes.array
}

const styles = StyleSheet.create({
  pressedColor: {
    color: "black",
    fontWeight: '500'
  },
  title_style: {
    fontSize: 17,
    fontWeight: '300',
  },
  item_text_style: {
    color: '#333333',
    fontSize: 17,
    fontWeight: '300',
    marginLeft: 17,
  }
});

export default DropdownMenu;