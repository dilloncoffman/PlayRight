import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
// import AnnotateScreen from './screens/Annotate';
import HomeScreen from './screens/HomeScreen';
import InnovateScreen from './screens/InnovateScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import TabScreen from './screens/TabScreen';
import ArtistProfileScreen from './screens/ArtistProfileScreen';

/* Configure AWS Amplify */
Amplify.configure(config);

/* Stack navigators for each screen */

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: null, // disables back button to screen - might be problem later
      gesturesEnabled: false, // disables user swiping back to previous screen
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerBackTitle: null, // removes truncated 'Back' text from header when on any other screen in Home stack
    }),
  },
  Tab: {
    screen: TabScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Tab',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerTintColor: '#fff', // color of back arrow
      headerLeftContainerStyle: {
        // style for back button container
        paddingLeft: 10,
      },
    }),
  },
  ArtistProfile: {
    screen: ArtistProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Artist',
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerTintColor: '#fff', // color of back arrow
      headerLeftContainerStyle: {
        // style for back button container
        paddingLeft: 10,
      },
    }),
  },
});

const InnovateStack = createStackNavigator({
  Innovate: {
    screen: InnovateScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Innovate',
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
});

// const AnnotateStack = createStackNavigator({
//   Annotate: {
//     screen: AnnotateScreen,
//     navigationOptions: ({ navigation }) => ({
//       headerLeft: null,
//       gesturesEnabled: false,
//     }),
//   },
// });

const UserProfileStack = createStackNavigator({
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
});

/* Stack navigator options */

HomeStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  navigationOptions.tabBarColor = '#FAFAFA';

  if (routeName === 'Home') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home-outline" size={25} color="white" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that home icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="home-outline" size={25} color="white" />
    );
  }

  return navigationOptions;
};

InnovateStack.navigationOptions = ({ navigation }) => {
  // naming will get confusing when diving deeper into react-nav options, fix this
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'Innovate') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={25}
        color="white"
      />
    );
  } else {
    // placeholder for now to ensure when going to other screens that plus icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons
        name="plus-circle-outline"
        size={25}
        color="white"
      />
    );
  }

  return navigationOptions;
};

// AnnotateStack.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index];
//   const navigationOptions = {};

//   if (routeName === 'Annotate') {
//     navigationOptions.tabBarIcon = ({ focused }) => (
//       <MaterialCommunityIcons name="pencil" size={25} color="black" />
//     );
//   } else {
//     // placeholder for now to ensure when going to other screens that pencil icon doesn't disappear
//     navigationOptions.tabBarIcon = ({ focused }) => (
//       <MaterialCommunityIcons name="pencil" size={25} color="black" />
//     );
//   }

//   return navigationOptions;
// };

UserProfileStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'UserProfile') {
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account-outline" size={25} color="white" />
    );
  } else {
    // placeholder for now to ensure when going to other screens that account icon doesn't disappear
    navigationOptions.tabBarIcon = ({ focused }) => (
      <MaterialCommunityIcons name="account-outline" size={25} color="white" />
    );
  }

  return navigationOptions;
};

/* Bottom tab navigator */

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Innovate: InnovateStack,
    // Annotate: AnnotateStack,
    UserProfile: UserProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#1C202C',
      },
      showLabel: false,
    },
  }
);

/* Stack navigator for authentication flow */

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: null,
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#fff',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
      headerTintColor: '#fff', // color of back arrow
      headerLeftContainerStyle: {
        // style for back button container
        paddingLeft: 10,
      },
    }),
  },
});

/* Switch navigator for authentication flow */

const SwitchNav = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      gesturesEnabled: false,
      headerTitleStyle: {
        color: '#1C202C',
      },
      headerStyle: {
        backgroundColor: '#1C202C',
        borderBottomWidth: 0, // gets rid of hairline border bottom on header
      },
    }),
  },
  Auth: AuthStack,
  App: BottomTabNavigator,
});

/* App container */

const AppContainer = createAppContainer(SwitchNav); // will want to use createSwitchNavigator to reset state from Authentication flow eventually

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
