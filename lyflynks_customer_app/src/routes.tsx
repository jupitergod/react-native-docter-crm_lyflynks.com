import { Platform, Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { MemberLogin, SignUp, SignupComplete, NewMemberWizard, MemberAccountLogin } from './modules/Auth';
import { ActivityLogScreen, MainMenuScreen } from './modules/Activity';
import { MemberInviteScreen } from './modules/Invite';
import { CheckInDetailsScreen, CheckInFormScreen } from './modules/CheckIn';
// import MemberLoginScreen from "../screens/MemberLoginScreen";
// import MemberAccountLoginScreen from "../screens/MemberAccountLoginScreen";
// import ActivitiesUpcomingScreen from "../screens/ActivitiesUpcomingScreen";
// import ActivitiesCompletedScreen from "../screens/ActivitiesCompletedScreen";
// import ActivityLogScreen from "../screens/ActivityLogScreen";
// import MainMenuScreen from "../screens/MainMenuScreen";
// import LoginHelpScreen from "../screens/LoginHelpScreen";
// import SignupScreen from "../screens/SignupScreen";
// import ResetPasswordScreen from "../screens/ResetPasswordScreen";
// import { SignupComplete } from "../components/Signup Forms/SignupComplete/SignupComplete";
// import  InviteOthersForm  from "../components/Signup Forms/InviteOthersForm/InviteOthersForm";
// import NewMemberWizardScreen from "../screens/NewMemberWizard";
// import ActivitiesAlertsScreen from "../screens/ActivitiesAlertsScreen";
// import CallOrderScreen from '../screens/AccountsCallOrderScreen';
// import MemberInviteScreen from '../screens/MemberInviteScreen';
// import DatePicker from '../components/DatePicker.js';
// import { CheckInDetailsScreen, CheckInFormScreen } from '../screens/CheckIn';

const tabNavigatorConfig = {
  tabBarPosition: "top",
  tabBarOptions: {
    activeTintColor: "#e91e63",
    inactiveTintColor: "gray",
    labelStyle: {
      fontSize: 12,
      fontWeight: "700",
      marginBottom: 10,
      width: "100%"
    },
    activeBackgroundColor: "white",
    inactiveBackgroundColor: "white",
    style: {
      height: 50,
      backgroundColor: "white"
    },
    indicatorStyle: {
      backgroundColor: "white"
    }
  },
  order: ["Upcoming", "Completed", "Alerts"],
  animationEnabled: true
};

// const tabRouteConfig = {
//   Upcoming: {
//     screen: ActivitiesUpcomingScreen
//   },
//   Completed: {
//     screen: ActivitiesCompletedScreen
//   },
//   Alerts: {
//     screen: ActivitiesAlertsScreen
//   }
// };

// export const ActivityLog = TabNavigator(tabRouteConfig, tabNavigatorConfig);

const Navigation = StackNavigator(
  {
    CheckInFormScreen: {
      screen: CheckInFormScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    MemberLogin: {
      screen: MemberLogin,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Signup: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },
    SignUpComplete: {
      screen: SignupComplete,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    // EmailInvite: {
    //   screen: InviteOthersForm,
    //   navigationOptions: {
    //     header: null,
    //     gesturesEnabled: false
    //   }
    // },
    // LoginHelp: {
    //   screen: LoginHelpScreen
    // },
    MemberAccountLogin: {
      screen: MemberAccountLogin,
    },
    ActivityLogScreen: {
      screen: ActivityLogScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    MainMenuScreen: {
      screen: MainMenuScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    CheckInDetailsScreen: {
      screen: CheckInDetailsScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    // login: {
    //   screen: CallOrderScreen,
    //   navigationOptions: {
    //     header: null,
    //     gesturesEnabled: false
    //   }
    // }, 
    logout: {
      screen: MemberLogin,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    MemberInvite: {
      screen: MemberInviteScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    NewMemberWizard: {
      screen: NewMemberWizard,
      navigationOptions: {
        title: "New Member Wizard",
        headerLeft: null,
        headerStyle: {
          marginTop: Platform.OS === "android" ? 24 : 0,
          backgroundColor: "#0E3A53",
          shadowRadius: 5,
          shadowOpacity: 0.11,
          shadowOffset: {
            height: 5,
            width: 0
          },
          shadowColor: "#000"
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 24,
          fontWeight: "600"
        }
      }
    }
  },
  {
    headerMode: "screen",
    initialRouteName: "MemberLogin"
  }
);

export default Navigation;