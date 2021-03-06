
import React  from 'react';
import {
  FlatList,
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';
// import Styles from 'styles/CommonStyles';
import { alerts } from './action';

const stateMap = (store) => {
  const { isFetching, error, alerts } = store.activities
  const { member_account } = store.auth;
  return { isFetching, error, alerts, member_account }
};

class AcitiviesAlerts extends React.Component {
  constructor (props) {
    super(props)
    console.log("log 1");
    this._handleClickListDoctorsItem = this._handleClickListDoctorsItem.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this.loadActivities = this.loadActivities.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = { refreshing: false }
    console.log("log 2");
    this.data = [
      {
        id: 0,
        type:'lawn service',
        image: {
          url: require('images/doctor-01.png'),
          width: 70,
          height: 70,
        },
        name: 'Dr. John send you a message.',
        career: '30 minutes ago',
        distance: 0.8,
        isSpecial: true
      },
      {
        id: 1,
        type: 'medical appointment',
        image: {
          url: require('images/doctor-01.png'),
          width: 70,
          height: 70,
        },
        who: 'Dr. Rachel Holland',
        specialty: 'Cardiologist',
        for_who: 'Susan Jones',
        name: 'Nurse is heading home.',
        career: '1 hour ago',
        distance: 0.8,
        isSpecial: false
      },
      {
        id: 2,
        type: 'transportation',
        image: {
          url: require('images/doctor-01.png'),
          width: 70,
          height: 70,
        },
        name: 'Emergency Alert',
        career: 'Yesterday, 2:00 pm',
        distance: 0.8,
        isSpecial: true
      },
      {
        id: 3,
        type: 'medical appointment',
        image: {
          url: require('images/doctor-01.png'),
          width: 70,
          height: 70,
        },
        who: 'Dr. Rachel Holland',
        specialty: 'Cardiologist',
        for_who: 'Susan Jones',
        career: 'Friday, 4:55 pm',
        distance: 0.8,
        isSpecial: true
      },
      {
        id: 4,
        type: 'transportation',
        image: {
          url: require('images/doctor-01.png'),
          width: 70,
          height: 70,
        },
        name: 'Time to take your pills',
        career: 'June 15th, 10:00 am',
        distance: 0.8,
        isSpecial: true,
      },
    ]
  }
  _handleClickListDoctorsItem (item) {
    // send view to inspect item

  }

  loadActivities (page = 1) {
    console.log("log 3");
    const { dispatch, member_account } = this.props;
    const token = member_account.data;
    dispatch(alerts({
      limit: 2,
      page
    }, token));
  }

  componentDidMount () {
    console.log("log 4");
    this.loadActivities();
  }

  _onRefresh () {
    console.log("log 5");
    this.setState({
      refreshing: true
    })
    // this.loadActivities();
  }

  _renderItem ({ item }) {
    return (
      <ListItem
      key={item.id}
      image={{
        url: item.image.url,
        width: item.image.width,
        height: item.image.height,
      }}
      {...item}
      header={item.name}
      subText={item.career}
        bottomText={item.distance}
        isSpecial={item.isSpecial}
        onPressButton={() => this._handleClickListDoctorsItem(item)}
      />
    )
  }
  _keyExtractor = (item, index) => item.id;
  _renderContent () {
    console.log("log 7");
   return (
      <FlatList
      data={this.data}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      onRefresh={this._onRefresh}
      refreshing={this.state.refreshing}
    />
   )
  }
  render () {
    console.log("log 8");
    return (
      <View style={{ marginBottom: 50 }}>
       {this._renderContent()}
      </View>
    );
  }
};

export default connect(stateMap)(AcitiviesAlerts);
