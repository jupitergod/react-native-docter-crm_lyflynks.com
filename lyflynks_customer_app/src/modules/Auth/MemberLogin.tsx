import * as React from "react";
import { StyleSheet,Image, Text, View, KeyboardAvoidingView,Alert,AsyncStorage, TouchableOpacity } from "react-native";
import { Button as ReactButton } from "react-native-elements";
import { connect } from "react-redux";

import LoginForm from "./components/LoginForm";
import LyfLynks_Logo from "components/LyfLynks_Logo";
import { member } from "actions/auth";
 
const stateMap = (store) => {
  const { member, username, password, isFetching, error } = store.auth;
  return { member, username, password, isFetching, error };
};

class MemberLogin extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('back1');
    if (nextProps.member.success && !this.props.member.success) {
      if (nextProps.member.success && nextProps.member.data.newUser) {
        this.props.navigation.replace("NewMemberWizard");
      } else {
        this.props.navigation.replace("MemberAccountLogin");
      }
    }
  }

   async componentDidMount() {
    AsyncStorage.getItem('isLogin')
    .then((res) => {
      console.log('res',res);
      this.props.navigation.navigate("MemberLogin");
    });
  }

  navToLoginHelpScreen = () => {
    this.props.navigation.navigate("LoginHelp");
  };

  logIn = () => {
    const { dispatch, username, password } = this.props;
    dispatch(member({ username, password }));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LyfLynks_Logo style={styles.logo} />
        <LoginForm onLogIn={this.logIn} />
        <Text style={styles.errorMessage}>{this.props.error.message}</Text>
        <Text style={styles.loginHelpText} onPress={this.navToLoginHelpScreen}>
          Help me log in
        </Text>
        <View style={styles.signupContainer}>
          <Text style={styles.signUpText}>
            Interested in joining the Lyflynks{"\n"}
            community and spending more{"\n"}
            meaningful time with your aging family{"\n"} members?
          </Text> 

          {/* <ReactButton  
              title="Sign Up for a new Account"  
              buttonStyle={{
                backgroundColor: "#00A68C", 
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 28, 
                marginTop:5, 
                width:'100%'
              }}
              textStyle={{
                fontSize:17 ,
                alignItems: 'center',
                justifyContent: 'center', 
                paddingHorizontal:'10%',
                paddingVertical:5,
                fontFamily:'Avenir',
                fontWeight:'bold'
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={() => this.props.navigation.navigate("Signup")} 
        /> */}
         
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate("Signup")} >
            <Text style={{ fontFamily:'Avenir', fontSize: 17, color: '#fff', fontWeight:'bold' }}>Sign Up for a new Account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    alignSelf: "center"
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 0
  },
  signupButton: { 
    height: 56, 
    marginHorizontal: 32, 
    marginTop: 5, 
    borderRadius: 28, 
    flexDirection: 'row', 
    alignSelf: 'stretch', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#00A68C' 
  },
  signupContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center"
  },
  signUpText: {
    textAlign: "center",
    marginBottom: 5
  },
  logo: {
    height: 100,
    width: 200,
    bottom: 20
  },
  loginHelpText: {
    marginTop: 20,
    color: "#359"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center", 
  }
});

export default connect(stateMap)(MemberLogin);